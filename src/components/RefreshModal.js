import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../assets/constants/global.colors'
import { horizontalScale, moderateScale } from '../utils/metrics'
import Modal from "react-native-modal";

const RefreshModal = (props) => {
  return (
    <View>
      <Modal isVisible={props.loader} style={styles.indicatorContainer}>
        <View style={styles.indicatorBox}>
          <ActivityIndicator size={Platform.OS == "ios" ? "small" : "large"} color={Colors.themeViolet} />
        </View>
      </Modal>
    </View>
  )
}

export default RefreshModal

const styles = StyleSheet.create({
    indicatorContainer: {
      backgroundColor:'rgba(0,0,0,0)',
      margin: 0,
    },
    indicatorBox: {
        backgroundColor: Colors.white,
        width: horizontalScale(38),
        height: horizontalScale(38),
        borderRadius: moderateScale(38),
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
})