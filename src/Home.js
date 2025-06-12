import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.jpg')} style={styles.profileImage} />
      <Text style={styles.name}>Vishakha Nawale</Text>

      <h1>coding</>
      <Text style={styles.bio}>SDET | Automation Engineer | Tech Enthusiast</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 50 },
  profileImage: { width: 150, height: 150, borderRadius: 75 },
  name: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  bio: { fontSize: 16, color: 'gray', marginTop: 5 }
});