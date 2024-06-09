import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { is_null } from '../utility/functions';

export default function GradientButton({title='text',style={},onPress=undefined}) {

  const onButtonPress=()=>{
    if(!is_null(onPress)){
        onPress()
    }
  }

  return (

    <TouchableOpacity onPress={onButtonPress} style={[styles.buttonContainer,{...style}]}>
        <LinearGradient end={{x: 0, y: 0}} start={{x: 1, y: 0}} colors={['#a279f2', '#929cee', '#83bfea','#72e3e5']} style={[styles.linearGradient]}>
            <Text style={styles.buttonTitle}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>

  );
}

var styles = StyleSheet.create({
  buttonContainer:{
    height:45,
    width:'100%',
  },
  linearGradient: {
    justifyContent:'center',
    borderRadius:15,
    overflow:'hidden',
    marginVertical:15,
    alignItems:'center',
    height:45,
    width:'100%',
  },
  buttonTitle:{
    color:'#fff'
  }
});