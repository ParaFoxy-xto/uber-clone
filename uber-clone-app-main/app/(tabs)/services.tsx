import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import tw from "twrnc";
import { suggestionsData } from "@/constants";
const { width } = Dimensions.get("window");

const Services = () => {
  return (
    <Container>
      <Title>Services</Title>
      <View style={tw`py-3`}>
        <Title className="text-xl mb-5">Go anywhere, get anything</Title>
        <FlatList
          data={suggestionsData}
          numColumns={2}
          keyExtractor={(item) => item?._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                tw`bg-black mb-2.5 rounded-lg py-8 px-4`,
                { width: width / 2 - 30, marginHorizontal: 5 },
              ]}
            >
              <Image
                source={{ uri: item?.image }}
                style={tw`w-32 h-20 self-end`}
                resizeMode="contain"
              />
              <Text style={tw`text-lg text-white font-medium`}>
                {item?.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Container>
  );
};

export default Services;
