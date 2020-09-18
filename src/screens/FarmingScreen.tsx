import React, { FC, useCallback, useState } from "react";
import { Image, TouchableHighlight, View } from "react-native";
import { Hoverable } from "react-native-web-hover";

import { useNavigation } from "@react-navigation/native";
import { ethers } from "ethers";
import useAsyncEffect from "use-async-effect";
import ApproveButton from "../components/ApproveButton";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import CloseIcon from "../components/CloseIcon";
import Column from "../components/Column";
import Container from "../components/Container";
import Content from "../components/Content";
import ErrorMessage from "../components/ErrorMessage";
import FetchingButton from "../components/FetchingButton";
import FlexView from "../components/FlexView";
import InsufficientBalanceButton from "../components/InsufficientBalanceButton";
import LPTokenSelect, { LPTokenItemProps } from "../components/LPTokenSelect";
import Meta from "../components/Meta";
import Notice from "../components/Notice";
import SelectIcon from "../components/SelectIcon";
import Subtitle from "../components/Subtitle";
import Text from "../components/Text";
import TokenInput from "../components/TokenInput";
import { Spacing } from "../constants/dimension";
import useColors from "../hooks/useColors";
import useFarmingState, { Action, FarmingState } from "../hooks/useFarmingState";
import { MASTER_CHEF } from "../hooks/useSDK";
import LPToken from "../types/LPToken";
import MetamaskError from "../types/MetamaskError";
import { formatBalance, isEmptyValue, parseBalance } from "../utils";
import Screen from "./Screen";

const FarmingScreen = () => {
    return (
        <Screen>
            <Container>
                <Content>
                    <View style={{ alignItems: "center", marginBottom: Spacing.large }}>
                        <Farming />
                    </View>
                </Content>
            </Container>
        </Screen>
    );
};

const Farming = () => {
    const state = useFarmingState();
    return (
        <>
            <Column>
                <Text h4={true} style={{ textAlign: "center" }}>
                    🌾 Farming
                </Text>
            </Column>
            <LPTokenSelect
                state={state}
                title={"1. Select a pool for yield farming:"}
                emptyText={"Temporarily unable to load pools."}
                Item={TokenItem}
            />
            <ActionSelect state={state} />
            <Deposit state={state} />
            <Withdraw state={state} />
        </>
    );
};

const TokenItem: FC<LPTokenItemProps> = props => {
    const { background, backgroundHovered, textMedium } = useColors();
    const amount = formatBalance(props.token.totalDeposited || "0", props.token.decimals, 4);
    const onPress = useCallback(() => {
        props.onSelectToken(props.token);
    }, [props.onSelectToken, props.token]);
    return (
        <Hoverable>
            {({ hovered }) => (
                <TouchableHighlight onPress={onPress}>
                    <View style={{ backgroundColor: hovered ? backgroundHovered : background }}>
                        <FlexView style={{ alignItems: "center", margin: Spacing.small }}>
                            <View>
                                <LogoSymbol token={props.token.tokenA} />
                                <LogoSymbol token={props.token.tokenB} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ textAlign: "right", fontSize: 15 }}>Total Deposited</Text>
                                <Text light={true} style={{ textAlign: "right", fontSize: 22, color: textMedium }}>
                                    {amount}
                                </Text>
                            </View>
                            {props.selected ? <CloseIcon /> : <SelectIcon />}
                        </FlexView>
                    </View>
                </TouchableHighlight>
            )}
        </Hoverable>
    );
};

const LogoSymbol = ({ token }) => {
    const { textMedium } = useColors();
    return (
        <FlexView style={{ alignItems: "center", marginBottom: Spacing.tiny }}>
            <Image
                source={{ uri: token.logoURI }}
                style={{ width: 24, height: 24, backgroundColor: "white", borderRadius: 12 }}
            />
            <Text light={true} style={{ fontSize: 22, color: textMedium, marginLeft: Spacing.small }}>
                {token.symbol}
            </Text>
        </FlexView>
    );
};

const ActionSelect = ({ state }: { state: FarmingState }) => {
    if (!state.selectedLPToken) {
        return <Column noTopMargin={true} />;
    }
    const actions = ["deposit", "withdraw"];
    const index = state.action ? actions.indexOf(state.action) : null;
    const onPress = useCallback((i: number) => {
        state.setAction(actions[i] as Action);
    }, []);
    const radius = Spacing.tiny;
    return (
        <Column>
            <Subtitle text={"2. What do you want to do with this pool?"} />
            <ButtonGroup
                selectedIndex={index}
                onPress={onPress}
                buttons={["☘️ Deposit", "🚜 Withdraw"]}
                buttonStyle={{
                    borderTopLeftRadius: index === 0 ? radius : 0,
                    borderBottomLeftRadius: index === 0 ? radius : 0,
                    borderTopRightRadius: index === 1 ? radius : 0,
                    borderBottomRightRadius: index === 1 ? radius : 0
                }}
                containerStyle={{ marginHorizontal: Spacing.small }}
            />
        </Column>
    );
};

const Deposit = ({ state }: { state: FarmingState }) => {
    if (!state.selectedLPToken || state.action !== "deposit") {
        return <Column noTopMargin={true} />;
    }
    return (
        <>
            <AddLiquidityNotice state={state} />
            <TokenInput
                title={"3. How many tokens would you DEPOSIT?"}
                token={state.selectedLPToken}
                hidden={state.selectedLPToken.balance.isZero()}
                amount={state.amount}
                onAmountChanged={state.setAmount}
            />
            <DepositInfo state={state} />
            <DepositControls state={state} />
        </>
    );
};

const AddLiquidityNotice = ({ state }: { state: FarmingState }) => {
    if (!state.selectedLPToken!.balance.isZero()) {
        return <Column noTopMargin={true} />;
    }
    return (
        <Column noTopMargin={true}>
            <View style={{ marginTop: Spacing.large, marginHorizontal: Spacing.small }}>
                <Notice
                    color={"red"}
                    text={
                        "You need some " +
                        state.selectedLPToken!.symbol +
                        " token to start farming. Add liquidity to get the LP token."
                    }
                />
            </View>
            <AddLiquidityButton />
        </Column>
    );
};

const DepositInfo = ({ state }: { state: FarmingState }) => {
    if (state.selectedLPToken!.balance.isZero()) {
        return <Column noTopMargin={true} />;
    }
    const balance = formatBalance(state.selectedLPToken!.balance, state.selectedLPToken!.decimals);
    const sushiReward =
        state.expectedSushiRewardPerBlock && state.amount
            ? formatBalance(
                  state.expectedSushiRewardPerBlock
                      .mul(parseBalance(state.amount, 18))
                      .div(ethers.BigNumber.from(10).pow(18)),
                  18
              )
            : null;
    return (
        <Column noTopMargin={true}>
            <Meta label={"My Balance"} text={balance} />
            {!isEmptyValue(state.amount) && <Meta label={"SUSHI Reward per Block"} text={sushiReward || "…"} />}
        </Column>
    );
};

const DepositControls = ({ state }: { state: FarmingState }) => {
    const [error, setError] = useState<MetamaskError>({});
    useAsyncEffect(() => setError({}), [state.selectedLPToken]);
    if (state.selectedLPToken!.balance.isZero()) {
        return <Column noTopMargin={true} />;
    }
    const approveRequired = !state.selectedLPTokenAllowed;
    const disabled = approveRequired || isEmptyValue(state.amount);
    return (
        <Column>
            {parseBalance(state.amount, state.selectedLPToken!.decimals).gt(state.selectedLPToken!.balance) ? (
                <InsufficientBalanceButton symbol={state.selectedLPToken!.symbol} />
            ) : state.loading ? (
                <FetchingButton />
            ) : (
                <>
                    <ApproveButton
                        token={state.selectedLPToken!}
                        spender={MASTER_CHEF}
                        onSuccess={() => state.setSelectedLPTokenAllowed(true)}
                        onError={setError}
                        hidden={isEmptyValue(state.amount) || !approveRequired}
                    />
                    <DepositButton state={state} onError={setError} disabled={disabled} />
                </>
            )}
            {error.message && error.code !== 4001 && <ErrorMessage error={error} />}
        </Column>
    );
};

const AddLiquidityButton = () => {
    const { navigate } = useNavigation();
    const onPress = useCallback(() => {
        navigate("Liquidity");
    }, [navigate]);
    return (
        <Button
            color={"red"}
            title={"Add Liquidity"}
            containerStyle={{ marginTop: Spacing.normal }}
            onPress={onPress}
        />
    );
};

const DepositButton = ({
    state,
    onError,
    disabled
}: {
    state: FarmingState;
    onError: (e) => void;
    disabled: boolean;
}) => {
    const onPress = useCallback(() => {
        onError({});
        state.onDeposit().catch(onError);
    }, [state.onDeposit, onError]);
    return <Button size={"large"} title={"Deposit"} disabled={disabled} loading={state.depositing} onPress={onPress} />;
};

const Withdraw = ({ state }: { state: FarmingState }) => {
    if (!state.selectedLPToken || state.action !== "withdraw") {
        return <Column noTopMargin={true} />;
    }
    const token: LPToken = {
        ...state.selectedLPToken,
        balance: state.amountDeposited || ethers.constants.Zero
    };
    return (
        <Column>
            <NoLPTokenNotice state={state} />
            <TokenInput
                title={"3. How many tokens would you WITHDRAW?"}
                token={token}
                hidden={state.loading || state.amountDeposited?.isZero() || false}
                amount={state.amount}
                onAmountChanged={state.setAmount}
            />
            <WithdrawInfo state={state} />
            <WithdrawControls state={state} />
        </Column>
    );
};

const NoLPTokenNotice = ({ state }: { state: FarmingState }) => {
    if (state.loading || !state.amountDeposited?.isZero()) {
        return <Column noTopMargin={true} />;
    }
    return (
        <Column noTopMargin={true}>
            <View style={{ marginHorizontal: Spacing.small }}>
                <Notice
                    text={"You don't have any " + state.selectedLPToken!.symbol + " token deposited. Deposit it first."}
                />
            </View>
        </Column>
    );
};

const WithdrawInfo = ({ state }: { state: FarmingState }) => {
    if (state.loading || !state.amountDeposited || state.amountDeposited.isZero()) {
        return <Column noTopMargin={true} />;
    }
    const deposit = formatBalance(state.amountDeposited, state.selectedLPToken!.decimals);
    const pendingSushi = formatBalance(state.pendingSushi || ethers.constants.Zero, state.selectedLPToken!.decimals);
    return (
        <Column noTopMargin={true}>
            <Meta label={"My Deposit"} text={deposit} />
            <Meta label={"Pending Sushi Reward"} text={pendingSushi} />
            <View style={{ marginTop: Spacing.normal, marginHorizontal: Spacing.small }}>
                <Notice text={"All pending sushi reward will be transferred to you if you withdraw."} />
            </View>
        </Column>
    );
};

const WithdrawControls = ({ state }: { state: FarmingState }) => {
    const [error, setError] = useState<MetamaskError>({});
    useAsyncEffect(() => setError({}), [state.selectedLPToken]);
    if (state.loading) {
        return (
            <Column>
                <FetchingButton />
            </Column>
        );
    }
    if (!state.amountDeposited || state.amountDeposited.isZero()) {
        return <Column noTopMargin={true} />;
    }
    return (
        <Column>
            {parseBalance(state.amount, state.selectedLPToken!.decimals).gt(state.amountDeposited) ? (
                <InsufficientBalanceButton symbol={state.selectedLPToken!.symbol} />
            ) : (
                <WithdrawButton state={state} onError={setError} disabled={isEmptyValue(state.amount)} />
            )}
            {error.message && error.code !== 4001 && <ErrorMessage error={error} />}
        </Column>
    );
};

const WithdrawButton = ({
    state,
    onError,
    disabled
}: {
    state: FarmingState;
    onError: (e) => void;
    disabled: boolean;
}) => {
    const onPress = useCallback(() => {
        onError({});
        state.onWithdraw().catch(onError);
    }, [state.onWithdraw, onError]);
    return (
        <Button size={"large"} title={"Withdraw"} disabled={disabled} loading={state.withdrawing} onPress={onPress} />
    );
};

export default FarmingScreen;