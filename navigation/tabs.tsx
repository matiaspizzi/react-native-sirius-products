import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home"
import CartScreen from "../screens/Cart"
import { Entypo } from "@expo/vector-icons";
import MyStacks from '../navigation/stacks'
import useCartLength from '../hooks/useCartLength'

const Tab = createBottomTabNavigator();

const MyTabs = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "grey" }}
    >
      <Tab.Screen
        name="Home"
        component={MyStacks}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => {
            return <Entypo name="shopping-cart" size={size} color={color} />;
          },
          headerTitleAlign: "center",
          tabBarBadge: useCartLength(),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs