import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { introStyles } from "./intro.style";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import data from "../../../assets/data/product";


export const Product: React.FC = ({ navigation }: any) => {

    const onOrder = () => {
        alert("Coming Soon...!");
    }

    const renderIngredientItems = ({ item }: any) => {
        return (
            <View style={{
                backgroundColor: "#fff",
                marginRight: 15,
                borderRadius: 15,
                padding: 10
            }}>
                <Image
                    style={{
                        width: 90,
                        height: 80
                    }}
                    source={item}
                />
            </View>
        )
    }

    return (
        <View style={introStyles.container}>
            {/* Header */}
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingTop: 10
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{
                        borderWidth: 2,
                        padding: 8,
                        borderRadius: 10,
                        borderColor: "#CDCDCD",
                        alignSelf: "center"
                    }}>
                        <AntDesign name="left" size={16} color="#000" />
                    </View>
                </TouchableOpacity>
                <View style={{
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: "#F5CA48",
                    alignSelf: "center"
                }}>
                    <FontAwesome name="star" size={16} color="#fff" />
                </View>
            </View>
            <ScrollView>
                {/* Title */}
                <View style={{
                    marginTop: 30,
                    paddingHorizontal: 20
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 32
                    }}>{data.title}</Text>
                </View>
                {/* Price */}
                <View style={{
                    marginTop: 20,
                    paddingHorizontal: 20
                }}>
                    <Text style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        color: "#E4723C",
                        lineHeight: 40
                    }}>${data.price}</Text>
                </View>
                {/* Details */}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 30,
                    paddingLeft: 20
                }}>
                    <View style={{
                        padding: 1
                    }}>
                        <Text style={styles.txtTitle}>Size</Text>
                        <Text style={styles.txtValue}>{data.size} "</Text>
                        <Text style={styles.txtTitle}>Crust</Text>
                        <Text style={styles.txtValue}>{data.crust}</Text>
                        <Text style={styles.txtTitle}>Devilery In</Text>
                        <Text style={styles.txtValue}>{data.deliveryIn}</Text>
                    </View>
                    <View style={{
                        padding: 1
                    }}>
                        <Image
                            style={{
                                padding: "10%",
                                marginStart: "15%"
                            }}
                            source={data.image} />
                    </View>
                </View>
                {/* Ingredients */}
                <View style={{
                    marginTop: 30,
                    paddingLeft: 20
                }}>
                    <View style={{
                        marginBottom: 20
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18
                        }}>Ingredients</Text>
                    </View>
                    <FlatList
                        data={data.ingredients}
                        renderItem={renderIngredientItems}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                {/* Button */}
                <View style={{
                    marginVertical: 40
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: "#F5CA48",
                        borderRadius: 50,
                        paddingHorizontal: 50,
                        paddingVertical: 20,
                        alignSelf: "center",
                        alignItems: "center",
                    }}
                        onPress={() => onOrder}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "bold"
                        }}>Place an Order</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    txtTitle: {
        fontSize: 16,
        fontWeight: "500",
        color: "#CDCDCD",
        marginTop: 20
    },
    txtValue: {
        lineHeight: 20,
        fontWeight: "900",
        fontSize: 18,
        marginTop: 5
    }
})