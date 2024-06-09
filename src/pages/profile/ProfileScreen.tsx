import { Dimensions, Image, StyleSheet,View } from 'react-native';
import useThemeContext from '../../utility/hooks/useThemeContext';
import IPInfo from '../../components/IPInfo';
import { calcImageHeight } from '../../utility/functions';

const {width}=Dimensions.get('window')
const imageWidth=width-50
const imageHeight = calcImageHeight(1000,350,imageWidth)
export default function ProfileScreen({route}:any) {

  const { colors } = useThemeContext();
  const source=route.params?.source??null
  const data=route.params?.data??{}
  return (
    <View style={{ backgroundColor: colors.backgrounds.default,flex:1}}>

      {source && (
        <View style={styles.imageContainer}>
          <Image alt='slider' style={styles.imageSlide} source={source}/>
        </View>
      )}
      <IPInfo data={data}/>

    </View>
  );
}

const styles=StyleSheet.create({
    imageContainer:{
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:50
    },
    imageSlide:{
        width:imageWidth,
        height:imageHeight,
        resizeMode:'contain',
        borderRadius:10,
    },
})