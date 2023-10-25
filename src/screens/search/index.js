import { View, Text, SafeAreaView, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity, Platform, ToastAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../assets/constants/global.colors'
import { Icons, Images } from '../../assets/constants/global.images'
import { SearchScreenStyles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenStyles } from '../home/styles'
import { PeriodFn, SelectIcn } from '../../utils/Simply'
import moment from 'moment'
import RefreshModal from '../../components/RefreshModal'

const SearchScreen = () => {

  const navigation = useNavigation();

  const [searchCity, setSearchCity] = useState("");
  const [searchCityData, setSearchCityData] = useState();
  const [HourlyBasisData, setHourlyBasisData] = useState();                   

  const SearchFn = async () => {
    let API_key = "3a9bee9c35ea0fc21779ccf795b8f5e6";
    
    if(searchCity != "") {
      try {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=${API_key}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then((responseJson) => {
          if(responseJson?.length > 0){
            setLoading(true);
            if(responseJson[0]?.lat) {
              let lat = responseJson[0]?.lat;
              let lon = responseJson[0]?.lon;
              let part = "current,daily,minutely";

              try {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                })
                .then((res1) => res1.json())
                .then((resJ1) => {
                  if(resJ1){
                    setSearchCityData(resJ1);
                  }
                })
                .catch((error) => {

                });
              } catch (error) {

              }
    
              try {
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_key}&units=metric`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                })
                .then((res2) => res2.json())
                .then((resJ2) => {
                  if(resJ2){
                    setHourlyBasisData(resJ2);
                    setLoading(false);
                  }
                })
                .catch((error) => {

                });
              } catch (error) {

              }
            } 
          } else {
            if(Platform.OS == "android") {
              ToastAndroid.show('Enter valid city name', ToastAndroid.SHORT);
            } else if(Platform.OS == "ios") {

            }
          }
        })
        .catch((error) => {

        });
      } catch (error) {

      }
    } else {
      if(Platform.OS == "android") {
        ToastAndroid.show('Enter city name', ToastAndroid.SHORT);
      } else if(Platform.OS == "ios") {

      }
    }
  };

  const ClearFn = () => {
    setSearchCity("");
    setSearchCityData();
    setHourlyBasisData();
    if(Platform.OS == "android") {
      ToastAndroid.show('Cleared', ToastAndroid.SHORT);
    } else if(Platform.OS == "ios") {

    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  const [loading, setLoading] = useState(false);

  return (
    <View>
      <StatusBar backgroundColor={Colors.themeLightBlue} barStyle="light-content" />

      <ImageBackground source={Images.searchCityBG} style={SearchScreenStyles.BgImg} resizeMode='stretch'>
        <View style={SearchScreenStyles.AppBar}>
          <TouchableOpacity onPress={goBack} style={SearchScreenStyles.BackBox}>
            <Image source={Icons.LeftArrW} style={SearchScreenStyles.BackIcn} />
          </TouchableOpacity>
          <Text style={SearchScreenStyles.TitleTxt}>Search City</Text>
        </View>

        {loading ? (
          <RefreshModal loader={loading} />
        ) : null}

        <View style={SearchScreenStyles.SearchRow}>
          <View style={SearchScreenStyles.SearchBar}>
            <View style={SearchScreenStyles.SearchBarLocationBox}>
              <Image source={Icons.PinG} style={SearchScreenStyles.SearchBarLocationIcn} />
            </View>

            <View style={SearchScreenStyles.SearchCityIPBox}>
              <TextInput 
                style={SearchScreenStyles.SearchCityIP}
                onChangeText={setSearchCity}
                value={searchCity}
                placeholder={"City Name"}
                placeholderTextColor={Colors.themeLightGrey}
              />
            </View>
            {searchCity != "" ? (
              <TouchableOpacity onPress={ClearFn} style={SearchScreenStyles.SearchBarCloseBox}>
                <Text style={SearchScreenStyles.SearchBarCloseTxt}>X</Text>
              </TouchableOpacity>
            ) : null}
          </View>

          <TouchableOpacity onPress={SearchFn} style={SearchScreenStyles.SearchBarBox}>
            <Image source={Icons.SearchL} style={SearchScreenStyles.SearchIcn} />
          </TouchableOpacity>
        </View>

        {searchCityData ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={HomeScreenStyles.CenterContentBox}>
              <View style={HomeScreenStyles.LocationBox}>
                <Image source={Icons.PinL} style={HomeScreenStyles.LocationIcn} />
                <Text style={HomeScreenStyles.LocationTxt}>{searchCityData?.name}</Text>
              </View>

              <Text style={HomeScreenStyles.TodayDateTxt}>{moment().format('ddd DD MMMM h:mm A')}</Text>


              <View style={HomeScreenStyles.TemperatureBox}>
                <Text style={HomeScreenStyles.TemperatureTxt}>{searchCityData?.main?.temp?.toFixed(1)}°</Text>
                <View style={HomeScreenStyles.TemperatureIcnBox}>
                  <Image source={SelectIcn(searchCityData?.weather[0]?.icon)} style={HomeScreenStyles.TemperatureIcn} />
                </View>
              </View>

              <Text style={HomeScreenStyles.ClimateTxt}>{searchCityData?.weather[0]?.description}</Text>
            </View>

            <View style={HomeScreenStyles.Card1Box}>
              <View style={HomeScreenStyles.SmallBox}>
                <View style={HomeScreenStyles.SmallBoxIcn}>
                  <Image source={Icons.MaxTemp} style={HomeScreenStyles.MaxTempIcn} />
                </View>
                <Text style={HomeScreenStyles.SmallBoxTxt}>Max Temp</Text>
                <Text style={HomeScreenStyles.SmallBoxValueTxt}>{searchCityData?.main?.temp_max}°C</Text>
              </View>

              <View style={HomeScreenStyles.SmallBox}>
                <View style={HomeScreenStyles.SmallBoxIcn}>
                  <Image source={Icons.Humidity} style={HomeScreenStyles.HumidityIcn} />
                </View>
                <Text style={HomeScreenStyles.SmallBoxTxt}>Humidity</Text>
                <Text style={HomeScreenStyles.SmallBoxValueTxt}>{searchCityData?.main?.humidity}%</Text>
              </View>

              <View style={HomeScreenStyles.SmallBox}>
                <View style={HomeScreenStyles.SmallBoxIcn}>
                  <Image source={Icons.Wind} style={HomeScreenStyles.WindIcn} />
                </View>
                <Text style={HomeScreenStyles.SmallBoxTxt}>Wind</Text>
                <Text style={HomeScreenStyles.SmallBoxValueTxt}>{searchCityData?.wind?.speed}m/s</Text>
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
        ) : null}
      </ImageBackground>
    </View>
  )
}

export default SearchScreen