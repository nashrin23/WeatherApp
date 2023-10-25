import { Platform, StyleSheet } from "react-native";
import { height, horizontalScale, moderateScale, verticalScale, width } from "../../utils/metrics";
import { RobotoBlack, RobotoMedium, RobotoRegular } from "../../assets/constants/global.fonts";
import { Colors } from "../../assets/constants/global.colors";

const TodayScreenStyles = StyleSheet.create({
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
    SearchRow: {
        height: horizontalScale(60),
        flexDirection: "row",
        marginHorizontal: horizontalScale(24),
        marginVertical: horizontalScale(24),
    },
    SearchBar: {
        backgroundColor: Colors.white,
        flex: 1,
        height: horizontalScale(60),
        flexDirection: "row",
        marginRight: horizontalScale(12),
        borderRadius: moderateScale(9),
    },
    SearchBarLocationBox: {
        height: horizontalScale(60),
        marginLeft: horizontalScale(18),
        marginRight: horizontalScale(12),
        alignItems: "center",
        justifyContent: "center",
    },
    SearchBarLocationIcn: {
        width: horizontalScale(22),
        height: horizontalScale(22),
    },
    SearchCityIPBox: {
        flex: 1,
        height: horizontalScale(60),
        justifyContent: "center",
    },
    SearchCityIP: {
        fontSize: moderateScale(16),
        color: Colors.black,
        fontFamily: RobotoRegular,
        textTransform: "capitalize",
    },
    SearchBarBox: {
        backgroundColor: Colors.themeLightViolet,
        width: horizontalScale(60),
        height: horizontalScale(60),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: moderateScale(9),
    },
    SearchIcn: {
        width: horizontalScale(24),
        height: horizontalScale(24),
    },
    riseSetCard: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        paddingHorizontal: horizontalScale(8),
        paddingVertical: horizontalScale(24),
        marginHorizontal: horizontalScale(16),
        marginTop: verticalScale(40),
        marginBottom: verticalScale(40),
        borderRadius: moderateScale(32),

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },
    riseSetCardRow: {
        alignItems: "center",
    },
    sunRiseBox: {
        // width: horizontalScale(96),
        // height: horizontalScale(96),
    },
    sunRiseIcn: {
        width: horizontalScale(104),
        height: horizontalScale(104),
        resizeMode: "contain",
    },
    sunRiseValueTxt: {
        fontSize: moderateScale(16),
        color: Colors.black,
        fontFamily: RobotoMedium,
        textTransform: "uppercase",
    },
    sunRiseTxt: {
        fontSize: moderateScale(20),
        color: Colors.themeYellow,
        fontFamily: RobotoMedium,
        textTransform: "capitalize",
    },
    sunSetTxt: {
        fontSize: moderateScale(20),
        color: Colors.themeOrange,
        fontFamily: RobotoMedium,
        textTransform: "capitalize",
    },
});

export { TodayScreenStyles };
