import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const BotLoadingIndicator: React.FC = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="small" color={colors.iconColorPrimary} />
      <Text style={styles.loadingText}>ちょい待ち...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
  },
  loadingText: {
    marginLeft: '2%',
    fontSize: 16,
    color: '#555',
  },
});

export default BotLoadingIndicator;
