import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, View } from "react-native";
import ButtonComp from "../../components/Common/ButtonComp";
import EmptyDataComp from "../../components/Common/EmptyDataComp";
import HeaderMovieComp from "../../components/MovieComp/HeaderMovieComp";
import InfoMovieComp from "../../components/MovieComp/InfoMovieComp";
import MenuMovieComp from "../../components/MovieComp/MenuMovieComp";
import CastMovieCt from "../../containers/MovieCt/CastMovieCt";
import ColorStyle from "../../styles/ColorStyle";

type Props = {
  navigation: { goBack: Function; navigate: Function };
  route: any;
};

const MovieDetailPage = ({ navigation, route }: Props) => {
  const [data, setData] = useState(route?.params);

  const [genre, setGenre] = useState([
    { id: 1, title: "Action" },
    { id: 2, title: "Adventure" },
    { id: 3, title: "Fantasy" },
  ]);
  const [menu, setMenu] = useState<"cast" | "crew">("cast");

  const [token, setToken] = useState<any>(null);
  const [userId, setUserId] = useState("");
  const [isSubscribe, setIsSubscribe] = useState("");

  useEffect(() => {
    async function getDataLogin() {
      try {
        const token = await AsyncStorage.getItem("user_token");
        setToken(token);
        handleGetMe(token);
      } catch (e) {
        console.log(e);
      }
    }

    getDataLogin();
  }, []);

  const urlApi = "https://wanhoster.com/app-film/public/api/";

  // handle get me
  const handleGetMe = (token: any) => {
    axios
      .get(urlApi + `me`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setUserId(res.data.data[0].id);
        setIsSubscribe(res.data.data[0].subscribe);
        console.log("res me", res.data.data);
      })
      .catch((err) => {
        console.log("err me", err.response.data);
      });
  };

  // handle subscribe
  const handleSubscribe = () => {
    axios
      .get(urlApi + `subscribe/${userId}`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("res subs", res.data);
        navigation.navigate("MoviePlay");
      })
      .catch((err) => {
        Alert.alert("Alert Title", err.response.data.message, [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        console.log("err subs", err.response.data);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: data?.file_url }} style={styles.poster} />
        <HeaderMovieComp
          onBack={() => navigation.goBack()}
          onShare={() => {}}
        />
        <View style={styles.content}>
          <InfoMovieComp
            rate={data?.rating}
            view={data?.view}
            title={data?.title}
            age={data?.age}
            time={data?.time}
            year={data?.year}
            genre={genre}
            desc={data?.desc}
          />
          <MenuMovieComp menu={menu} onPress={(v: any) => setMenu(v)} />
          {menu == "cast" ? (
            <CastMovieCt data={data?.join_crew} />
          ) : (
            <EmptyDataComp />
          )}
        </View>
      </ScrollView>
      <View style={styles.navbar}>
        <ButtonComp
          type="primary"
          title={
            isSubscribe == "0" ? "Berlangganan Sekarang" : "Tonton Sekarang"
          }
          onPress={() => handleSubscribe()}
        />
      </View>
    </View>
  );
};

export default MovieDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorStyle.background,
  },
  poster: {
    width: "100%",
    height: 410,
    resizeMode: "cover",
  },
  content: {
    paddingVertical: 16,
  },
  navbar: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: ColorStyle.background,
    elevation: 2,
  },
});
