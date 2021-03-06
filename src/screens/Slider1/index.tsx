import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import { Intro } from '../Intro';

const { width, height } = Dimensions.get("window");

const data: any[] = [
    {
        key: 1,
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('../../../assets/images/i1.png'),
        backgroundColor: '#000',
    },
    {
        key: 2,
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('../../../assets/images/i2.png'),
        backgroundColor: '#000',
    },
    {
        key: 3,
        title: 'Title 3',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../../../assets/images/i3.png'),
        backgroundColor: '#22bcb5',
    },
    {
        key: 4,
        title: 'Title 4',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../../../assets/images/i4.png'),
        backgroundColor: '#22bcb5',
    },
    {
        key: 5,
        title: 'Title 5',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../../../assets/images/i5.png'),
        backgroundColor: '#22bcb5',
    }
];

export const Slider1: React.FC = ({ navigation }: any) => {

    const [showRealApp, setShowRealApp] = useState(false);
    let slider: AppIntroSlider | undefined;

    const _renderItem = ({ item }: any) => {
        return (
            <View key={item}>
                <Image
                    style={{
                        width: width,
                        height: height,
                        resizeMode: "cover"
                    }}
                    source={item.image} />
                <View style={{
                    position: "absolute",
                    marginTop: "90%",
                    paddingHorizontal: 20
                }}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 32,
                        fontWeight: "900"
                    }}>{item.title}</Text>
                    <Text style={{
                        color: "#00aaaa",
                        fontSize: 24,
                        fontWeight: "700"
                    }}>{item.text}</Text>
                </View>
            </View>
        );
    }
    const _onDone = () => {
        setShowRealApp(true);
    }

    const _renderPagination = () => {
        console.log(slider);
    }

    let i: any = 0, timeout: any;

    const _onSlideChange = () => {
        // console.log(slider);
    }

    const tick = () => {
        slider?.goToSlide(i);   //this.slider is ref of <AppIntroSlider....
        i += 1;
        if (i == data.length) {
            i = 0;
        }
    };

    useEffect(() => {
        // componentDidMount
        timeout = setInterval(() => {
            tick();
        }, 2000)

    }, []);

    useEffect(() => {
        // componentWillUnmount
        return () => {
            clearInterval(timeout)
        }
    }, []);

    if (showRealApp) return <Intro />
    else return <AppIntroSlider
        renderItem={_renderItem}
        // renderPagination={_renderPagination}
        onSlideChange={_onSlideChange}
        data={data}
        onDone={_onDone}
        showPrevButton={true}
        prevLabel={"Previous"}
        doneLabel={"Let's started"}
        dotStyle={{ backgroundColor: "#fff" }}
        scrollEnabled={true}
        bottomButton={false}
        activeDotStyle={{ paddingLeft: 20, backgroundColor: "#ff0000" }}
        ref={(ref) => (slider = ref!)}
        removeClippedSubviews={false} // First image of the slider flickers
    />;
}