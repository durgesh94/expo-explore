import React from "react";
import { View, Text, Image, StatusBar, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export const CredHome: React.FC = () => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FFF"
        }}>
            <StatusBar barStyle="light-content" />
            {/* Header */}
            <View style={{
                backgroundColor: "#000000",
                flexDirection: "row",
                paddingTop: StatusBar.currentHeight,
                paddingHorizontal: 20,
                paddingBottom: 10
            }}>
                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Image style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                    }} source={require("../../../../assets/images/pro.jpg")} />
                    <Text style={styles.txtColor}>profile</Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end"
                }}>
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Image style={{
                            width: 50,
                            height: 50,
                            borderRadius: 30,
                            borderColor: "#87F717",
                            borderWidth: 0.5
                        }} source={require("../../../../assets/images/pizza3.png")} />
                        <Text style={styles.txtColor}>stories</Text>
                    </View>
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        paddingHorizontal: 20
                    }}>
                        <View style={{
                            backgroundColor: "#4C4646",
                            borderRadius: 100,
                            width: 50,
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <FontAwesome name="bell" size={24} color="#FFA62F" />
                        </View>
                        <Text style={styles.txtColor}>notifications</Text>
                    </View>
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <View style={{
                            backgroundColor: "#4C4646",
                            borderRadius: 100,
                            width: 50,
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <MaterialIcons name="keyboard-control" size={32} color="#FFA62F" />
                        </View>
                        <Text style={styles.txtColor}>controls</Text>
                    </View>
                </View>
            </View>
            {/* Scroll */}
            <View style={{ flex: 1, backgroundColor: "#181717" }}>
                <ScrollView style={{ flex: 1 }}>
                    {/* Welcome */}
                    <View style={{
                        marginTop: 20,
                        paddingHorizontal: 20
                    }}>
                        <Text style={{ color: "#FFFFFF", fontSize: 20 }}>hello, Durgesh</Text>
                        <Text style={styles.txtColor}>here are today's</Text>
                        <Text style={styles.txtColor}>recommended actions for you</Text>
                    </View>
                    {/* Store */}
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        backgroundColor: "#9E2ABB",
                        borderRadius: 20,
                        marginHorizontal: 20,
                        marginVertical: 20,
                        padding: 10
                    }}>
                        <View style={{
                            flex: 2,
                            marginVertical: 10,
                            paddingHorizontal: 10
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold"
                            }}>CRED Store is now open for access</Text>
                            <Text style={{
                                fontSize: 18,
                                marginTop: 10
                            }}>browser through our selection of curated products for you
                        </Text>
                            <TouchableOpacity style={{
                                backgroundColor: "#000000",
                                padding: 20,
                                borderRadius: 30,
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 10
                            }}>
                                <Text style={{
                                    color: "#FFFFFF",
                                    fontSize: 18
                                }}>Explore store</Text>
                            </TouchableOpacity>


                        </View>
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "flex-end",
                            padding: 10
                        }}>
                            <Image
                                style={{ width: 100, height: 150 }}
                                source={require("../../../../assets/images/shop2.png")}
                            />
                        </View>
                    </View>
                    {/* Rent */}
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        backgroundColor: "#FFFFFF",
                        borderRadius: 20,
                        marginHorizontal: 20,
                        marginVertical: 20,
                        padding: 10
                    }}>
                        <View style={{
                            flex: 2,
                            marginVertical: 10,
                            paddingHorizontal: 10
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold"
                            }}>your rent has reduced</Text>
                            <Text style={{
                                fontSize: 18,
                                marginTop: 10
                            }}>earn cash-back from $50  upto $500 when you pay rent with your credit card
                        </Text>
                            <TouchableOpacity style={{
                                backgroundColor: "#000000",
                                padding: 20,
                                borderRadius: 30,
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 10
                            }}>
                                <Text style={{
                                    color: "#FFFFFF",
                                    fontSize: 18
                                }}>Pay rent</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "flex-end",
                            padding: 10
                        }}>
                            <Image
                                style={{ width: 100, height: 150 }}
                                source={require("../../../../assets/images/shop2.png")}
                            />
                        </View>
                    </View>
                    {/* Coffee */}
                    <View style={{
                        backgroundColor: "#FFF",
                        borderRadius: 20,
                        marginVertical: 20,
                        marginHorizontal: 20,
                        alignItems: "center",
                        paddingVertical: 20,
                        paddingHorizontal: 80
                    }}>
                        <View>
                            <Image
                                style={{ width: 150, height: 200 }}
                                source={require("../../../../assets/images/pizza2.png")}
                            />
                        </View>
                        <View style={{
                            marginTop: 40
                        }}>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 16,
                                textAlign: "center"
                            }}>this is how you become a coffee connoisseur.</Text>
                        </View>
                        <View style={{
                            marginTop: 10
                        }}>
                            <Text style={{ textAlign: "center" }}>get access to the best coffees from brands like blue Tokai, Dope coffee, and more.</Text>
                        </View>
                        <View style={{
                            marginTop: 20
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: "#000",
                                paddingHorizontal: 30,
                                paddingVertical: 15,
                                borderRadius: 30
                            }}>
                                <Text style={{ color: "#FFF", fontSize: 16 }}>Know more</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* card */}
                    <View style={{
                        backgroundColor: "#FFF",
                        margin: 20,
                        borderRadius: 20,
                        padding: 20
                    }}>
                        <View style={{
                            flexDirection: "row"
                        }}>
                            <View style={{
                                flex: 2
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: "bold"
                                }}>51% of your credit limit is utilised</Text>
                                <Text>clear dues to ensure credit score dosen't fall</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                alignItems: "flex-end",
                                justifyContent: "center"
                            }}>
                                <AntDesign name="creditcard" size={70} color="black" />
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            marginTop: 10
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    borderRadius: 10,
                                    borderColor: "#000",
                                    borderWidth: 0.5,
                                    marginRight: 10,
                                }}>
                                    <AntDesign name="bank" size={24} color="black" />
                                </View>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={{fontWeight: "bold"}}>ICICI Bank</Text>
                                    <Text>XXXX 0008</Text>
                                </View>
                            </View>
                            <View style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "flex-end",
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: "#000",
                                    paddingVertical: 15,
                                    paddingHorizontal: 20,
                                    borderRadius: 30
                                }}>
                                    <Text style={{color: "#fff"}}>View more</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    txtColor: {
        color: "#A6A3A3"
    }
})