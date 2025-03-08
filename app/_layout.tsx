import Footer from '@/layouts/footer';
import { Link, router, Slot } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'

const RootLayout = () => {
  return <View className='relative w-full flex-1'>
    <Slot />
    <Footer />
    
  </View>;
};

export default RootLayout