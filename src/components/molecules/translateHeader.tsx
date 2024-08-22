import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LoadImage } from '../../utils/loadImages';
import { dimensions } from '../../constants/dimensions';
import { colors } from '../../styles/colors';

const TranslateHeader: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerTouchArea} onPress={() => navigation.goBack()}>
        <Image 
          source={LoadImage.backIcon} 
          style={styles.backIcon}
        />
          <Text style={styles.headerText}>翻訳</Text>
      </TouchableOpacity>
      <View style={styles.deeplLogo}>
        <Image
            source={LoadImage.deepllogo}
            style={{ width: dimensions.SCREEN_WIDTH * 0.6, height: dimensions.SCREEN_WIDTH * 0.08 }}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: dimensions.SCREEN_HEIGHT * 0.07,
  },
  headerTouchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: dimensions.SCREEN_WIDTH * 0.06,
    height: dimensions.SCREEN_WIDTH * 0.06,
    tintColor: colors.iconColorPrimary,
    marginLeft: dimensions.SCREEN_WIDTH * 0.02,
  },
  headerText: {
    fontSize: dimensions.SCREEN_WIDTH * 0.05,
    fontWeight: 'normal',
    color: colors.textPrimary,
    marginLeft: dimensions.SCREEN_WIDTH * 0.02,
  },
  deeplLogo: {
    marginTop: dimensions.SCREEN_HEIGHT * 0.01,
    marginRight: dimensions.SCREEN_WIDTH * 0.02,
  },
});

export default TranslateHeader;
