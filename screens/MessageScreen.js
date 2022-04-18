import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Message from "../components/Message";
import { ScrollView } from "react-native-gesture-handler";

const MessageScreen = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.messageContainer}>
        <View>
          <Text style={styles.textLeft}>Message center</Text>
        </View>

        <View style={styles.messageTopRight}>
          <Ionicons name="notifications" size={18} color="green" />
          <Text style={styles.textRight}>Enable Push</Text>
        </View>
      </View>
      <ScrollView>
        <Message
          title="Introducing the New Message Center"
          content="Every Stock X order status, release update, market change, and more would be right ere waiting for you. Enjoy."
        />
        <Message
          title="Introducing the New Message Center"
          content="Every Stock X order status, release update, market change, and more would be right ere waiting for you. Enjoy."
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  messageTopRight: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 11,
    borderColor: "green",
    backgroundColor: "#ebffee",
  },
  textLeft: {
    fontSize: 23,
    fontWeight: "400",
  },
  textRight: {
    color: "green",
    paddingLeft: 2,
  },
});

export default MessageScreen;
