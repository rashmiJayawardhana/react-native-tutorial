import { View, Text } from 'react-native'
import "../global.css"
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Text className='text-5xl font-bold text-green-700'>Index</Text>
      <Link href={"/Category"}>Category</Link>
      <Link href={"/Products"}>Products</Link>
      <Link href={"/product/Index"}>Product</Link>
      <Link 
        href={{
          pathname: "/product/[ProductId]",
          params:{
            ProductId: "auk",
            name: "Rashmi",
            city: "Panadura",
          },
        }}
      >
        123
      </Link>
    </View>
  )
}

export default Index