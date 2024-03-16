import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Todos } from "../screens/Todos";
import { NewTodo } from "../screens/NewTodo";
import { Login } from "../screens/Login";
import { useAuth } from '../hooks/AuthContext';

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
                  <Stack.Screen name="Login" component={Login} />
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
