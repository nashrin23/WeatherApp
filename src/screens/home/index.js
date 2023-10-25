import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, PermissionsAndroid, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { DAILY, SEARCH, TODAY } from '..'
import { Colors } from '../../assets/constants/global.colors'
import { Icons, Images } from '../../assets/constants/global.images'
import { PeriodFn, SelectIcn } from '../../utils/Simply'
import { HomeScreenStyles } from './styles'
import RefreshModal from '../../components/RefreshModal'

const HomeScreen = () => {

  const navigation = useNavigation();
  
  useEffect(() => {
    GetCurrentFn();
    GetHourlyFn();
  }, []);

  const [HomeData, setHomeData] = useState();                   
  const [HourlyBasisData, setHourlyBasisData] = useState();      
  const [RefreshedDate, setRefreshedDate] = useState();                                
  
  // Function to get permission for location
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === 'granted') {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const GetCurrentFn = async () => {
    const GotPermission = await requestLocationPermission();
    if(GotPermission) {
      Geolocation.getCurrentPosition(
        (position) => {

          if(position?.coords) {
            let lat = 9.9330952 //position?.coords?.latitude;
            let lon = 78.0855739 //position?.coords?.longitude;
            let API_key = "3a9bee9c35ea0fc21779ccf795b8f5e6";
    
            try {
              fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              .then((response) => response.json())
              .then((responseJson) => {
                if(responseJson){
                  setHomeData(responseJson);
                  setRefreshedDate(moment().format('ddd DD MMMM h:mm A'));
                  setLoading(false);
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
    }
  };   
  
  const GetHourlyFn = async () => {
    const GotPermission = await requestLocationPermission();
    if(GotPermission) {
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
    }
  };  
  
  const goToTodayFn = () => {
    navigation.navigate(TODAY);
  };

  const RefreshFn = () => {
    GetCurrentFn();
    GetHourlyFn();
  };

  const goToDailyFn = () => {
    navigation.navigate(DAILY);
  };

  const goToSearchFn = () => {
    navigation.navigate(SEARCH);
  };

  const CurrentThemeFn = () => {
    // let time = moment().format('HHmm');
    let time = 1900

    if((800 >= time) && (time > 530)) {
      return {bg: Images.earlyMorningBG, sb: Colors.themeLightBlue};
    } else if((1100 >= time) && (time > 800)) {
      return {bg: Images.morningBG, sb: Colors.themeYellow};
    } else if((1730 >= time) && (time > 1100)) {
      return {bg: Images.afternoonBG, sb: Colors.themeOrange};
    } else if((2000 >= time) && (time > 1730)) {
      return {bg: Images.eveningBG, sb: Colors.themeLightViolet};
    } else {
      return {bg: Images.nightBG, sb: Colors.themeViolet};
    }
  }

  const [loading, setLoading] = useState(true);

  return (
    <View>
      <StatusBar backgroundColor={CurrentThemeFn().sb} barStyle="light-content" />

      <ImageBackground source={CurrentThemeFn().bg} style={HomeScreenStyles.BgImg} resizeMode='stretch'>
        <View style={HomeScreenStyles.AppBar}>
          <TouchableOpacity onPress={goToTodayFn} style={HomeScreenStyles.MenuBox}>
            <Image source={Icons.MenuL} style={HomeScreenStyles.MenuIcn} />
          </TouchableOpacity>
          <TouchableOpacity onPress={RefreshFn} style={HomeScreenStyles.RefreshBox}>
            <Image source={Icons.RefreshL} style={HomeScreenStyles.RefreshIcn} />
          </TouchableOpacity>

          <TouchableOpacity onPress={goToDailyFn} style={HomeScreenStyles.StarBox}>
            <Image source={Icons.StarL} style={HomeScreenStyles.StarIcn} />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToSearchFn} style={HomeScreenStyles.SearchBox}>
            <Image source={Icons.SearchL} style={HomeScreenStyles.SearchIcn} />
          </TouchableOpacity>
        </View>

        {loading ? (
          <RefreshModal loader={loading} />
        ) : null}
          <>
            <View style={HomeScreenStyles.CenterContentBox}>
              <View style={HomeScreenStyles.LocationBox}>
                <Image source={Icons.PinL} style={HomeScreenStyles.LocationIcn} />
                <Text style={HomeScreenStyles.LocationTxt}>{HomeData?.name}</Text>
              </View>

              <Text style={HomeScreenStyles.TodayDateTxt}>{RefreshedDate}</Text>

              <View style={HomeScreenStyles.TemperatureBox}>
                <Text style={HomeScreenStyles.TemperatureTxt}>{HomeData?.main?.temp?.toFixed(1)}°</Text>
                <View style={HomeScreenStyles.TemperatureIcnBox}>
                  <Image source={SelectIcn(HomeData?.weather[0]?.icon)} style={HomeScreenStyles.TemperatureIcn} />
                </View>
              </View>

              <Text style={HomeScreenStyles.ClimateTxt}>{HomeData?.weather[0]?.description}</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={HomeScreenStyles.Card1Box}>
                <View style={HomeScreenStyles.SmallBox}>
                  <View style={HomeScreenStyles.SmallBoxIcn}>
                    <Image source={Icons.MaxTemp} style={HomeScreenStyles.MaxTempIcn} />
                  </View>
                  <Text style={HomeScreenStyles.SmallBoxTxt}>Max Temp</Text>
                  <Text style={HomeScreenStyles.SmallBoxValueTxt}>{HomeData?.main?.temp_max}°C</Text>
                </View>

                <View style={HomeScreenStyles.SmallBox}>
                  <View style={HomeScreenStyles.SmallBoxIcn}>
                    <Image source={Icons.Humidity} style={HomeScreenStyles.HumidityIcn} />
                  </View>
                  <Text style={HomeScreenStyles.SmallBoxTxt}>Humidity</Text>
                  <Text style={HomeScreenStyles.SmallBoxValueTxt}>{HomeData?.main?.humidity}%</Text>
                </View>

                <View style={HomeScreenStyles.SmallBox}>
                  <View style={HomeScreenStyles.SmallBoxIcn}>
                    <Image source={Icons.Wind} style={HomeScreenStyles.WindIcn} />
                  </View>
                  <Text style={HomeScreenStyles.SmallBoxTxt}>Wind</Text>
                  <Text style={HomeScreenStyles.SmallBoxValueTxt}>{HomeData?.wind?.speed}m/s</Text>
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
          </>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen
