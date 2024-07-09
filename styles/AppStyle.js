import { StyleSheet } from "react-native";
import { globalColor } from '../constants/ColorsConstants';

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Header 
    headerContenair : {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalColor.colorWhite
    },

    headerTitle: {
        minWidth: 450,
        textAlign:'center',
        backgroundColor: globalColor.colorPurple700,
        marginTop: 55,
        color: globalColor.colorWhite,
        fontSize: 35,
        padding: 5,
        fontFamily: 'pacifico'

    },

    // View 
    viewTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 5,
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: globalColor.colorPurple200
    },

    // Item
    itemContenair: {
        flex:1,
        backgroundColor: globalColor.colorBlack
      },
      itemTitleText: {
        color: 'white',
        fontSize: 22,
        padding: 15,
        fontWeight: 'bold',
        backgroundColor: globalColor.colorPurple500
      },
      itemContenairImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      itemImage: {
        minHeight: 200,
        margin:20,
        borderRadius:10
      }
})