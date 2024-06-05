import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HeaderHomeComp from "../../components/HomeComp/HeaderHomeComp";
import SearchHomeComp from "../../components/HomeComp/SearchHomeComp";
import TitleHomeComp from "../../components/HomeComp/TitleHomeComp";
import HistoryWatchCt from "../../containers/HistoryWatchCt";
import MovieCt from "../../containers/MovieCt";
import ColorStyle from "../../styles/ColorStyle";

type Props = {
  navigation: { navigate: Function };
};

const HomePage = ({ navigation }: Props) => {
  const [search, setSearch] = useState("");
  const [banner, setBanner] = useState([
    { id: 1, image: require("../../assets/images/banner1.png") },
    { id: 2, image: require("../../assets/images/banner1.png") },
    { id: 3, image: require("../../assets/images/banner1.png") },
    { id: 4, image: require("../../assets/images/banner1.png") },
  ]);
  const [movies, setMovies] = useState([]);
  const [histories, setHistories] = useState([
    {
      id: 1,
      title: "Spiderman: No Way Home",
      time: "3h 12m",
      poster: require("../../assets/images/watch1.png"),
    },
    {
      id: 2,
      title: "Exhuma",
      time: "1h 12m",
      poster: require("../../assets/images/watch2.webp"),
    },
  ]);

  useEffect(() => {
    async function getDataLogin() {
      try {
        const token = await AsyncStorage.getItem("user_token");
        console.log("token nya", token);
        handleGetMovies(token);
      } catch (e) {
        console.log(e);
      }
    }

    getDataLogin();
  }, []);

  const urlApi = "https://wanhoster.com/app-film/public/api/";

  // get movies
  const handleGetMovies = (token: any) => {
    axios
      .get(urlApi + "movie", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setMovies(res.data.data);
        console.log("res movies", res.data);
      })
      .catch((err) => {
        console.log("err movies", err.response.data);
      });
  };

  return (
    <View style={styles.container}>
      <HeaderHomeComp
        name="Ilham"
        onNotif={() => navigation.navigate("Blank")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* search */}
        <SearchHomeComp
          value={search}
          onChangeText={(v: string) => setSearch(v)}
        />

        {/* movies */}
        <TitleHomeComp
          title="Latest Movie"
          onPress={() => navigation.navigate("Movie")}
        />
        <MovieCt
          data={movies}
          onPress={(value: any) => navigation.navigate("MovieDetail", value)}
        />

        {/* history */}
        <TitleHomeComp title="History Watch" onPress={() => {}} />
        <HistoryWatchCt data={histories} onPress={() => {}} />
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorStyle.background,
  },
});
