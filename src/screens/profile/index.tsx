import React from "react";
import { View, Text, ScrollView, Image, ImageBackground, Dimensions, Button, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from 'expo-constants';
import { Feather, MaterialIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const data = [
    {
        id: 1,
        icon: "react",
        title: "React Native Developer + UI",
        sections: 10,
        hours: 4
    },
    {
        id: 2,
        icon: "google",
        title: "Flutter for deisngers",
        sections: 10,
        hours: 4
    },
    {
        id: 3,
        icon: "android",
        title: "Android developers",
        sections: 10,
        hours: 4
    }
]

export const Profile: React.FC = ({ navigation }: any) => {

    return (
        // <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: "#DCDCDC" }}>
            {/* image */}
            <View style={{
                position: "absolute",
                backgroundColor: "green",
                flex: 1,
                width: "100%",
                height: "80%"
            }}>
                <Image
                    style={{ width: "100%", height: "80%" }}
                    source={require("../../../assets/images/img.jpg")} />
            </View>
            {/* left back navigation */}
            <View style={{
                position: "absolute",
                marginTop: Constants.statusBarHeight,
                marginLeft: 10
            }}>
                <MaterialIcons
                    name="keyboard-arrow-left"
                    size={40}
                    color="white"
                    onPress={() => navigation.goBack()}
                />
            </View>
            {/* greyBox */}
            <View style={{
                flex: 1,
                backgroundColor: "#DCDCDC",
                marginTop: "60%",
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40
            }}>
                {/* Profile */}
                <View style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    marginHorizontal: "10%",
                    marginTop: "-32%",
                    borderRadius: 20
                }}>
                    <View style={{
                        alignItems: "center",
                        marginVertical: 20,
                        marginHorizontal: 20,
                        flexDirection: "row",
                    }}>
                        <View style={{
                            marginHorizontal: 20
                        }}>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: "bold"
                            }}>Durgesh Tambe</Text>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: "500",
                            }}>Design + Coding </Text>
                        </View>
                        <View>
                            <Image
                                style={{
                                    width: 55,
                                    height: 60,
                                    borderRadius: 10
                                }}
                                source={require("../../../assets/images/pro.jpg")} />
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        marginHorizontal: 40,
                    }}>
                        <Text>I design, Code {'&'} Write. </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        margin: 10,
                        marginTop: 20
                    }}>
                        <View style={{
                            marginHorizontal: 10,
                            flexDirection: "row"
                        }}>
                            <View style={{
                                marginHorizontal: 20,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Feather name="users" size={24} color="#ADD8E6" />
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: "bold"
                                }}>40K</Text>
                                <Text>Followers</Text>
                            </View>
                        </View>
                        <View style={{
                            marginHorizontal: 20,
                            flexDirection: "row"
                        }}>
                            <View style={{
                                marginHorizontal: 20,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Feather name="thumbs-up" size={24} color="#ADD8E6" />
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: "bold"
                                }}>536K</Text>
                                <Text>Kudos</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Courses */}
                <View style={{
                    marginTop: 40,
                }}>
                    <View style={{
                        marginHorizontal: 20
                    }}>
                        <Text style={{ fontWeight: "500" }}>Completed Courses</Text>
                    </View>
                    <View style={{
                        marginHorizontal: 20,
                        marginTop: 20
                    }}>
                        {data.map((item, idx) => {
                            return (
                                <View style={{
                                    flexDirection: "row",
                                    marginVertical: 10
                                }}>
                                    <View style={{
                                        marginRight: 20,
                                        backgroundColor: "#C2DFFF",
                                        borderRadius: 15,
                                        padding: 5
                                    }}>
                                        <FontAwesome5 name={item.icon} size={40} color="#2B65EC" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: "bold"
                                        }}>{item.title}</Text>
                                        <View style={{
                                            flexDirection: "row",
                                            marginTop: 5
                                        }}>
                                            <Text>{item.sections} Sections</Text>
                                            <Text style={{ paddingHorizontal: 10 }}>-</Text>
                                            <Text>{item.hours} Hours</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
                {/* Subscribe */}
                <View style={{
                    marginVertical: 20,
                    borderRadius: 20,
                    marginHorizontal: 20,
                    backgroundColor: "#38ACEC"
                }}>
                    <View style={{
                        flexDirection: "row",
                        marginVertical: 20,
                        marginHorizontal: 40
                    }}>
                        <View style={{
                            marginRight: 20,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <AntDesign name="creditcard" size={40} color="#2B65EC" />
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "#FFF"
                            }}>SUBSCRIBE NOW</Text>
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Text>19 Courses</Text>
                                <Text style={{ marginHorizontal: 10 }}>-</Text>
                                <Text>75 Hours</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        // </SafeAreaView>
    )
}