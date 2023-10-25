import { Platform, StyleSheet } from "react-native";
import { height, horizontalScale, moderateScale, verticalScale, width } from "../../utils/metrics";
import { RobotoBlack, RobotoMedium, RobotoRegular } from "../../assets/constants/global.fonts";
import { Colors } from "../../assets/constants/global.colors";

const HomeScreenStyles = StyleSheet.create({
    BgImg : {
      width: width,
      height: height,
    },
    AppBar : {
      width:"100%",
      flexDirection: "row",
      alignSelf: "center",
      paddingTop: verticalScale(15),
      marginTop: Platform.OS === "ios" ? verticalScale(50) : 0,
    },
    MenuBox: {
      height: horizontalScale(32),
      marginHorizontal: horizontalScale(12),
    },
    MenuIcn: {
      width: horizontalScale(32),
      height: horizontalScale(32),
    },
    RefreshBox: {
      width: horizontalScale(32),
      height: horizontalScale(32),
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: horizontalScale(8),
    },
    RefreshIcn: {
      width: horizontalScale(30),
      height: horizontalScale(30),
    },
    StarBox: {
      width: horizontalScale(32),
      height: horizontalScale(32),
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: horizontalScale(8),
      marginLeft: "auto",
    },
    StarIcn: {
      width: horizontalScale(26),
      height: horizontalScale(26),
    },
    SearchBox: {
      width: horizontalScale(32),
      height: horizontalScale(32),
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: horizontalScale(14),
    },
    SearchIcn: {
      width: horizontalScale(28),
      height: horizontalScale(28),
    },
    CenterContentBox: {
        // width: "60%",
        alignSelf: "center",
        alignItems: "center",
        marginTop: verticalScale(-4),
        marginBottom: verticalScale(32),
    },
    LocationBox: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: verticalScale(8),
    },
    LocationIcn: {
        width: horizontalScale(28),
        height: horizontalScale(28),
        marginRight: horizontalScale(8),
    },
    LocationTxt: {
        fontSize: moderateScale(30),
        color: Colors.white,
        fontFamily: RobotoMedium,
        textTransform: "uppercase",
    },
    TodayDateTxt: {
        fontSize: moderateScale(18),
        color: Colors.white,
        fontFamily: RobotoMedium,
    },
    TemperatureBox: {
        flexDirection: "row",
        marginTop: moderateScale(-8),
        marginBottom: moderateScale(-8),
    },
    TemperatureTxt: {
        // fontSize: moderateScale(128),
        fontSize: moderateScale(112),
        color: Colors.white,
        fontFamily: RobotoMedium,
    },
    TemperatureIcnBox: {
        marginLeft: moderateScale(-40),
        marginTop: "auto",
        marginBottom: moderateScale(12),
    },
    TemperatureIcn: {
        width: moderateScale(64),
        height: moderateScale(64),
        resizeMode: "contain",
        marginTop: "auto",
    },
    ClimateTxt: {
        fontSize: moderateScale(28),
        color: Colors.white,
        fontFamily: RobotoMedium,
        textTransform: "uppercase",
    },
    Card1Box: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        paddingVertical: horizontalScale(24),
        marginHorizontal: horizontalScale(16),
        marginBottom: verticalScale(32),
        borderRadius: moderateScale(32),

        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },
    SmallBox: {
        alignItems: "center",
        justifyContent: "center",
    },
    SmallBoxIcn: {
        height: horizontalScale(46),
        justifyContent: "center",
        alignItems: "center",
    },
    MaxTempIcn: {
        width: horizontalScale(38),
        height: horizontalScale(46),
        resizeMode: "center",
    },
    HumidityIcn: {
        width: horizontalScale(34),
        height: horizontalScale(34),
        resizeMode: "center",
    },
    WindIcn: {
        width: horizontalScale(36),
        height: horizontalScale(32),
        resizeMode: "center",
    },
    SmallBoxTxt: {
        fontSize: moderateScale(14),
        color: Colors.themeLightGrey,
        fontFamily: RobotoMedium,
        textTransform: "capitalize",
        marginTop: verticalScale(4),
    },
    SmallBoxValueTxt: {
        fontSize: moderateScale(16),
        color: Colors.black,
        fontFamily: RobotoMedium,
    },
    Card2Box: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        paddingVertical: horizontalScale(24),
        marginHorizontal: horizontalScale(16),
        marginBottom: verticalScale(160),
        borderRadius: moderateScale(32),

        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },
    BigBox: {
        alignItems: "center",
        justifyContent: "center",
    },
    BigBoxTempValueTxt: {
        fontSize: moderateScale(16),
        color: Colors.black,
        fontFamily: RobotoMedium,
    },
    BigBoxTempTitleTxt: {
        fontSize: moderateScale(10),
        color: Colors.themeLightGrey,
        fontFamily: RobotoMedium,
        textTransform: "uppercase",
    },
    BigBoxIcn: {
        width: (width/3) * 0.6,
        height: (width/3) * 0.45,
        marginTop: verticalScale(16),
        marginBottom: verticalScale(8),
    },
    BigBoxTemperatureIcn: {
        width: (width/3) * 0.6,
        height: (width/3) * 0.45,
        resizeMode: "center",
    },
    BigBoxTempTimeTxt: {
        fontSize: moderateScale(16),
        color: Colors.themeLightGrey,
        fontFamily: RobotoMedium,
        textTransform: "uppercase",
    },
});

export { HomeScreenStyles };
