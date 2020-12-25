import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import FlatListSlider from "../components/FLatListSlider";

const screenWidth = Dimensions.get("window").width;
export default function Description() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("http://www.rudvedatrading.com/api/productshow/3")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style = {{flex : 1, alignContent : "center",justifyContent : "center"}}>
          <ActivityIndicator
            animating= {true}
            size="large"
            color="#00ff00"
          />
        </View>
      ) : (
        <SafeAreaView>
          <ScrollView>
            <FlatListSlider
              data={data.productimages}
              timer={5000}
              onPress={(item) => alert(JSON.stringify(item))}
              indicatorContainerStyle={{ position: "absolute", bottom: 20 }}
              indicatorActiveColor={"#8e44ad"}
              indicatorInActiveColor={"#ffffff"}
              indicatorActiveWidth={30}
              animation
            />
            <View>
              {/* View for data under the slider  */}
              {/* Features */}
              <View style={styles.headingview}>
                <Text style={styles.headingText}>Features</Text>
              </View>
              {data.productfetures.map((item) => {
                return (
                  <View style={styles.row}>
                    <View style={styles.cell}>
                      <Text style={styles.cellText}>{item.feture_name}:</Text>
                    </View>
                    <View style={styles.cell}>
                      <Text style={styles.cellText}>
                        {item.feture_explanation}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
            {/* Description */}
            {data.product_description == null ? null : (
              <View>
                <View style={styles.headingview}>
                  <Text style={styles.headingText}>Description</Text>
                </View>
                <View style={styles.row}>
                  <View style={styles.cell}>
                    <Text style={styles.cellText}>Description:</Text>
                  </View>
                  <View style={styles.cell}>
                    <Text style={styles.cellText}>
                      {data.product_description}
                    </Text>
                  </View>
                </View>
              </View>
            )}

            {/* Audio Player View  */}

            <View>
              <Text>Audio Player here</Text>
            </View>

            {/* Flatlist horizontal */}
            <FlatList
              horizontal
              data={data.otherproducts}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <ImageBackground
                    style={styles.itemImage}
                    source={{ uri: item.product_thumbnail_path }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>{item.user_product_id}</Text>
                    </View>
                  </ImageBackground>
                </View>
              )}
            />
          </ScrollView>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.quoteText}>Get a Quote</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
}

const itemMargin = 1;
const itemWidth = screenWidth / 2 - 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    width: screenWidth,
    flexDirection: "row",
  },
  cell: {
    flex: 1,
  },
  cellText: {
    fontSize: 20,
    padding: 10,
  },
  headingText: {
    fontSize: 24,
    padding: 10,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  headingview: {
    width: screenWidth,
    alignContent: "center",
    justifyContent: "center",
  },
  footer: {
    width: screenWidth,
    backgroundColor: "cyan",
    height: 40,
  },
  button: {
    flex: 1,
    backgroundColor: "cyan",
    justifyContent: "center",
    alignContent: "center",
  },
  quoteText: {
    fontSize: 24,
    justifyContent: "center",
    alignContent: "center",
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  item: {
    marginHorizontal: itemMargin,
    marginTop: itemMargin,
    width: itemWidth,
    height: itemWidth,
    backgroundColor: "#ECECEC",
  },
  itemImage: {
    backgroundColor: "#F1EAE9",
    flex: 1,
  },
  childView: {
    flex: 1,
  },
});
