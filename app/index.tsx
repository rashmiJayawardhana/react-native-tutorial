import { View, Text } from 'react-native'
import "../global.css"
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Text className='text-5xl font-bold text-green-700'>Index</Text>
      <Link href={"/category"}>Category</Link>
      <Link href={"/products"}>Products</Link>
      
    </View>
  )
}

export default Index