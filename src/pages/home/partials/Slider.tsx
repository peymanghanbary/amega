import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native';
import { calcImageHeight} from '../../../utility/functions';
import Carousel from 'react-native-reanimated-carousel';
import { images } from '../../../utility/constants/global';

const {width}=Dimensions.get('window')
const imageWidth=width-50
const imageHeight = calcImageHeight(1000,350,imageWidth)
export default function Slider({navigation,data={}}:any) {

  const sliderData=[
    {id:1,source:images.slider.slide1},
    {id:1,source:images.slider.slide2},
    {id:1,source:images.slider.slide3},
    {id:1,source:images.slider.slide4},
  ]

  return (
    <View style={styles.container}>

      <Carousel
        loop
        width={width}
        height={imageHeight}
        mode={'parallax'}
        modeConfig={{parallaxScrollingScale:1,parallaxAdjacentItemScale:0.8,parallaxScrollingOffset:75}}
        autoPlay={true}
        data={sliderData}
        autoPlayInterval={4000}
        scrollAnimationDuration={500}
        renderItem={({ item,index }) => (
          <Pressable onPress={()=>{navigation.navigate("Profile",{data,source:item.source})}} style={{alignItems:'center'}} key={index}>
              <Image alt='slider' style={styles.imageSlide} source={item.source}/>
          </Pressable>
        )}
      />

    </View>
  );
}

const styles=StyleSheet.create({
    container:{
        marginTop:50
    },
    imageSlide:{
        width:imageWidth,
        height:imageHeight,
        resizeMode:'contain',
        borderRadius:10,
    }
})