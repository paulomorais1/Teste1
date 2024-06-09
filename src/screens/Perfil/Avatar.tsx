import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Avatar: React.FC = () => {
    return (
        <View style={[styles.avatar, { borderColor: "#000000FF" }]}>
            <Image
                source={{
                    uri: "https://raw.githubusercontent.com/paulomorais1/Teste1/Teste/src/assets/images/avatar.png",
                }}
                style={{ width: 80, height: 80 }}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        position: "absolute",
        top: 96,
        width: 84,
        height: 84,
        backgroundColor: "#D9CBF6FF",
        overflow: "hidden",
        borderRadius: 41,
        borderWidth: 1.5,
        borderColor: "#000000FF",
        resizeMode: "contain",
    },
    avatarImage: {
        width: 82,
        height: 82,
    },
});

export default Avatar;
