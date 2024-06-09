import { Dimensions,StyleSheet, Text, View } from 'react-native';

export default function IPInfo({data}:any) {

  return (

      <View style={styles.whoItemContainer}>

        <View style={styles.whoItem}>
          <Text style={styles.whoItemTitle}>IP Address</Text>
          <Text numberOfLines={2} style={styles.whoItemValue}>{data.ip}</Text>
        </View>
        
        <View style={styles.whoItem}>
          <Text style={styles.whoItemTitle}>Location</Text>
          <Text numberOfLines={2} style={styles.whoItemValue}>{`${data.capital}, ${data.country_code}`}</Text>
        </View>

        <View style={styles.whoItem}>
          <Text style={styles.whoItemTitle}>Timezone</Text>
          <Text numberOfLines={2} style={styles.whoItemValue}>UTC {data.timezone?.utc}</Text>
        </View>

        <View style={styles.whoItem}>
          <Text style={styles.whoItemTitle}>ISP</Text>
          <Text numberOfLines={2} style={styles.whoItemValue}>{data.connection?.isp}</Text>
        </View>

      </View>

  );
}

const styles=StyleSheet.create({
  whoItemContainer:{
    flexDirection:'row',
    backgroundColor:'#000',
    paddingHorizontal:10,
    paddingVertical:40
  },
  whoItem:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    paddingHorizontal:5
  },
  whoItemTitle:{
    fontSize:14,
    fontWeight:'700',
    color:'#fff',
  },
  whoItemValue:{
    fontSize:12,
    fontWeight:'400',
    color:'#757575',
    marginTop:10,
    height:35,
    textAlign:'center',
  },
})