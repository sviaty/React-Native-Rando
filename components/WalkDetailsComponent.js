import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

import { globalStyle } from '../styles/AppStyle'
import { globalColor } from '../constants/ColorsConstants'

import Icon from 'react-native-vector-icons/Ionicons';

const WalkDetailsComponent = (props) => {

  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 9 / 16);
  const imageWidth = dimensions.width - 20;

  const walk = props.route.params.item
  const link = 'https://rando974.re/images/wallpapers/wallpaperMini800x600/'+walk.nameWallpaper+'.jpg'

  const calculDist = (distance) => {
    //console.log(distance / 1000)
    return distance / 1000
  }

  const calculTempHeure = (temps) => {
    const min = ((temps / 60) % 60)
    const heure = parseInt(((temps / 60) / 60) % 24)
    //console.log(min)
    //console.log(heure)
    if(heure >= 1){
      return heure+' h '+ min + ' min'
    } else {
      return heure+' h '+ min + ' min'
    }
  }

  return (
    <View style={styles.viewContainer}>
      <View style={styles.titleRandoContenair}>
        <Text style={styles.viewTitle}>{walk.nomRando}</Text> 
      </View>
      
      <View style={styles.imageRandoContainer}>
        <Image
          style={[globalStyle.itemImage, { minWidth: parseInt(imageWidth) } ]}
          source={{ uri: link }}
        />
      </View>

      <View style={styles.titleRandoContenair}>
        <Icon style={styles.iconInformation} name="information-circle" size={30} color='white'/> 
        <Text style={styles.viewTitle}>Informations</Text> 
      </View>

      <View style={styles.viewContainerInformation}>

        <View style={styles.viewContainerInfo}>
          <Text style={styles.textInformation}>Distance : </Text> 
          <Text style={styles.textInformation}>{calculDist(walk.distanceTotal)} km</Text> 
        </View>

        <View style={styles.viewContainerInfo}>
          <Text style={styles.textInformation}>Temps : </Text> 
          <Text style={styles.textInformation}>{calculTempHeure(walk.timeRandoTotal)} </Text> 
        </View>

        <View style={styles.viewContainerInfo}>
          <Text style={styles.textInformation}>Dénivelé positif : </Text> 
          <Text style={styles.textInformation}>{walk.denivelePosTotal} m</Text> 
        </View>

        
        
      </View>
    </View>
  )
}

export default WalkDetailsComponent

const styles = StyleSheet.create({
  viewContainer: {
    flex:1,
    backgroundColor: globalColor.colorDarkGray
  },

  titleRandoContenair: {
    flexDirection: 'row',
    backgroundColor: globalColor.colorPurple500
  },

  imageRandoContainer: {
    alignItems: 'center',
  },

  viewTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    padding:15
  },

  iconInformation: {
    marginTop:13,
    marginStart:10
  },

  viewContainerInformation: {
    padding:10
  },

  viewContainerInfo: {
    flexDirection: 'row',
  },

  textInformation: {
    color: 'white',
    fontSize: 18,    
  },
})