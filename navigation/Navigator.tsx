import { createStackNavigator } from "@react-navigation/stack";
import ProductScreen from "../screens/ProductScreen";
import MyTabs from "./Tabs";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={MyTabs} options={{headerShown: false}}/>
        <Stack.Screen name="Product" component={ProductScreen} options={{headerTitle: 'Product details', headerTitleAlign: 'center', headerBackTitleVisible: false}}/>
      </Stack.Navigator>
  );
};

export default Navigator;
