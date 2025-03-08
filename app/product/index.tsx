import Header from '@/layouts/header'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'

const Product = () => {
  return (
    <View>
        <Header 
        Left={
          <Link href={'/'} asChild>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={27} color="black" />
            </TouchableOpacity>
          </Link>
        }
        centerText="Product"         
      />
      <Text>Product</Text>
    </View>
  )
}

export default Product