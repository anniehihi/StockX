import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  category,
  sneaker,
  popular,
  trending,
  featured,
  bags,
} from "../data/Data.json";
import { Ionicons } from "@expo/vector-icons";
import Items from "../components/Items";

function HomeScreen({ props, navigation }) {
  // const [dataCategory, setDataCategory] = useState(category);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View>
        <Image
          source={{
            uri: "https://sixfiguresneakerhead.com/media/goat.jpg",
          }}
          style={{ width: "100%", height: 160 }}
        />
      </View>
      <ScrollView>
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Shop By Category
          </Text>

          <View style={{ paddingBottom: 15, paddingTop: 15 }}>
            <ScrollView
              horizontal={true} //kéo ngang
              showsHorizontalScrollIndicator={false}
            >
              {category.map((l, i) => (
                <TouchableOpacity key={i} onPress={() => navigation.navigate("Category", l)}> 
                  <View style={{ alignItems: "center" }}>
                    <Image style={styles.image} source={{ uri: l.image }} />
                    <Text style={{ fontWeight: "500" }}>{l.title}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <Text style={{ fontSize: 18, fontWeight: "600", paddingBottom: 15 }}>
            Most Popular Sneakers
          </Text>
          <Items name={sneaker} navigation={navigation} />

          {/* ============================ popular brand ============================ */}
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Most Popular</Text>
          <View style={{ paddingBottom: 15, paddingTop: 15 }}>
            <ScrollView
              horizontal={true} //kéo ngang
              showsHorizontalScrollIndicator={false}
            >
              {popular.map((l, i) => (
                <View key={i} style={{ alignItems: "center" }}>
                  <Image style={styles.image2} source={{ uri: l.image }} />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* ============================ trending  ============================ */}
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Trending Apparel
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
              }}
            >
              <Text style={{ color: "green", fontSize: 15 }}>See All</Text>
              <Ionicons name="arrow-forward-outline" size={20} color="green" />
            </View>
          </View>
          <Items name={trending} navigation={navigation} />

          {/* ============================ featured collectibles  ============================ */}
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Featured Collectibles
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
              }}
            >
              <Text style={{ color: "green", fontSize: 15 }}>See All</Text>
              <Ionicons name="arrow-forward-outline" size={20} color="green" />
            </View>
          </View>
          <Items name={featured} navigation={navigation} />

          <View>
            <Image
              style={{ width: "100%", height: 500, resizeMode: "contain" }}
              source={{
                uri: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt12cb4225b6d61ea1/61c23160aac9397f42317381/DropX-JBL_SecondaryB.jpg?format=jpg&auto=webp&height=438",
              }}
            />
          </View>

          {/* ============================ bags  ============================ */}
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Most Viewed Bags
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
              }}
            >
              <Text style={{ color: "green", fontSize: 15 }}>See All</Text>
              <Ionicons name="arrow-forward-outline" size={20} color="green" />
            </View>
          </View>
          <Items name={bags} navigation={navigation} />

          <View>
            <Image
              style={{ width: "100%", height: 500, resizeMode: "contain" }}
              source={{
                uri: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltd9a6dcbae847af76/61c13808c7bcdd56a3192b03/SecondaryB.jpg?format=jpg&auto=webp&height=438",
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginBottom: 15,
  },

  item: {
    width: 130,
    height: 220,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 10,
    marginBottom: 20,
    backgroundColor: "white",
    padding: 7,
  },
  imageItems: {
    width: "100%",
    height: "60%",
    resizeMode: "contain",
  },
  text: {
    flex: 1,
    justifyContent: "space-between",
  },
  image2: {
    width: 155,
    height: 135,
    marginRight: 10,
    marginBottom: 15,
    resizeMode: "contain",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,
  },
});

export default HomeScreen;
