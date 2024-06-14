import User from "@/models/User";
import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";


const Avatar: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Image
                    source={{
                        uri: "https://raw.githubusercontent.com/paulomorais1/Teste1/Teste/src/assets/images/avatar.png",
                    }}
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
        justifyContent: "center",
        alignItems: "center",
       marginTop:80
    },
    avatar: {

        width: 92,
        height: 92,
        backgroundColor: "#D9CBF6FF",
        overflow: "hidden",
        borderRadius: 41,
        borderWidth: 1.5,
        borderColor: "#000000FF",
        justifyContent: "center", // Centraliza a imagem dentro do avatar
        alignItems: "center",

    },
    avatarImage: {
        width: 92,
        height: 92,
    },
});

export default Avatar;
