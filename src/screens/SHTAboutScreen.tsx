import React, { useCallback, useContext, useState } from "react";
import { Platform, View } from "react-native";
import { Icon, SocialIcon as NativeSocialIcon, SocialIconProps } from "react-native-elements";

import { ethers } from "ethers";
import useAsyncEffect from "use-async-effect";
import AmountMeta from "../components/AmountMeta";
import ApproveButton from "../components/ApproveButton";
import BackgroundImage from "../components/BackgroundImage";
import Border from "../components/Border";
import Button from "../components/Button";
import Container from "../components/Container";
import Content from "../components/Content";
import Text from "../components/Text";
import Title from "../components/Title";

import WebFooter from "../components/web/WebFooter";

import useColors from "../hooks/useColors";
import useLinker from "../hooks/useLinker";
import useSwapState, { OrderType, SwapState } from "../hooks/useSwapState";
import useTranslation from "../hooks/useTranslation";
import Screen from "./Screen";
import { GlobalContext } from "../context/GlobalContext";
import FlexView from "../components/FlexView";
import { Spacing } from "../constants/dimension";

const SHTAboutScreen = () => {
    const t = useTranslation();
    const { darkMode } = useContext(GlobalContext);
    const { background, textLight } = useColors();
    const onPressTwitter = useLinker("https://twitter.com/standardhashrate", "", "_blank");
    const onPressGithub = useLinker("https://github.com/Standard-Hashrate-Group", "", "_blank");
    const onPressDiscord = useLinker("https://discord.gg/standardhashrate", "", "_blank");
    const onPressHome = useLinker("https://www.1-b.tc", "", "_blank");
    return (
        <Screen>
            <Container>
                <BackgroundImage />
                <Content>
                    <Title text={t("about")} />
                    <Text light={true} style={{marginBottom:Spacing.large}}>
                        {t("about-desc")}
                    </Text>

                    <Button title={"HomePage"} onPress={onPressHome}/>
                    <Border/>
                    <FlexView style={{ width: "100%", justifyContent: "center" }}>
                        <SocialIcon type="github-alt" onPress={onPressGithub} />
                        <SocialIcon type="twitter" onPress={onPressTwitter} />
                        <SocialIcon type="wordpress" onPress={onPressHome} />
                        <Icon
                            type={"material-community"}
                            name={"discord"}
                            raised={true}
                            reverse={true}
                            color={background}
                            reverseColor={darkMode ? "white" : "#7289da"}
                            style={{ backgroundColor: background }}
                            containerStyle={{
                                borderWidth: 1,
                                borderColor: darkMode ? "white" : textLight
                            }}
                            onPress={onPressDiscord}
                        />
                    </FlexView>
                </Content>
                {Platform.OS === "web" && <WebFooter />}
            </Container>
        </Screen>
    );
};
const SocialIcon = (props: SocialIconProps) => {
    const { darkMode } = useContext(GlobalContext);
    const { background, textLight } = useColors();
    return (
        <NativeSocialIcon
            {...props}
            light={!darkMode}
            iconColor={darkMode ? "white" : undefined}
            style={{
                backgroundColor: background,
                borderWidth: 1,
                borderColor: darkMode ? "white" : textLight
            }}
        />
    );
};
export default SHTAboutScreen;
