import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const SingleProduct = () => {
    const params = useLocalSearchParams();
    console.log(params);
  return (
    <View>
      <Text>SingleProduct</Text>
      <Text>{params.name}</Text>
      <Text>{params.city}</Text>
      <Text>{params.ProductId}</Text>
    </View>
  )
}

export default SingleProduct