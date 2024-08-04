import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSourceLanguage, useSetSourceLanguage } from '../../context/sourceLanguageContext';
import { useTargetLanguage, useSetTargetLanguage } from '../../context/targetLanguageContext';
import { TouchableIcon } from '../../components/atoms/touchableIcon';
import LanguageButton from '../../components/atoms/languageButton';
import SwapButton from '../../components/atoms/swapButton';
import { LoadImage } from '../../utils/loadImages';
import { dimensions } from '../../constants/dimensions';
import { colors } from '../../styles/colors';

interface LanguageSwitchProps {
    isFocused: boolean;
    handleBackPress: () => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ isFocused, handleBackPress }) => {
    const sourceLanguage = useSourceLanguage();
    const setSourceLanguage = useSetSourceLanguage();
    const targetLanguage = useTargetLanguage();
    const setTargetLanguage = useSetTargetLanguage();

    const switchLanguages = () => {
        setSourceLanguage(targetLanguage);
        setTargetLanguage(sourceLanguage);
    };

    return (
        <View style={styles.languageSwitchContainer}>
            {isFocused && (
                <View style={styles.backIconContainer}>
                    <TouchableIcon
                        imageSource={LoadImage.backIcon}
                        onPress={handleBackPress}
                    />
                </View>
            )}
            <View style={styles.languageSwitch}>
                <LanguageButton title={sourceLanguage.name} />
                <SwapButton onPress={switchLanguages} />
                <LanguageButton title={targetLanguage.name} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    languageSwitchContainer: {
        marginTop: dimensions.SCREEN_HEIGHT * 0.01,
        marginBottom: dimensions.SCREEN_HEIGHT * 0.03,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    backIconContainer: {
        position: 'absolute',
        left: 0,
    },
    languageSwitch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LanguageSwitch;
