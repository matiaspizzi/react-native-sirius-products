import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../screens/ProductScreen'
import { RootStackParamList } from '../utils/types';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={HomeScreen}/>
      <Stack.Screen name="Product" component={ProductScreen} options={{headerTitle: ''}} />
    </Stack.Navigator>
  );
}

export default MyStack