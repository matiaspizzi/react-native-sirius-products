import { NavigationContainer } from "@react-navigation/native";
import MyTabs from './navigation/Tabs'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from 'react-native-toast-notifications'

const App = () => {
  return (
    <CartProvider>
      <ToastProvider offset={60}>
        <NavigationContainer>
          <MyTabs /> 
        </NavigationContainer>
      </ToastProvider>
    </CartProvider>
  );
};

export default App;
