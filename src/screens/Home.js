import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';

const Home = (props) => {
    const description =
        "Hello dosto ! My Name is Aditya , and I am here to teach you some classes.Hello dosto ! My Name is Aditya , and I am here to teach you some classes.";

    return (

        <View style={styles.mainContainer}>
            <View style={styles.homeTop}>
                <Image style={styles.ImageHeader}
                    source={require('../assests/logo2.jpg')}
                    resizeMode='contain'
                />
                <Text style={styles.mainHeader}>Welcome to</Text>
                <Text style={[styles.mainHeader, {
                    fontSize: 33,
                    color: '#4c5dab',
                    marginTop: 0
                }
                ]}
                >{props.name}</Text>

                <Text style={styles.ParaStyle}>
                    {description}
                </Text>
            </View>

            <View style={styles.menuStyle}>
                <View style={styles.lineStyles}></View>
                <Menu />
                <View style={[styles.lineStyles, {
                    marginVertical: 5
                }]}></View>

            </View>
        </View>



    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        display: "flex",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        textAlign: 'center'
    },
    ImageHeader:
    {
        height: undefined,
        width: '100%',
        aspectRatio: 1,
        display: 'flex',
        alignItems: 'stretch',
        marginTop: 50,
        borderRadius: 30
    },
    homeTop: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,

    },
    mainHeader:
    {
        fontSize: 30,
        textTransform: 'uppercase',
        color: '#344055',

    },
    ParaStyle:
    {
        textAlign: 'left',
        fontSize: 19,
        color: '#7D7D7d',
        marginTop: 30,
        paddingBottom: 50,
        lineHeight: 26
    },
    menuStyle:
    {

    },
    lineStyles:
    {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: 'gray'
    }
});

export default Home

