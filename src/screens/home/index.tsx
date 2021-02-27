import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { introStyles } from "./intro.style";
import { Feather, Entypo, FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Categories from "../../../assets/data/categories";
import Populars from "../../../assets/data/popular";

export const Home: React.FC = ({ navigation }: any) => {

    const renderCategoryItems = ({ item }: any) => {
        return (
            <View style={item.selected ? styles.catSelected : styles.catUnSelected}>
                <Image style={{
                    width: 60,
                    height: 60,
                    marginBottom: 10,
                }}
                    source={item.image} />
                <Text style={{
                    color: "#000",
                    fontSize: 16,
                    fontWeight: "600",
                    marginBottom: 20,
                }}>{item.title}</Text>
                <View style={{
                    borderRadius: 100,
                    width: 30,
                    alignItems: "center",
                    marginBottom: 15
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Product", { id: item.id })}>
                        <AntDesign name="rightcircle" size={24} color={item.selected ? "#fff" : "#F26C68"} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={introStyles.container}>
            {/* Header */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 20,
                    // backgroundColor: "yellow",
                    padding: 10,
                    alignItems: "center"
                }}>
                <Image
                    style={{ width: 40, height: 40, borderRadius: 30 }}
                    source={require("../../../assets/images/profile.png")} />
                {/* <Image
                    style={{ width: 40, height: 40 }}
                    source={require("../../../assets/images/menubar.png")} /> */}
                <Feather name="menu" size={35} color="black" />
            </View>
            {/* Title */}
            <ScrollView>
                <View style={{
                    marginTop: 30,
                    paddingHorizontal: 20,
                    // backgroundColor: "pink"
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "400"
                    }}>Food</Text>
                    <Text style={{
                        marginTop: 5,
                        fontSize: 32,
                        fontWeight: "700"
                    }}>Delivery</Text>
                </View>
                {/* Search */}
                <View style={{
                    marginTop: 30,
                    paddingHorizontal: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    // backgroundColor: "yellow"
                }}>
                    <Feather name="search" size={24} color="black" />
                    <View style={{
                        flex: 1,
                        marginLeft: 15,
                        borderBottomWidth: 1,
                        // backgroundColor: "pink"
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "600",
                            marginBottom: 5
                        }}>Search...</Text>
                    </View>
                </View>
                {/* Categorie */}
                <View style={{
                    // flex: 1,
                    marginTop: 30,
                    paddingLeft: 20,
                    // backgroundColor: "pink"
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "700"
                    }}>Categories</Text>
                    <View style={{
                        // backgroundColor: "blue",
                        paddingTop: 15
                    }}>
                        <FlatList
                            data={Categories}
                            renderItem={renderCategoryItems}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                {/* Popular */}
                <View style={{
                    // backgroundColor: "yellow",
                    marginTop: 20,
                    paddingHorizontal: 20
                }}>
                    <Text style={{
                        fontWeight: "700",
                        fontSize: 20
                    }}>Popular</Text>
                    <View style={{
                        // backgroundColor: "blue",
                        paddingTop: 15
                    }}>
                        {Populars.map((item: any, idx: number) => (
                            <View
                                key={idx}
                                style={{
                                    marginBottom: 20
                                }}>
                                <View
                                    style={{
                                        backgroundColor: "#fff",
                                        borderRadius: 20,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        // alignItems: "center",
                                        paddingTop: 10
                                    }}>
                                    <View>
                                        <View style={{
                                            flexDirection: "row",
                                            // backgroundColor: "brown",
                                            paddingLeft: 20,
                                        }}>
                                            <FontAwesome5 name="redhat" size={24} color="#F5CA48" />
                                            <Text style={{
                                                fontSize: 16,
                                                fontWeight: "900",
                                                paddingLeft: 10,
                                                paddingBottom: 20,
                                            }}>Top of the week</Text>
                                        </View>
                                        <View
                                            style={{
                                                // backgroundColor: "grey",
                                                paddingLeft: 20,
                                                paddingBottom: 10
                                            }}>
                                            <Text style={{
                                                paddingBottom: 5,
                                                fontSize: 16,
                                                fontWeight: "900"
                                            }}>{item.title}</Text>
                                            <Text style={{
                                                fontSize: 16,
                                                fontWeight: "500",
                                                color: "#C4C4C4"
                                            }}>Weight {item.weight}</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: "row"
                                        }}>
                                            <View style={{
                                                backgroundColor: "#F5CA48",
                                                borderTopEndRadius: 20,
                                                borderBottomLeftRadius: 20,
                                                paddingHorizontal: 30,
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}>
                                                <Feather name="plus" size={24} color="black" />
                                            </View>
                                            <View style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: 21,
                                                flexDirection: "row",
                                                // backgroundColor: "orange"
                                            }}>
                                                <FontAwesome name="star" size={14} color="black" />
                                                <Text style={{
                                                    fontWeight: "700",
                                                    fontSize: 16,
                                                    paddingLeft: 5
                                                }}>{item.rating}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <Image
                                            style={{ width: 160, height: 120 }}
                                            source={item.image} />
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    catSelected: {
        padding: 20,
        backgroundColor: "#F5CA48",
        marginRight: 20,
        borderRadius: 20,
        alignItems: "center"
    },
    catUnSelected: {
        padding: 20,
        backgroundColor: "#fff",
        marginRight: 20,
        borderRadius: 20,
        alignItems: "center"
    }
})