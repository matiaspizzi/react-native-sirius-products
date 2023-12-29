import { StyleSheet, Text, View, Image } from 'react-native';
import ProductsList from '../components/ProductsList';

const HomeScreen = () => {
  return(
    <View style={styles.View}>
      <ProductsList/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  View: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }
})