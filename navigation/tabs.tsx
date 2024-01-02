import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/CartScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { useCartContext } from "../hooks/useCartContext";
import HomeScreen from "../screens/HomeScreen";
import React from "react";

const Tab = createBottomTabNavigator();

const MyTabs = () => {

  const { cart } = useCartContext();

  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => {
            return <FontAwesome5 name="home" size={size} color={color} />;
          },
          headerTitleAlign: "center",
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => {
            return (
              <FontAwesome5 name="shopping-cart" size={size} color={color} />
            );
          },
          headerTitleAlign: "center",
          tabBarBadge: cart.length,
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
