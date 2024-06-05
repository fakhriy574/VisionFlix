import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ForgotAuthComp from "../../components/AuthComp/ForgotAuthComp";
import HeaderAuthComp from "../../components/AuthComp/HeaderAuthComp";
import OptionAuthComp from "../../components/AuthComp/OptionAuthComp";

import ButtonComp from "../../components/Common/ButtonComp";
import FormInputComp from "../../components/Common/FormInputComp";
import TextComp from "../../components/Common/TextComp";
import ColorStyle from "../../styles/ColorStyle";

type Props = {
  navigation: { navigate: Function };
};

const LoginPage = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderAuthComp title="Login" />
        <View style={styles.content}>
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
          <ForgotAuthComp onPress={() => { }} />
          <ButtonComp type="primary" title="Login" onPress={() => navigation.navigate('MainHome')} />
          <View style={{ marginVertical: 16 }}>
            <ButtonComp type="secondary" title="Sign Up" onPress={() => navigation.navigate('Register')} />
          </View>
          <View style={{ marginVertical: 8 }}>
            <View style={{ marginBottom: 8 }}>
              <TextComp
                type="regular"
                color={ColorStyle.white}
                size={14}
                value="Atau Login Via"
                textAlign="center"
              />
            </View>
            <OptionAuthComp
              onPress={() => { }}
              icon={require("../../assets/icons/google.png")}
              title="Login With Google"
            />
            <OptionAuthComp
              onPress={() => { }}
              icon={require("../../assets/icons/fb.png")}
              title="Login With Facebook"
            />
            <OptionAuthComp
              onPress={() => { }}
              icon={require("../../assets/icons/twitter.png")}
              title="Login With Twitter"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorStyle.background,
  },
  content: {
    paddingHorizontal: 16,
  },
});
