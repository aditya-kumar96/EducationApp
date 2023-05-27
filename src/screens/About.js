import { StyleSheet, Text, View ,Image, TouchableOpacity, Linking} from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutContainer}>

      <Text style={styles.mainHeader}>ADITYA KUMAR</Text>
      <Text style={styles.paraStyle}>I am React Native Developer</Text>
        <View style={styles.imgContainer}>
          <Image style={styles.imagestyle}
            source={{uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"}}
          />
        </View>
        <View style={styles.descriptionContainer}>
        <View style={styles.descriptionTitleContainer}> 
          <Text style={styles.descriptionTitle}> ABOUT ME</Text>
        </View>
        <Text style={styles.description}>
            I have 2 years of experience as react native developer in penguin technology.
            i was also an aspirants for more than 2 years , it was quite tough call for me to 
            change my plans, because things are not working acording to me. So, I decide to move 
            into the private sector.

        </Text>
        </View>

      <View style={styles.socialmediaContainer}>
          <Text style={styles.socialText}>Follow me On Social Media</Text>
          <View style={styles.imageContainer}>
            {/* Instagram*/}
          <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/i_katiyan_aadi")}>
          <Image style={styles.imgStyle} source={ 
            {
              uri:
              "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"
              }
              }/>
          </TouchableOpacity>
          {/* YOutube*/}
          <TouchableOpacity onPress={()=>Linking.openURL("https://www.youtube.com/channel/UCei7S5FB_cM86rysMT1Q4PA")}>
          <Image
          style={styles.imgStyle}
           source={
            {
              uri:"https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-youtube-social-media-round-icon-png-image_6315993.png"
              }
              }
              
              />
          </TouchableOpacity>
            {/* Facebook*/}
          <TouchableOpacity
          onPress={()=> Linking.openURL("https://www.facebook.com/aadi.kori")}>
          <Image 
          style={styles.imgStyle}
          source={
            {
              uri:"https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-facebook-social-media-logo-png-image_6618432.png"
              }
              }/>
              </TouchableOpacity>
          </View>

      </View>

    </View>
  )
}

export default About

const styles = StyleSheet.create({
  aboutContainer:
  {
    width:"100%",
    minHeight:"100%",
    backgroundColor:"rgba(255,255,255,0.5)",
    margin:1,
    borderRadius:1,
  },
  mainHeader:
  {
    textAlign:'center',
    fontSize:25,
    fontWeight:"700",
    marginTop:25,

    width:"100%",
    
  },
  paraStyle:
  {
    textAlign:'center',
    fontSize:25,
    fontWeight:"700",
    marginTop:10,
    width:"100%",
    color:'lightgrey'

  },
  imgContainer:
  {
    justifyContent:'center',
      margin:20,
      
  },
  imagestyle:
  {
    height:200,
    width:200,
    borderRadius:105,
    alignSelf:'center',
    padding:20
  },
  descriptionContainer:
  {
    backgroundColor:'violet',
    padding:20
  },
  descriptionTitleContainer:
  {
    padding:10,
    alignSelf:'center',
    display:'flex'
  },
  descriptionTitle:
  {
    fontSize:20,
    fontWeight:"700",
    color:"#fff",
    textAlign:'justify'
  },
  description:
  {
    fontSize:15,
    color:"#fff",
    padding:10,
    textAlign:'justify'
  },

socialmediaContainer:
{
  width:"100%",
  height:"50%",

  
},
socialText:{
  fontSize:20,
  color:"#000",
  textAlign:'justify',
  alignSelf:'center',
  margin:5,
  marginTop:80,
  
},
imageContainer:
{
  width:"100%",
  justifyContent:'center',
  display:'flex',
  flexDirection:'row'
},

imgStyle:{
  height:50,
  width:50,
  padding:10,
  margin:22,
  

}






})