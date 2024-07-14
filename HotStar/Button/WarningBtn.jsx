import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const WarningBtn = ({ style }) => {
  const warningbtn = () => {
    alert("Warning button clicked.");
  };
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={warningbtn}>
      <Text style={styles.buttonText}>
        Warning Button
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2 -7 28 28"
          width={24}
          height={24}
          color={"white"}
          fill={"black"}
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            // stroke="currentColor"
            // strokeWidth="1.5"
          />
          <path
            d="M11.992 15H12.001"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12L12 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(247 170 38)",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    alignItems: "center",
    width: 300,
    height: 50,
  },
  buttonText: {
    color:"black",
    fontSize: 26,
    fontWeight:"bold",
    fontFamily: "sans-serif",
  },
});

export default WarningBtn;
