import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { Colors } from '../../assets/constants/global.colors';
import { TodayScreenStyles } from './styles';
import { Icons } from '../../assets/constants/global.images';
import { HomeScreenStyles } from '../home/styles';
import Geolocation from 'react-native-geolocation-service';
import moment from 'moment'
import { PeriodFn, SelectIcn, TempFn } from '../../utils/Simply';
import RefreshModal from '../../components/RefreshModal';

const TodayScreen = () => {

  const navigation = useNavigation();
  
  useEffect(() => {
    GetTodayDataFn();
    GetHourlyFn();
  }, []);

  const [TodayData, setTodayData] = useState();
  const [HourlyBasisData, setHourlyBasisData] = useState();                   

  const GetTodayDataFn = async () => {
    await Geolocation.getCurrentPosition(
      (position) => {
        let lat = 9.9330952 //position?.coords?.latitude;
        let lon = 78.0855739 //position?.coords?.longitude;
        let API_key = "ed94322cfee18ebe314f41e7504ad844";

        try {
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // 'Authorization': 'Bearer ' + userGoogleIDToken?.idToken,
            },
          })
          .then((response) => response.json())
          .then((responseJson) => {
            if(responseJson){
              setTodayData(responseJson);
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

  const goBack = () => {
    navigation.goBack();
  }; 
  
  const GetHourlyFn = async () => {
    Geolocation.getCurrentPosition(
      (position) => {
        if(position?.coords) {
          let lat = 9.9330952 //position?.coords?.latitude;
          let lon = 78.0855739 //position?.coords?.longitude;
          let part = "current,daily,minutely";
          let API_key = "3a9bee9c35ea0fc21779ccf795b8f5e6";
  
          try {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_key}&units=metric`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
            .then((response) => response.json())
            .then((responseJson) => {
              if(responseJson){
                setHourlyBasisData(responseJson);
              }
            })
            .catch((error) => {

            });
          } catch (error) {

          }
        } 
      },
      (error) => {
        // See error code charts below.

      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };  

  const [loading, setLoading] = useState(true);

  return (
    <View style={TodayScreenStyles.BgImg}>
      <StatusBar backgroundColor={Colors.grey} barStyle="dark-content" />

      <View style={TodayScreenStyles.AppBar}>
        <TouchableOpacity onPress={goBack} style={TodayScreenStyles.BackBox}>
          <Image source={Icons.LeftArrD} style={TodayScreenStyles.BackIcn} />
        </TouchableOpacity>
        <Text style={TodayScreenStyles.TitleTxt}>Today Weather Forecast</Text>
      </View>

      {loading ? (
        <RefreshModal loader={loading} />
      ) : null}

      <ScrollView>
        <View style={TodayScreenStyles.riseSetCard}>
          <View style={TodayScreenStyles.riseSetCardRow}>
            <View style={TodayScreenStyles.sunRiseBox}>
              <Image source={Icons.SunRise} style={TodayScreenStyles.sunRiseIcn} />
            </View>

            <Text style={TodayScreenStyles.sunRiseValueTxt}>{PeriodFn(TodayData?.sys?.sunrise)}</Text>
            <Text style={TodayScreenStyles.sunRiseTxt}>Sunrise</Text>
          </View>

          <View style={TodayScreenStyles.riseSetCardRow}>
            <View style={TodayScreenStyles.sunRiseBox}>
              <Image source={Icons.SunSet} style={TodayScreenStyles.sunRiseIcn} />
            </View>

            <Text style={TodayScreenStyles.sunRiseValueTxt}>{PeriodFn(TodayData?.sys?.sunset)}</Text>
            <Text style={TodayScreenStyles.sunSetTxt}>Sunset</Text>
          </View>
        </View>

        <View style={HomeScreenStyles.Card2Box}>
          <View style={HomeScreenStyles.BigBox}>
            <Text style={HomeScreenStyles.BigBoxTempValueTxt}>{HourlyBasisData?.hourly[0]?.feels_like}°C</Text>
            <Text style={HomeScreenStyles.BigBoxTempTitleTxt}>{HourlyBasisData?.hourly[0]?.weather[0]?.description}</Text>
            <View style={HomeScreenStyles.BigBoxIcn}>
              <Image source={SelectIcn(HourlyBasisData?.hourly[0]?.weather[0]?.icon)} style={HomeScreenStyles.BigBoxTemperatureIcn} />
            </View>
            <Text style={HomeScreenStyles.BigBoxTempTimeTxt}>{PeriodFn(HourlyBasisData?.hourly[0]?.dt)}</Text>
          </View>

          <View style={HomeScreenStyles.BigBox}>
            <Text style={HomeScreenStyles.BigBoxTempValueTxt}>{HourlyBasisData?.hourly[1]?.feels_like}°C</Text>
            <Text style={HomeScreenStyles.BigBoxTempTitleTxt}>{HourlyBasisData?.hourly[1]?.weather[0]?.description}</Text>
            <View style={HomeScreenStyles.BigBoxIcn}>
              <Image source={SelectIcn(HourlyBasisData?.hourly[1]?.weather[0]?.icon)} style={HomeScreenStyles.BigBoxTemperatureIcn} />
            </View>
            <Text style={HomeScreenStyles.BigBoxTempTimeTxt}>{PeriodFn(HourlyBasisData?.hourly[1]?.dt)}</Text>
          </View>

          <View style={HomeScreenStyles.BigBox}>
            <Text style={HomeScreenStyles.BigBoxTempValueTxt}>{HourlyBasisData?.hourly[2]?.feels_like}°C</Text>
            <Text style={HomeScreenStyles.BigBoxTempTitleTxt}>{HourlyBasisData?.hourly[2]?.weather[0]?.description}</Text>
            <View style={HomeScreenStyles.BigBoxIcn}>
              <Image source={SelectIcn(HourlyBasisData?.hourly[2]?.weather[0]?.icon)} style={HomeScreenStyles.BigBoxTemperatureIcn} />
            </View>
            <Text style={HomeScreenStyles.BigBoxTempTimeTxt}>{PeriodFn(HourlyBasisData?.hourly[2]?.dt)}</Text>
          </View> 
        </View>
      </ScrollView>
    </View>
  )
}

export default TodayScreen