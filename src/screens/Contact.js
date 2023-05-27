import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';

const Contact = ({navigation}) => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [mobile,setMobile]=useState()
    const [question,setQuestion]=useState()
    const [isSelected,setisSelected]=useState(false)


    //submit the form

    const submit=()=>
    {
      if(!name && !email && !mobile && !question )
      {
        Alert.alert('Please fill all the fields')
      }
      else{
        Alert.alert(`Thank YOu : ${name}`)
        navigation.navigate('Home')
      }
    }
    

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level Up Your Knowledge</Text>
      <Text style={styles.descriptionHeader}>You can reach us anytime
      via aditya@gmail.com</Text>
      
      {/* INpuut container */}
      <View style={styles.inputContainer}>
        {/*Name */}
      <Text style={styles.label}> Enter Your Name </Text>
      <TextInput style={styles.inputStyle}
      placeholder='Enter Your Name '
      value={name}
      onChangeText={(userdata)=>setName(userdata)}
      
      />
      </View>
      <View style={styles.inputContainer}>

      {/*Email*/}
      <Text style={styles.label}> Enter Your Email </Text>
      <TextInput style={styles.inputStyle}
      placeholder='Enter Your Email '
      value={email}
      onChangeText={(userdata)=>setEmail(userdata)}
      
      />
      </View>
      <View style={styles.inputContainer}>

      {/*Mobile*/}
      <Text style={styles.label}> Enter Your Mobile </Text>
      <TextInput style={styles.inputStyle}
      placeholder='Enter Your Mobile'
      value={mobile}
      onChangeText={(userdata)=>setMobile(userdata)}
      />
      </View>
      <View style={styles.inputContainer}>

      {/*Question*/}
      <Text style={styles.label}>How can I help You  </Text>
      <TextInput style={[styles.inputStyle,styles.multiLines]}
      placeholder=' Tell us About Yourself '
      numberOfLines={5}
      multiline={true}
      value={question}
      onChangeText={(userdata)=>setQuestion(userdata)}
      />

      </View>
        {/*Checkbox*/}
        <View style={styles.wrapper}>
        <CheckBox
          value={isSelected}
          onValueChange={()=>setisSelected(!isSelected)}
          onCheckColor= { isSelected ? "4630EB":undefined}
          style={
            [styles.checkbox,
            {
            color : isSelected ? "#4630EB" :"#4630EB"
          }]}
          
          
        />
        <Text style={styles.wrapperText}> I have read and agreed with T&C</Text>


        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity style={[styles.button,{
            backgroundColor:isSelected? "#4630EB" : "grey"
          }]}
          // disabled={!isSelected}
          onPress={submit}
          >
              <Text style={[styles.buttontext,{color: isSelected ? "white":"black"}]}>Submit</Text>
          </TouchableOpacity>


        </View>
        
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    mainContainer:
    {
      height:"100%",
      paddingHorizontal:30,
      backgroundColor:"#fff"
    },
    mainHeader:
    {
      fontSize:20,
      color:"#344055",
      fontWeight:"500",
      paddingTop:20,
      paddingBottom:15,

    },
    descriptionHeader:
    {
      fontSize:20,
      color:"#7d7d7d",
      paddingBottom:20,
      lineHeight:25
    },
    inputContainer:
    {
        marginTop:20
    },
    label:
    {
      fontWeight:"bold",
      color:"7d7d7d",
      paddingBottom:5,
      lineHeight:25
    },
    inputStyle:
    {
      borderWidth:1,
      borderColor:"rgba(0,0,0,0.3)",
      paddingHorizontal:15,
      paddingVertical:5,
      borderRadius:2,
    },
    multiLines:
    {
      paddingVertical:4
    },
    button:
    {
      borderRadius:5,
      paddingVertical:15,
      paddingHorizontal:18,
      display:"flex",
      justifyContent:"center",
      alignItems:'center',
      marginVertical:30
    },
    buttontext:
    {
     fontSize:20,
     fontWeight:"600" 
    },
    wrapper:
    {
      display:"flex",
      flexDirection:"row",
      marginTop:10
    },
    wrapperText:{
      marginTop:5,
      fontSize:15,
      color:"#7d7d7d"
    }



})