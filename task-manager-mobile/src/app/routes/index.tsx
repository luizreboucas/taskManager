import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Todos } from "../screens/Todos";
import { NewTodo } from "../screens/NewTodo";
import { SignIn } from "../screens/SignIn";
import { useAuth } from '../hooks/AuthContext';
import { SignUp } from "../screens/SignUp";

export const Routes = ({ isPrivate = false }) => {
  const { COLORS } = useTheme();

  const Stack = createStackNavigator();

  const { user } = useAuth();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BLACK }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            animationEnabled: true,
            headerShown: false
          }}
          >
            {
              user._id == null ? (
                <>
                  <Stack.Screen name="SignIn" component={SignIn} />
                  <Stack.Screen name="SignUp" component={SignUp} />
                </>
              ) : (
                <>
                  <Stack.Screen name="Home" component={Todos} />
                  <Stack.Screen name="NewTodo" component={NewTodo} />
                </>
              )
            }
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}
