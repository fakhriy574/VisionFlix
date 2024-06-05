import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import HeaderAuthComp from "../../components/AuthComp/HeaderAuthComp";
import TermAuthComp from "../../components/AuthComp/TermAuthComp";
import ButtonComp from "../../components/Common/ButtonComp";
import FormInputComp from "../../components/Common/FormInputComp";
import ColorStyle from "../../styles/ColorStyle";

type Props = {
  navigation: { navigate: Function; reset: Function };
};

const RegisterPage = ({ navigation }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [term, setTerm] = useState(false);

  const urlApi = "https://wanhoster.com/app-film/public/api/";

  const saveDataLogin = async (token: any) => {
    try {
      if (token != null) {
        await AsyncStorage.setItem("user_token", token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    let body = {
      nama: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirm,
    };

    axios
      .post(urlApi + "register", body, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log("res register", res.data);
        saveDataLogin(res.data.token);
        navigation.reset({
          index: 0,
          routes: [{ name: "MainHome" }],
        });
      })
      .catch((err) => {
        Alert.alert("Alert Title", err.response.data.message, [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        console.log("err register", err.response.data);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderAuthComp title="Sign Up" />

        <View style={styles.content}>
          <FormInputComp
            title="Nama Lengkap"
            icon={require("../../assets/icons/user.png")}
            placeholder="Masukan Nama Lengkap Anda"
            value={name}
            onChangeText={(v: string) => setName(v)}
          />
          <FormInputComp
            title="Email"
            icon={require("../../assets/icons/email.png")}
            placeholder="Masukan Email Anda"
            value={email}
            onChangeText={(v: string) => setEmail(v)}
          />
          <FormInputComp
            title="Password"
            icon={require("../../assets/icons/lock.png")}
            placeholder="Masukan Password Anda"
            value={password}
            onChangeText={(v: string) => setPassword(v)}
            secureTextEntry={true}
          />
          <FormInputComp
            title="Konfirmasi Password"
            icon={require("../../assets/icons/lock.png")}
            placeholder="Masukan Ulang Password Anda"
            value={passwordConfirm}
            onChangeText={(v: string) => setPasswordConfirm(v)}
            secureTextEntry={true}
          />

          <TermAuthComp checked={term} onPress={(v: boolean) => setTerm(v)} />

          <ButtonComp
            type="primary"
            title="Sign Up"
            onPress={() => handleRegister()}
          />

          <View style={{ marginVertical: 16 }}>
            <ButtonComp
              type="secondary"
              title="Login"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorStyle.background,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
