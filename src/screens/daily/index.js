import { View, Text, TouchableOpacity, Image, StatusBar, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { DailyScreenStyles } from './styles';
import { Icons } from '../../assets/constants/global.images';
import { Colors } from '../../assets/constants/global.colors';
import Geolocation from 'react-native-geolocation-service';
import moment from 'moment'
import { SelectIcn } from '../../utils/Simply';
import RefreshModal from '../../components/RefreshModal';

const DailyScreen= () => {

  const navigation = useNavigation();
  
  useEffect(() => {
    GetDailyFn();
  }, []);

  const GetDailyFn = async () => {
    Geolocation.getCurrentPosition(
      (position) => {

        let lat = 9.9330952 //position?.coords?.latitude;
        let lon = 78.0855739 //position?.coords?.longitude;
        let part = "current,minutely,hourly,alerts";
        let API_key = "3a9bee9c35ea0fc21779ccf795b8f5e6";

        try {
          fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_key}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => response.json())
          .then((responseJson) => {
            if(responseJson){
              setDailyData(responseJson?.daily);
              setLoading(false);
            }
          })
          .catch((error) => {
          });
        } catch (error) {
        }
      },
      (error) => {
        // See error code charts below.
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };                   
  
  const [DailyData, setDailyData] = useState();  

  const KtoC = (kelvin) => {
    // let celsius = (fahrenheit - 32) * 5/9;
    const celcius = kelvin - 273;
    return celcius.toFixed(1);
  };

  const TempFn = (temp) => {
    const timestamp = temp * 1000; // Convert seconds to milliseconds
    const date = new Date(timestamp);

    const day = moment(date).format('dddd');    
    const ddmm = moment(date).format('L');    
    let arr = ddmm.split('/');
    const ddmmF = arr[0] + "/" + arr[1];

    return {day,ddmmF};
  };
                  
  const goBack = () => {
    navigation.goBack();
  };

  const [loading, setLoading] = useState(true);

  return (
    <View style={DailyScreenStyles.BgImg}>
      <StatusBar backgroundColor={Colors.grey} barStyle="dark-content" />

      <View style={DailyScreenStyles.AppBar}>
        <TouchableOpacity onPress={goBack} style={DailyScreenStyles.BackBox}>
          <Image source={Icons.LeftArrD} style={DailyScreenStyles.BackIcn} />
        </TouchableOpacity>
        <Text style={DailyScreenStyles.TitleTxt}>Daily Weather Forecast</Text>
      </View>

      {loading ? (
        <RefreshModal loader={loading} />
      ) : null}

      <FlatList data={DailyData}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => 
          { 
            return (
              <View style={DailyScreenStyles.DailyBox}>
                <View style={DailyScreenStyles.IndividualBox}>
                  <View style={DailyScreenStyles.DayBox}>
                    <Text style={DailyScreenStyles.DayTxt}>{TempFn(item?.dt).day}</Text>
                  </View>
                  <View style={DailyScreenStyles.CalendarRow}>
                    <Image source={Icons.Calendar} style={DailyScreenStyles.CalendarIcn} />
                    <Text style={DailyScreenStyles.CalendarTxt}>{TempFn(item?.dt).ddmmF}</Text>
                  </View>
                </View>

                <View style={DailyScreenStyles.IndividualBox}>
                  <View style={DailyScreenStyles.TempRowBox}>
                    <View style={DailyScreenStyles.DayBox}>
                      <Text style={DailyScreenStyles.DayTxt}>{KtoC(item?.temp?.day)}°C</Text>
                    </View>
                    <View style={DailyScreenStyles.TempImgBox}>
                      <Image source={SelectIcn(item?.weather[0]?.icon)} style={DailyScreenStyles.TempImgIcn} />
                    </View>
                  </View>
                  <Text style={DailyScreenStyles.TempValueTxt}>{item?.weather[0]?.description}</Text>
                </View>

                <View style={DailyScreenStyles.IndividualMaxMinBox}>
                  <View style={DailyScreenStyles.MaxMinBox}>
                    <Image source={Icons.MaxMin} style={DailyScreenStyles.MaxMinIcn} />
                  </View>
                  <View>
                    <Text style={DailyScreenStyles.MaxTxt}>Max {KtoC(item?.temp?.max)}°C</Text>
                    <Text style={DailyScreenStyles.MinTxt}>Min {KtoC(item?.temp?.min)}°C</Text>
                  </View>
                </View>
              </View>
            )
          }
        }
      />
    </View>
  )
}

export default DailyScreen