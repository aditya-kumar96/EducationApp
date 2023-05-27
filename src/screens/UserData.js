import { FlatList, StyleSheet, Text, View ,Image} from 'react-native'
import React, { useEffect, useState } from 'react'

const UserData = () => {
  const [myData,setmyData]=useState([]);
  //loading
  const [isLoaded,setisLoaded]=useState(true)
  //get the data from api
  const getUserData=async()=>
  {
   
   try{
     const url="https://aditya-kumar96.github.io/users_data_API/usersdata.json";
    const data=await fetch(url);
      
    const variable=await data.json();
    
  // console.warn(variable.users);
        setmyData(variable.users)
          setisLoaded(false)
        }
  catch(error){
    console.error(error);
  }
  
    }

//showing user datat
const showUserData =({item})=>
{
  //loading part and then user data
  return(
    <View style={styles.card}>
      <View style={styles.imageContainer}>
          <Image style={styles.imgStyle}
              source={{uri:item.image}}
          />
      </View>
      <View style={styles.contentContainer}>
            <View style={styles.biodatacontainer}>

              <Text style={styles.biodatatext}>Bio-Data</Text>
              <Text style={styles.idnumber}>
                  {
                    item.id<10? `#0${item.id}` : `#${item.id}`
                  }

              </Text>
            </View>

                  <View style={styles.mainContent}>
                    <Text style={styles.myName}>Name : {item.name}</Text> 
                    <Text style={styles.myName}>Age : {item.age}</Text> 
                    <Text style={[styles.myName,{textAlign:'right',fontSize:14}]}>Email : {item.email}</Text> 

                  </View>

      </View>
      </View>
  )

}

//call getUserData one time
  useEffect(()=>{getUserData()},[])

  return (
    <View>
      <Text style={styles.mainHeader}>List of Student</Text>
        <FlatList
        keyExtractor={(item)=>item.id}
          data={myData}
          horizontal 
          showsHorizontalScrollIndicator={false}
          renderItem={showUserData}
        />


    </View>
  )
}

export default UserData

const styles = StyleSheet.create({
  mainContainer:
  {
    width:"100%",
    height:200,
    paddingVertical:50,
    backgroundColor:"#ebebeb"
  },
  card:
  {

    width:250,
    height:350,
    backgroundColor:"#fff",
    borderRadius:5,
    margin:10
  },
  biodatacontainer:
  {
    width:"100%",
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:"#353535",
    paddingVertical:10,
  },
  biodatatext:
  {
    fontSize:20,
    color:'#fff',
    fontWeight:"600",
    marginLeft:10
  },
  idnumber:
  {
    fontSize:20,
    color:'rgba(255,255,255,0.5)',
    fontWeight:"700",
    paddingRight:10
  },
  mainContent:
  {
   padding:10,
    margin:5,
    borderRadius:2,
    shadowRadius:0.5,
    borderColor:"#353535",
    elevation:2,
    backgroundColor:"#7d7d7d",
    borderWidth:0.5,
  },
  myName:
  {
    fontSize:15,
    color:"#fff",
    alignSelf:'flex-start',
    padding:1,
    marginBottom:2,
    textTransform:'capitalize'
  },
  mainHeader:
  {
    fontSize:30,
    color:"#a18e5",
    textAlign:'center'

  },
  imageContainer:
  {
    padding:10
  },

  imgStyle:
  {
    width:"100%",
    height:180,
  },
  contentContainer:{
    backgroundColor:"#353535"
  }

  



})