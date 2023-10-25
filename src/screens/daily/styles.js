import { Platform, StyleSheet } from "react-native";
import { height, horizontalScale, moderateScale, verticalScale, width } from "../../utils/metrics";
import { RobotoBlack, RobotoMedium, RobotoRegular } from "../../assets/constants/global.fonts";
import { Colors } from "../../assets/constants/global.colors";

const DailyScreenStyles = StyleSheet.create({
    BgImg : {
      width: "100%",
      height: "100%",
      backgroundColor: Colors.grey,
    },
    AppBar: {
        width: "100%",
        backgroundColor: Colors.grey,
        flexDirection:"row",
        alignItems: "center",
        paddingVertical: horizontalScale(20),
    },
    BackBox: {
        width: horizontalScale(32),
        height: horizontalScale(32),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: horizontalScale(16),
    },
    BackIcn: {
        width: horizontalScale(22),
        height: horizontalScale(20),
    },
    TitleTxt: {
        fontSize: moderateScale(22),
        color: Colors.black,
        fontFamily: RobotoMedium,
        marginLeft: horizontalScale(4),
    },
    DailyBox: {
        flex: 10,
        flexDirection: "row",
        paddingHorizontal: horizontalScale(16),
        paddingVertical: horizontalScale(16),
    },
    IndividualBox: {
        flex: 3,
    },
    DayBox: {
        height: horizontalScale(40),
        justifyContent: "center",
    },
    DayTxt: {
        fontSize: moderateScale(16),
        color: Colors.themeDarkGrey,
        fontFamily: RobotoMedium,
    },
    CalendarRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: horizontalScale(4),
    },
    CalendarIcn: {
        width: horizontalScale(20),
        height: horizontalScale(20),
        marginHorizontal: horizontalScale(6),
    },
    CalendarTxt: {
        fontSize: moderateScale(14),
        color: Colors.themeDarkGrey,
        fontFamily: RobotoMedium,
    },
    TempRowBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    TempImgBox: {
        width: horizontalScale(40),
        height: horizontalScale(40),
        marginLeft: horizontalScale(8),
    },
    TempImgIcn: {
        width: horizontalScale(40),
        height: horizontalScale(40),
        resizeMode: "contain",
    },
    TempValueTxt: {
        fontSize: moderateScale(12),
        color: Colors.themeLightGrey,
        fontFamily: RobotoMedium,
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "auto",
        marginBottom: horizontalScale(2),
    },
    IndividualMaxMinBox: {
        flex: 4,
        flexDirection: "row",
        alignItems: "center",
    },
    MaxMinBox: {
        width: horizontalScale(32),
        height: horizontalScale(48),
        marginLeft: horizontalScale(10),
        marginRight: horizontalScale(12),
    },
    MaxMinIcn: {
        width: horizontalScale(32),
        height: horizontalScale(48),
        resizeMode: "contain",
    },
    MaxTxt: {
        fontSize: moderateScale(14),
        color: Colors.themeOrange,
        fontFamily: RobotoMedium,
    },
    MinTxt: {
        fontSize: moderateScale(14),
        color: Colors.themeLightBlue,
        fontFamily: RobotoMedium,
    },
});

export { DailyScreenStyles };
