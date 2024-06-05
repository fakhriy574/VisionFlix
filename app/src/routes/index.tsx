import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import LoginPage from "../pages/AuthPage/LoginPage";
import RegisterPage from "../pages/AuthPage/RegisterPage";
import HomePage from "../pages/HomePage";
import MovieDetailPage from "../pages/MoviePage/MovieDetailPage";
import MoviePlayPage from "../pages/MoviePage/MoviePlayPage";
import SplashPage from "../pages/SplashPage";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  // state loading
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 3000);
  }, []);

  if (loading) {
    return <SplashPage />;
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {/* auth */}
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{
            headerShown: false,
          }}
        />
        {/* home */}
        <Stack.Screen
          name="MainHome"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        {/* moview */}
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetailPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MoviePlay"
          component={MoviePlayPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
