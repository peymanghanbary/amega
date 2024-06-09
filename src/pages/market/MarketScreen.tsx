import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import useThemeContext from '../../utility/hooks/useThemeContext';
import { useEffect, useState } from 'react';
import LoadingComponent from '../../components/LoadingComponent';

export default function MarketScreen({navigation}:any) {
  const { colors } = useThemeContext();

  const [data,setData]=useState([])
  
  // console.log('data',data);
  
  useEffect(()=>{

    const ws = new WebSocket('wss://stream.binance.com:443/ws/btcusdt');

    var subscribe = {
      "method": "SUBSCRIBE",
      "params": [
        "btcusdt@aggTrade"
      ],
      "id": 1
    }

    ws.onopen = () => {
      // connection opened
      ws.send(JSON.stringify(subscribe)); // send a message
    };

    ws.onmessage = (e) => {
      // a message was received
      // console.log('result:',e.data);
      let d=JSON.parse(e.data)
      if(d.M){
        setData(s=>(s.concat([d]).reverse()))
      }
    };

    ws.onerror = e => {
      // an error occurred
      console.log('error:',e.message);
    };

    ws.onclose = e => {
      // connection closed
      console.log('onClose:',e.code, e.reason);
    };


    return ()=>{
      ws.removeEventListener()
    }
  },[])

  return (
    <View style={{ backgroundColor: colors.backgrounds.default,flex:1}}>

      <FlatList
        data={data}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item})=>{
          return (
            <Text style={styles.stockDetail}>{`${item.s} | ${parseInt(item.p).toFixed(2)} | ${item.q} | ${item.a}`}</Text>
          )
        }}
        ListEmptyComponent={()=><LoadingComponent/>}
      />

    </View>
  );
}

const styles=StyleSheet.create({
  stockDetail:{
    paddingHorizontal:10,
    paddingVertical:3,
    borderBottomWidth:1,
    borderBottomColor:'#bbb',
    textAlign:'center'
  }
})