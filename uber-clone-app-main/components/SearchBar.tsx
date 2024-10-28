import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@/config";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "@/store/uberSlices";

const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <GooglePlacesAutocomplete
      styles={inputBoxStyles}
      placeholder="where From?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      query={{
        key: GOOGLE_API_KEY,
        language: "en",
      }}
      fetchDetails={true}
      minLength={2}
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        dispatch(
          setOrigin({
            location: details?.geometry?.location,
            description: data?.description,
          })
        );
        dispatch(setDestination(null));
      }}
    />
  );
};

const inputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
    flex: 0,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: "#DDDDDD20",
    borderWidth: 1,
    borderColor: "#00000050",
    borderRadius: 50,
  },
  textInputContainer: {
    paddingBottom: 0,
  },
});

export default SearchBar;
