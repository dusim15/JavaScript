import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const IntroPage = ({ navigation }) => {
  const handleStart = () => {
    // Navigate to the main page or next screen
    navigation.navigate('MainPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.subtitle}>Your go-to app for everything!</Text>
      <Button title="Get Started" onPress={handleStart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default IntroPage;
