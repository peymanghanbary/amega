import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import useThemeContext from '../../utility/hooks/useThemeContext';
import { isIpValid, toast } from '../../utility/functions';
import { useEffect, useState } from 'react';
import Slider from './partials/Slider';
import IPInfo from '../../components/IPInfo';

export default function HomeScreen({navigation}:any) {
  const { colors } = useThemeContext();
  const [data,setData]=useState({})
  const [ip,setIp]=useState("")
  const [isTracking,setIsTracking]=useState(false)

  useEffect(()=>{
    fetchWho()
  },[])

  const fetchWho=()=>{

    fetch(`https://ipwho.is?ip=${ip}`)
    .then(response => response.json())
    .then(json => {
      setData(json)
      setIsTracking(false)
    })
    .catch(error => {
      console.error(error);
      setIsTracking(false)
    });
    
  };

  const trackIp=()=>{

    if(!isIpValid(ip)){return toast("IP is not valid")}
    setIsTracking(true)
    fetchWho()
    
  }

  return (
    <View style={{ backgroundColor: colors.backgrounds.default,flex:1}}>

      <View style={styles.ipTrackerContainer}>
        <Text style={styles.ipTrackerTitle}>IP Tracker</Text>
        <View style={{flexDirection:'row'}}>
          <TextInput onChangeText={setIp} placeholder='Search For Any Ip Address' style={styles.ipTrackerInput}/>
          <TouchableOpacity onPress={trackIp} style={styles.ipTrackerSubmit}>
            {isTracking? (
              <ActivityIndicator size={'small'}/>
            ):(
              <Text style={{color:'#fff'}}>{'>'}</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <IPInfo data={data}/>

      <Slider data={data} navigation={navigation}/>

    </View>
  );
}

const styles=StyleSheet.create({
  ipTrackerContainer:{
    backgroundColor:'#3554d1',
    paddingHorizontal:50,
    paddingVertical:70
  },
  ipTrackerTitle:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'700',
    fontSize:24,
    marginBottom:30 
  },
  ipTrackerInput:{
    backgroundColor:'#fff',
    flex:1,
    height:40,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    paddingHorizontal:10
  },
  ipTrackerSubmit:{
    backgroundColor:'#000',
    width:40,
    justifyContent:'center',
    alignItems:'center',
    borderTopRightRadius:10,
    borderBottomRightRadius:10
  },
})