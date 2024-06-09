import { StyleSheet, Text , TouchableOpacity } from 'react-native';
import { is_null } from '../utility/functions';

export default function SimpleButton({title="",style={},onPress=undefined}) {

    const onButtonPress=()=>{
        if(!is_null(onPress)){
            onPress()
        }
    }
  return (

    <TouchableOpacity onPress={onButtonPress} style={[styles.loginButton,{...style}]}>
        <Text>{title}</Text>
    </TouchableOpacity>

  );
}

var styles = StyleSheet.create({
  loginButton:{
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor:'#fff',
    width:'100%',
    borderRadius:15,
    height:45,
    justifyContent:'center',
    alignItems:'center'
  }
});