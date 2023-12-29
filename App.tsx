import { NavigationContainer } from "@react-navigation/native";
import MyTabs from './navigation/tabs'
import { CartProvider } from './context/CartContext'

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <MyTabs /> 
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
