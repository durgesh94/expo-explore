import React from "react";
import { View, Text, Image, StatusBar, Dimensions } from "react-native";
import { FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

export const FlatDetails: React.FC = ({ route, navigation }: any) => {

    const { data } = route.params;

    return (
        <View style={{
            flex: 1,
        }}>
            <View>

                <Image style={{
                    width: width,
                    height: 350,
                    resizeMode: "cover"
                }}
                    source={require("../../../assets/images/flat4.jpg")}
                />
                <View style={{
                    position: "absolute",
                    marginTop: StatusBar.currentHeight! + 10,
                    marginLeft: 15
                }}>
                    <AntDesign name="close" size={20} color="#FFFFFF" onPress={() => navigation.goBack()} />
                </View>
            </View>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 20
            }}>
                <View>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: "500"
                    }}>{data.name}</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 20
                }}>
                    <FontAwesome name="star" size={16} color="red" />
                    <Text style={{ marginHorizontal: 5, color: "grey" }}>{data.rating}</Text>
                    <Text style={{ color: "grey" }}>({data.views})</Text>
                    <FontAwesome5 name="cross" size={16} color="red" style={{ marginLeft: 20 }} />
                    <Text style={{ marginHorizontal: 5, color: "grey" }}>{data.rating}</Text>
                    <Text style={{ color: "grey" }}>({data.views})</Text>
                </View>
                <View style={{
                    marginTop: 20
                }}>
                    <Text style={{ fontSize: 16 }}>{data.details}</Text>
                </View>
                <View style={{ borderWidth: 0.5, marginTop: 10, width: "20%", borderColor: "grey" }} />
                <View style={{
                    marginTop: 20,
                    flexDirection: "row"
                }}>
                    <View style={{ flex: 1, alignItems: "flex-start" }}>
                        <Text style={{ fontWeight: "700" }}>{data.name}</Text>
                        <Text style={{ fontWeight: "700" }}>Hosted by {data.owner}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
                        <Image
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 30
                            }}
                            source={require("../../../assets/images/pro.jpg")}
                        />
                    </View>
                </View>
                <View style={{ borderWidth: 0.5, marginTop: 10, borderColor: "grey" }} />
                <View style={{
                    marginTop: 20
                }}>
                    <Text style={{ fontWeight: "500" }}>{data.description}</Text>
                </View>
            </View>
        </View>
    )
}