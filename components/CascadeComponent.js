import { StyleSheet, Text, View, FlatList, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'

import { cascadeData } from '../mocks/CascadeMocks';
import { globalStyle } from '../styles/AppStyle'
import { globalColor } from '../constants/ColorsConstants';

const CascadeComponent = (props) => {
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 9 / 16);
  const imageWidth = dimensions.width - 20;
  //console.log(imageWidth)

  const handlePressItem = (item) => {
    props.navigation.navigate('Details', item)
  }

  const renderItem = ({ item }) => {
    const link = 'https://rando974.re/images/wallpapers/wallpaperMini800x600/'+item.nameWallpaper+'.jpg'
    return (
      <Pressable
      onPress={() => { handlePressItem({item}) } }>
        <View style={globalStyle.itemContenair}>

          <Text style={globalStyle.itemTitleText}>
            {item.nomRando}
          </Text>

          <View style={globalStyle.itemContenairImage}>
            <Image
              style={[globalStyle.itemImage, { minWidth: parseInt(imageWidth) } ]}
              source={{ uri: link }}
            />
          </View>
          
        </View>
      </Pressable>
    )
  };

  
  return (
    <View>  
      <FlatList
        data={cascadeData.data}
        renderItem={renderItem}
        keyExtractor={item => item.idRando}
      />

    </View>
  )
}

export default CascadeComponent

const styles = StyleSheet.create({
  
})