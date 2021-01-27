import React, { useState, useEffect } from 'react';
import Course from "./Course"
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { hasConflict } from '../utils/course.js'



const CourseSelector = ({courses}) => {
  const [selected, setSelected] = useState([]);

  const toggle = course => setSelected(selected =>(
    selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
  ));

  return(
    <View style = {StyleSheet.courseList}>
      {
        courses.map (course => (
          <Course key = {courses.id} course = {course}
          select = {toggle}
          isDisabled = {hasConflict(course,selected)}
          isSelected = {selected.includes(course)}
          />
        ))
      }
    </View>
      
  )

}


export default CourseSelector;