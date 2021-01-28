import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { block } from 'react-native-reanimated';

const Field = ({label, value}) => {
  return(
    <View style = {styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.field}>{value}</Text>
    </View>
  )
}

const CourseDetailScreen = ({route}) => {
  const course = route.params.course;

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Field label = "ID" value = {course.id}/>
        <Field label = "Meeting Times" value = {course.meets} />
        <Field label = "Course" value = {course.title} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    aignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8d0ff',
  },
  field: {
    height: 40,
    width: 300,
    padding: 5,
    backgroundColor: 'white',
  },
  fieldContainer:{
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5
  }
})

export default CourseDetailScreen;