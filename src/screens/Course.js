import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../api/Course'
import { useNavigation } from '@react-navigation/native'

const Course = () => {

  const navigation = useNavigation();
  const CourseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.Container1}>

          <View>
            <Image style={styles.cardImage}
              source={item.image}
              resizeMode='contain' />

          </View>
          {/* <Text style={styles.mainHeader}>{item.id}</Text> */}
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => navigation.navigate("CourseDetails")}
            >
              <Text style={styles.buttonText} >Course Details</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }



  return (
    <FlatList
      style={styles.flat}
      data={Courses}
      renderItem={CourseCard}
      keyExtractor={(item) => item.id}
    />
  )
}

export default Course

const styles = StyleSheet.create({
  mainContainer:
  {
    paddingHorizontal: 30,
  },
  Container1:
  {
    padding: 30,
    borderRadius: 15,
    elevation: 10,
    paddingBottom: 20,
    backgroundColor: "rgba(255,255,255,0.90)",
    textAlign: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 15,
    marginVertical: 30,
    marginBottom: 20,
  },
  mainHeader:
  {
    fontSize: 22,
    color: "#344055",
    textTransform: 'uppercase',
    fontWeight: '500',
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center"
  },
  cardImage:
  {
    width: "100%",
    height: undefined,
    aspectRatio: 1
  },
  description:
  {
    textAlign: 'left',
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 20,
    color: "#7d7d7d"
  },
  buttonContainer:
  {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonStyle:
  {
    backgroundColor: '#809fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:
  {
    fontSize: 20,
    fontWeight: "500",
    textTransform: 'capitalize'
  }





})
