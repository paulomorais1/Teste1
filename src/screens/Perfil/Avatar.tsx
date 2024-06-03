import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Avatar = () => {
    console.log("Avatar component is being rendered");

    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Image
                    source={require("../../assets/images/avatar.png")} // Verifique o caminho aqui
                    style={styles.avatarImage}
                    onError={(e) => {
                        console.log("Image Load Error: ", e.nativeEvent.error);
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 82,
        height: 82,
        backgroundColor: "#D9CBF6FF",
        overflow: "hidden",
        borderRadius: 41,
        borderWidth: 1.5,
        borderColor: "#000000FF",
       
        justifyContent: 'center', // Centraliza a imagem dentro do avatar
        alignItems: 'center',
    },
    avatarImage: {
        width: 82,
        height: 82,
    },
});

export default Avatar;
