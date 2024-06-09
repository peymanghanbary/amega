import { ActivityIndicator, Text, View } from 'react-native';

export default function LoadingComponent() {

  return (
    <View style={{alignItems:'center'}}>
        <Text>Loading</Text>
        <ActivityIndicator/>
    </View>
  );
}