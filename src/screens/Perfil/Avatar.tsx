import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AvatarImg from "./J1.jpg";
const Avatar = () => {
    return (
        <View style={[styles.avatar, { borderColor: "#000000FF" }]}>
            <Image
                source={require("../../assets/J1.jpg")}
                style={styles.avatarImage}
                onError={(e) =>
                    console.log("Image Load Error: ", e.nativeEvent.error)
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        position: "absolute",
        top: 96,
        left: 154,
        width: 82,
        height: 82,
        backgroundColor: "#D9CBF6FF",
        overflow: "hidden",
        borderRadius: 41,
        borderWidth: 1.5,
        borderColor: "#000000FF",
    },
    avatarImage: {
        width: 82,
        height: 82,
    },
});

export default Avatar;
