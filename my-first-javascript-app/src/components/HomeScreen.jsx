import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const Separator = () => {
  return <View style={styles.separator}></View>
  }

const HomePage = () => {
  // Get the current time to determine the greeting
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = '';

  // Determine the appropriate greeting based on the time of day
  if (currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour < 17) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  // Placeholder for recently accessed patient files
  const recentlyAccessedPatients = [
    { id: '1', name: 'Patient 1' },
    { id: '2', name: 'Patient 2' },
    { id: '3', name: 'Patient 3' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{`${greeting}, Dr. Amaka.`}</Text>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search for patients" />
      </View>
      <Separator/>
      <div></div>
      <Text style={styles.normal}>{`Recently searched patients`}</Text>
      <Separator/>
      <FlatList
        data={recentlyAccessedPatients}
        renderItem={({ item }) => (     
          <View style={styles.recentPatientItem}>           
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start', // Align everything to the left
    justifyContent: 'center',
    backgroundColor: '#FFECF0', // Light pink background color
  },
  greeting: {
    fontSize: 24,
    marginBottom: 16,
    color: '#FF4081', // Dark pink text color
    fontWeight: '500', // Make the greeting slightly bold
  },
  normal: {
    fontSize: 20,
    marginBottom: 16,
    color: '#FF4081', // Dark pink text color
    fontWeight: '400', // Make the greeting slightly bold
  },
  searchBar: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: 'white', // White background color for search bar
  },
  patientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  patientName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  accessedDate: {
    fontSize: 12,
    color: '#888',
  },
});

export default HomePage;

