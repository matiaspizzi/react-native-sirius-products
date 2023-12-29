import { StyleSheet, Text, View, Image } from 'react-native';

const CartScreen = () => {
  return(
    <View style={styles.View}>
      <Text>Hola</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  View: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }
})