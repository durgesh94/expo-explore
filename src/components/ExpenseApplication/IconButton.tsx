import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants";

export interface IconButtonProps {
    icon: any;
    width?: number;
    height?: number;
    color?: any;
    alignItems?: any;
    onClick(): any;
    isSelected?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({ ...props }) => {

    return (
        <>
            <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: props.alignItems, width: 50, }}
                onPress={() => props.onClick()}
            >
                <Image
                    source={props.icon}
                    style={{
                        width: props.width,
                        height: props.height,
                        tintColor: props.color
                    }}
                />
            </TouchableOpacity>
        </>
    )
}

IconButton.defaultProps = {
    width: 30,
    height: 30,
    color: COLORS.primary,
    alignItems: "center"
}