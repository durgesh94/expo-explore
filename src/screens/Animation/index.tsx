// import React from "react";
// import { Animated, View, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export const AnimationExample: React.FC = () => {
//     return (
//         <SafeAreaView>
//             <Animated.View>
//                 <Text>Animation</Text>
//             </Animated.View>
//         </SafeAreaView>
//     )
// }

import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    SafeAreaView,
    Easing
} from 'react-native'

const arr: any = []
for (var i = 0; i < 500; i++) {
    arr.push(i)
}

export const AnimationExample: React.FC = () => {

    let animatedValue: any = [];
    let animatedValue1 = new Animated.Value(0)
    arr.forEach((value: any) => {
        animatedValue[value] = new Animated.Value(0)
    })

    useEffect(() => {
        animate();
        animate2();
    }, []);

    const animate2 = () => {
        animatedValue1.setValue(0)
        const createAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration,
                    easing,
                    delay,
                    useNativeDriver: true
                }
            )
        }
        Animated.parallel([
            createAnimation(animatedValue1, 5000, Easing.ease),
        ]).start()
    }

    const animate = () => {
        const animations = arr.map((item: any) => {
            return Animated.timing(
                animatedValue[item],
                {
                    toValue: 1,
                    duration: 50, // stagger: 4000, sequence: 50
                    useNativeDriver: true
                },
            )
        })
        // Animated.stagger(10, animations).start()
        Animated.sequence(animations).start()
    }

    const animations = arr.map((a: any, i: any) => {
        return <Animated.View key={i} style={{ opacity: animatedValue[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 2, marginTop: 2 }} />
    })

    const scaleText = animatedValue1.interpolate({
        inputRange: [0, 1],
        outputRange: [0.1, 2]
    })

    return (
        <SafeAreaView style={{ marginTop: 50 }}>
            <Animated.View
                style={{ transform: [{ scale: scaleText }] }}>
                <Text>Welcome</Text>
            </Animated.View>
            <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "700" }}>Animation</Text>
            <View style={styles.container}>
                {animations}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap"
    }
})