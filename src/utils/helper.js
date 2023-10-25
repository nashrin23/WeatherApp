import { Platform, StyleSheet } from 'react-native'
import { moderateScale, statusbarHeight } from './metrics';
import { Colors } from '../assets/constants/global.colors';

const Helpers = StyleSheet.create({
    statusbar: {
        paddingTop: Platform.OS != "ios" ? 0 : statusbarHeight,
    },
    FlexOnly: {
        flex:1,
    },
    FlexOnlyRow: {
        flex:1,
        flexDirection: "row",
    },
    Mid: {
        alignItems: "center",
        justifyContent:"center",
    },
    Away: {
        alignItems:"center",
        justifyContent:"space-between",
    },
    RowAway : {
        flexDirection: "row",
        justifyContent:"space-between",
    },
    flexMid: {
        flex:1,
        alignItems: "center",
        justifyContent:"center",
    },
    flexRow : {
        flexDirection: "row",
        alignItems:"center",
    },
    flexRowCenter : {
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
    },
    flexRowAway : {
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
    },
});

const Common = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex:1,
    },
    backgroundImage: {
        width:"100%",
        height:"100%",
    },
    hitSlop: {
        left: 20, 
        right: 20, 
        top: 20,
        bottom: 20, 
    },
    tabBottomHeight: {
        marginBottom: Platform.OS == "ios" ? moderateScale(100) : moderateScale(65),
    },
    elevationHalf: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.9,
        shadowRadius: 0.5,
        
        elevation: 0.5,
    },
    elevation1: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        
        elevation: 1,
    },
    elevation3: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },
    elevation5: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})

export { Helpers, Common }