import { Platform, StyleSheet } from "react-native";
import { height, horizontalScale, moderateScale, verticalScale, width } from "../../utils/metrics";
import { RobotoBlack, RobotoMedium, RobotoRegular } from "../../assets/constants/global.fonts";
import { Colors } from "../../assets/constants/global.colors";

const SearchScreenStyles = StyleSheet.create({
    BgImg : {
      width: "100%",
      height: "100%",
    },
    AppBar: {
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
        color: Colors.white,
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
    SearchBarCloseBox: {
        height: horizontalScale(60),
        marginLeft: horizontalScale(12),
        marginRight: horizontalScale(18),
        alignItems: "center",
        justifyContent: "center",
    },
    SearchBarCloseTxt: {
        fontSize: moderateScale(16),
        color: Colors.themeLightGrey,
        fontFamily: RobotoRegular,
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
});

export { SearchScreenStyles };
