import { ScrollView, StyleSheet, View } from 'react-native';
import ProductList from '../components/ProductsList';

const HomeScreen = () => {
  return(
    <ScrollView>
      <View style={styles.View}>
        <ProductList/>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }
})