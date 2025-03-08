import { View, Text, TouchableOpacity } from 'react-native'
import Header from '@/layouts/header'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

const profile = () => {
  return (
    <View className='w-full flex-1'>
      <Header 
        Left={
          <Link href={'/'} asChild>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={27} color="black" />
            </TouchableOpacity>
          </Link>
        }
        centerText="Profile"         
      />
      <Text>Profile</Text>
    </View>
  )
}

export default profile