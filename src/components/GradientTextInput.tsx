import { StyleSheet, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { is_null } from '../utility/functions';

export default function GradientTextInput({inputMode='text',maxLength=null,onChangeText=undefined,value=null}) {

  const onChange=(val)=>{
    if(!is_null(onChangeText)){
        onChangeText(val)
    }
  }

  return (

    <LinearGradient end={{x: 0, y: 0}} start={{x: 1, y: 0}} colors={['#a279f2', '#929cee', '#83bfea','#72e3e5']} style={styles.linearGradient}>
        <TextInput value={value} onChangeText={onChange} maxLength={maxLength} multiline placeholderTextColor="#fff" inputMode={inputMode} placeholder='001 xxxxxxxxxxxxxx' style={[styles.searchInput]}/>
    </LinearGradient>

  );
}

var styles = StyleSheet.create({
  linearGradient: {
    justifyContent:'center',
    borderRadius:15,
    overflow:'hidden',
    width:'100%',
    marginVertical:15
  },
  version: {
    color:'#fff',
    textTransform:'uppercase',
    fontWeight:'800',
    marginTop:20,
    position:'absolute',
    bottom:100,
  },
  searchInput:{
    paddingHorizontal:45,
    borderColor:'#bbb',
    textAlign:'center',
    color:'#fff'
  },

});