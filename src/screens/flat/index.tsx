import React from "react";
import { View, Text, StatusBar, Image, Dimensions, SafeAreaView } from "react-native";
import { ScrollView, TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get("screen");

const data = [
    {
        id: 1,
        image: require("../../../assets/images/flat1.jpg"),
        rating: "5.0",
        views: 240,
        type: "View Details",
        name: "Regular Home",
        desc: "Entire Flat - 3 Bed",
        owner: "Durgesh Tambe",
        details: "Light and airy living room interior of tiny home in upstate, Pune, MH",
        description: "Lovely house with its own 3 piece of bathrooms, living rooms with flat screen TV and kitchen. Has its own desk, barbecue. No pets."
    },
    {
        id: 2,
        image: require("../../../assets/images/flat2.jpg"),
        rating: "4.0",
        views: 560,
        type: "View Details",
        name: "Tiny Home",
        desc: "Entire Flat - 1 Bed",
        owner: "Yogesh Sawant",
        details: "Light and airy living room interior of tiny home in upstate, Pune, MH",
        description: "Lovely house with its own 3 piece of bathrooms, living rooms with flat screen TV and kitchen. Has its own desk, barbecue. No pets."
    },
    {
        id: 3,
        image: require("../../../assets/images/flat4.jpg"),
        rating: "4.7",
        views: 50,
        type: "View Details",
        name: "Medium Home",
        desc: "Entire Flat - 2 Bed",
        owner: "Vishal Shinde",
        details: "Light and airy living room interior of tiny home in upstate, Pune, MH",
        description: "Lovely house with its own 3 piece of bathrooms, living rooms with flat screen TV and kitchen. Has its own desk, barbecue. No pets."
    },
    {
        id: 4,
        image: require("../../../assets/images/flat5.jpg"),
        rating: "4.7",
        views: 50,
        type: "View Details",
        name: "Medium Home",
        desc: "Entire Flat - 2 Bed",
        owner: "Vishal Shinde",
        details: "Light and airy living room interior of tiny home in upstate, Pune, MH",
        description: "Lovely house with its own 3 piece of bathrooms, living rooms with flat screen TV and kitchen. Has its own desk, barbecue. No pets."
    }
]

export const Flat: React.FC = ({ navigation }: any) => {

    const renderItem = ({ item }: any) => {
        console.log(item);
        return (
            <View style={{
                marginHorizontal: 10,
                marginVertical: 20
            }}>
                <Image
                    style={{
                        width: width - 20,
                        height: 175,
                        resizeMode: "cover"
                    }}
                    source={item.image} />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 5,
                    alignItems: "center"
                }}>
                    <TouchableOpacity style={{
                        borderRadius: 10,
                        padding: 5,
                        borderWidth: 1
                    }}
                        onPress={() => navigation.navigate("Flat-Details", { data: item })}>
                        <Text>{item.type}</Text>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <FontAwesome name="star" size={16} color="red" />
                        <Text style={{ marginHorizontal: 5 }}>{item.rating}</Text>
                        <Text>({item.views})</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: 5
                }}>
                    <Text style={{
                        fontWeight: "bold"
                    }}>{item.name}</Text>
                    <Text style={{
                        fontWeight: "bold"
                    }}>{item.desc}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            paddingTop: StatusBar.currentHeight
        }}>

            <View style={{
                marginTop: 10,
                backgroundColor: "#FFF",
                marginHorizontal: 10,
                borderRadius: 5,
                borderColor: "grey",
                borderWidth: 0.5,
                padding: 10,
                flexDirection: "row"
            }}>
                <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()} />
                <Text style={{
                    marginLeft: 10
                }}>Anywhere Stay</Text>
            </View>

            <ScrollView style={{ flex: 1 }}>
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginHorizontal: 10
                }}>
                    <TouchableOpacity style={{
                        marginRight: 10,
                        borderRadius: 10,
                        padding: 5,
                        borderWidth: 1
                    }}>
                        <Text>Dates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        marginRight: 10,
                        borderRadius: 10,
                        padding: 5,
                        borderWidth: 1
                    }}>
                        <Text>Guests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        marginRight: 10,
                        borderRadius: 10,
                        padding: 5,
                        borderWidth: 1
                    }}>
                        <Text>Filters</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    marginTop: 20,
                    marginHorizontal: 10
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>300+ Places to stay</Text>
                </View>

                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                        horizontal={false}
                    />
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}