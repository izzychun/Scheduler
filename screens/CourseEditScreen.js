import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { block } from 'react-native-reanimated';
import * as Yup from 'yup';

const Field = ({label, value}) => {
  return(
    <View style = {styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.field}>{value}</Text>
    </View>
  )
}

const validationSchema = Yup.object().shape({
  id: Yup.string()
    .required()
    .matches(/(F|W|S)\d{3,}/, 'Must be a term and 3-digit number')
    .label('ID'),
  meets: Yup.string()
    .required()
    .matches(/(M|Tu|W|Th|F)+ +\d\d?:\d\d-\d\d?:\d\d/, 'Must be weekdays followed by start and end time')
    .label('Meeting times'),
  title: Yup.string()
    .required()
    .label('Title'),
});

const CourseEditScreen = ({navigation, route}) => {
  const course = route.params.course;

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Form
      validationSchema={validationSchema}
      initialValues={{
        id: course.id,
        meets: course.meets,
        title: course.title,
      }}
    >
          <Form.Field
            name="ID"
            leftIcon="identifier"
            placeholder= "F110"
            autoCapitalize="none"
            autoFocus={true}
          />
          <Form.Field
            name="meets"
            leftIcon="calendar-range"
            placeholder="MThu 12:00-13:50"
            autoCapitalize="none"
          />
          <Form.Field
            name="title"
            leftIcon="format-title"
            placeholder="Introduction to programming"
          />
        </Form>
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

export default CourseEditScreen;