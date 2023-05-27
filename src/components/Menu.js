import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            {/*Course */}
            <TouchableOpacity style={styles.buttonStyles} onPress={() => navigation.navigate('Course')} >
                <Image source={{ uri: "https://img.icons8.com/color/48/classroom.png" }} style={styles.iconStyle} />
                <Text style={styles.textStyles}>Course</Text>
            </TouchableOpacity>
            {/*Contact */}

            <TouchableOpacity style={styles.buttonStyles} onPress={() => navigation.navigate('Contact')} >
                <Image source={{ uri: "https://img.icons8.com/color/48/add-contact-to-company.png" }} style={styles.iconStyle} />
                <Text style={styles.textStyles}>Contact</Text>
            </TouchableOpacity>
            {/*About */}

            <TouchableOpacity style={styles.buttonStyles} onPress={() => navigation.navigate('About')} >
                <Image source={{ uri: "https://img.icons8.com/bubbles/50/about.png" }} style={styles.iconStyle} />
                <Text style={styles.textStyles}>About</Text>
            </TouchableOpacity>
            {/*UserData */}

            <TouchableOpacity style={styles.buttonStyles} onPress={() => navigation.navigate('UserData')} >
                <Image source={{ uri: "https://img.icons8.com/bubbles/50/database.png" }} style={styles.iconStyle} />
                <Text style={styles.textStyles} >UserData</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    menuContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    textStyles:
    {
        textTransform: 'uppercase',
        textAlign:'center',
        marginLeft:20
        
    },
    iconStyle:
    {
        width: '100%',
        height: 20,
        alignItems: 'center',
        aspectRatio: 1,
        marginLeft: 30,
        padding: 20

    },
    buttonStyles:
    {
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})