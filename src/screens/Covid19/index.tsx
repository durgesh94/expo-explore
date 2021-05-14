import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, Image, View, Text } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { Card } from "../../components/Covid/Card";
import axios from 'axios';
import { BarChart } from '../../components/Covid/BarChart';

const url = "https://covid19.mathdro.id/api";

const { width, height } = Dimensions.get("window");

export const Covid19: React.FC = ({ navigation }: any) => {

    const [country, setCountry] = useState<any>("global");
    const [countries, setCountries] = useState<any[]>([]);
    const [data, setData] = useState<any>();
    const [chartData, setChartData] = useState<any[]>([]);

    const fetchCountries = async () => {
        try {
            const { data: { countries } } = await axios.get(`${url}/countries`);
            return countries.map((country: any) => country.name);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchData = async (country: any) => {
        let changableurl = url;
        if (country !== "global") changableurl = `${url}/countries/${country}`;

        try {
            const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changableurl);
            return { confirmed, recovered, deaths, lastUpdate };
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async () => {
            setData(await fetchData(country))
            let newData = [
                { cases: "Infected", total: data?.confirmed.value ? data?.confirmed.value : 0 },
                { cases: "Recovered", total: data?.recovered.value ? data?.recovered.value : 0 },
                { cases: "Deaths", total: data?.deaths.value ? data?.deaths.value : 0 }
            ];
            setChartData(newData);
        })();
    }, [country]);

    useEffect(() => {
        (async () => {
            setCountries(await fetchCountries())
        })();
    }, []);

    return (
        <SafeAreaView style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: "#FAFAFA",
        }}>
            <Image
                source={require("../../../assets/images/covid19.png")}
                style={{
                    width: width - 200,
                    // aspectRatio: 1,
                    resizeMode: "center",
                    alignSelf: "center"
                }}
            />

            <View style={{
                flexDirection: "row",
            }}>
                <Card type={"Infected"} count={data?.confirmed.value} date={data?.lastUpdate.substring(0, 10)} desc={"Number of active cases of COVID-19"} color={"#7F7FFF"} />
                <Card type={"Recovered"} count={data?.recovered.value} date={data?.lastUpdate.substring(0, 10)} desc={"Number of recoveries from COVID-19"} color={"#7FFF7F"} />
                <Card type={"Deaths"} count={data?.deaths.value} date={data?.lastUpdate.substring(0, 10)} desc={"Number of deaths caused by COVID-19"} color={"#FF7F7F"} />
            </View>

            <Picker
                mode="dropdown"
                style={{
                    width: width - 150,
                    alignSelf: "center",
                    marginTop: 20
                }}
                selectedValue={country}
                onValueChange={(itemValue) => setCountry(itemValue)}
            >
                <Picker.Item key="global" label="Global" value="global" />
                {countries.map((country) => <Picker.Item key={country} label={country} value={country} />)}
            </Picker>

            <Text style={{
                alignSelf: "center"
            }}>Current state in {country}</Text>
            {/* <Text>{JSON.stringify(data)}</Text>
            <Text>{JSON.stringify(chartData)}</Text> */}

            <BarChart data={chartData} />

        </SafeAreaView>
    )
}