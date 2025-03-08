import { View, Text, TouchableOpacity } from 'react-native'
import "../global.css"
import { Link } from 'expo-router'
import Header from '@/layouts/header'
import Ionicons from '@expo/vector-icons/Ionicons';


const Index = () => {
  return (
    <View className='w-full flex-1'>
      <Header 
        Left={
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={27} color="black" />
          </TouchableOpacity>}
        centerText="Home"         
      />
        
      <Text className='text-5xl font-bold text-blue-700'>Index</Text>
      <Link href={"/category"}>Category</Link>
      <Link href={"/products"}>Products</Link>

      <Link href={"/product"}>Product</Link>
      <Link 
        href={{
          pathname: "/product/[productId]",
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