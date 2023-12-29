import { StyleSheet, View } from 'react-native';
import ProductList from '../components/ProductsList';

const HomeScreen = () => {
  return(
    <View style={styles.View}>
      <ProductList/>
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