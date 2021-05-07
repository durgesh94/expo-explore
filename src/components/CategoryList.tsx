import React, {useRef} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, FlatList } from "react-native";
import { COLORS, FONTS, icons, SIZES } from '../constants';

export interface CategoryListProps {
    title?: string;
}

export const CategoryList: React.FC<CategoryListProps> = ({ ...props }) => {

     // dummy data
     const confirmStatus = "C"
     const pendingStatus = "P"
 
     let categoriesData = [
         {
             id: 1,
             name: "Education",
             icon: icons.education,
             color: COLORS.yellow,
             expenses: [
                 {
                     id: 1,
                     title: "Tuition Fee",
                     description: "Tuition fee",
                     location: "ByProgrammers' tuition center",
                     total: 100.00,
                     status: pendingStatus
                 },
                 {
                     id: 2,
                     title: "Arduino",
                     description: "Hardward",
                     location: "ByProgrammers' tuition center",
                     total: 30.00,
                     status: pendingStatus
                 },
                 {
                     id: 3,
                     title: "Javascript Books",
                     description: "Javascript books",
                     location: "ByProgrammers' Book Store",
                     total: 20.00,
                     status: confirmStatus
                 },
                 {
                     id: 4,
                     title: "PHP Books",
                     description: "PHP books",
                     location: "ByProgrammers' Book Store",
                     total: 20.00,
                     status: confirmStatus
                 }
             ],
         },
         {
             id: 2,
             name: "Nutrition",
             icon: icons.food,
             color: COLORS.lightBlue,
             expenses: [
                 {
                     id: 5,
                     title: "Vitamins",
                     description: "Vitamin",
                     location: "ByProgrammers' Pharmacy",
                     total: 25.00,
                     status: pendingStatus,
                 },
 
                 {
                     id: 6,
                     title: "Protein powder",
                     description: "Protein",
                     location: "ByProgrammers' Pharmacy",
                     total: 50.00,
                     status: confirmStatus,
                 },
 
             ],
         },
         {
             id: 3,
             name: "Child",
             icon: icons.baby_car,
             color: COLORS.darkgreen,
             expenses: [
                 {
                     id: 7,
                     title: "Toys",
                     description: "toys",
                     location: "ByProgrammers' Toy Store",
                     total: 25.00,
                     status: confirmStatus,
                 },
                 {
                     id: 8,
                     title: "Baby Car Seat",
                     description: "Baby Car Seat",
                     location: "ByProgrammers' Baby Care Store",
                     total: 100.00,
                     status: pendingStatus,
                 },
                 {
                     id: 9,
                     title: "Pampers",
                     description: "Pampers",
                     location: "ByProgrammers' Supermarket",
                     total: 100.00,
                     status: pendingStatus,
                 },
                 {
                     id: 10,
                     title: "Baby T-Shirt",
                     description: "T-Shirt",
                     location: "ByProgrammers' Fashion Store",
                     total: 20.00,
                     status: pendingStatus,
                 },
             ],
         },
         {
             id: 4,
             name: "Beauty & Care",
             icon: icons.healthcare,
             color: COLORS.peach,
             expenses: [
                 {
                     id: 11,
                     title: "Skin Care product",
                     description: "skin care",
                     location: "ByProgrammers' Pharmacy",
                     total: 10.00,
                     status: pendingStatus,
                 },
                 {
                     id: 12,
                     title: "Lotion",
                     description: "Lotion",
                     location: "ByProgrammers' Pharmacy",
                     total: 50.00,
                     status: confirmStatus,
                 },
                 {
                     id: 13,
                     title: "Face Mask",
                     description: "Face Mask",
                     location: "ByProgrammers' Pharmacy",
                     total: 50.00,
                     status: pendingStatus,
                 },
                 {
                     id: 14,
                     title: "Sunscreen cream",
                     description: "Sunscreen cream",
                     location: "ByProgrammers' Pharmacy",
                     total: 50.00,
                     status: pendingStatus,
                 },
             ],
         },
         {
             id: 5,
             name: "Sports",
             icon: icons.sports_icon,
             color: COLORS.purple,
             expenses: [
                 {
                     id: 15,
                     title: "Gym Membership",
                     description: "Monthly Fee",
                     location: "ByProgrammers' Gym",
                     total: 45.00,
                     status: pendingStatus,
                 },
                 {
                     id: 16,
                     title: "Gloves",
                     description: "Gym Equipment",
                     location: "ByProgrammers' Gym",
                     total: 15.00,
                     status: confirmStatus,
                 },
             ],
         },
         {
             id: 6,
             name: "Clothing",
             icon: icons.cloth_icon,
             color: COLORS.red,
             expenses: [
                 {
                     id: 17,
                     title: "T-Shirt",
                     description: "Plain Color T-Shirt",
                     location: "ByProgrammers' Mall",
                     total: 20.00,
                     status: pendingStatus,
                 },
                 {
                     id: 18,
                     title: "Jeans",
                     description: "Blue Jeans",
                     location: "ByProgrammers' Mall",
                     total: 50.00,
                     status: confirmStatus,
                 },
             ],
         }
     ]
 
     const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;
 
     const [categories, setCategories] = React.useState(categoriesData)
     const [viewMode, setViewMode] = React.useState("chart")
     const [selectedCategory, setSelectedCategory] = React.useState(null)
     const [showMoreToggle, setShowMoreToggle] = React.useState(false)

    const renderItem = ({ item }: any) => (
        <TouchableOpacity
            onPress={() => setSelectedCategory(item)}
            style={{
                flex: 1,
                flexDirection: 'row',
                margin: 5,
                paddingVertical: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                borderRadius: 5,
                backgroundColor: COLORS.white,
                ...styles.shadow
            }}
        >
            <Image
                source={item.icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: item.color
                }}
            />
            <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
        </TouchableOpacity>
    )
    
    return (
        <>
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View style={{ height: categoryListHeightAnimationValue }}>
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                    />
                </Animated.View>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginVertical: SIZES.base,
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        if (showMoreToggle) {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 115,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        } else {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 172.5,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        }

                        setShowMoreToggle(!showMoreToggle)
                    }}
                >
                    <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? "LESS" : "MORE"}</Text>
                    <Image
                        source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
                        style={{ marginLeft: 5, width: 15, height: 15, alignSelf: 'center' }}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})