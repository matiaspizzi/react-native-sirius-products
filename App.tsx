import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from './context/CartContext'
import { ToastProvider } from 'react-native-toast-notifications'
import Navigator from "./navigation/Navigator";

const App = () => {
  return (
    <CartProvider>
      <ToastProvider offset={60}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </ToastProvider>
    </CartProvider>
  );
};

export default App;
