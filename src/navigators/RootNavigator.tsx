import HomeScreen from '../pages/home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/navigators/TabBarIcon';
import HeaderTitle from '../components/navigators/HeaderTitle';
import { images } from '../utility/constants/global';
import ProfileScreen from '../pages/profile/ProfileScreen';
import MarketScreen from '../pages/market/MarketScreen';

const Tab = createBottomTabNavigator();
export default function RootNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerTitle:(props)=><HeaderTitle {...props}/>}}>
      <Tab.Screen 
        name="Dashboard" 
        component={HomeScreen} 
        options={{tabBarIcon:()=><TabBarIcon source={images.tabbar.dashboard}/>}}
      />
      <Tab.Screen 
        name="Market" 
        component={MarketScreen} 
        options={{tabBarIcon:()=><TabBarIcon source={images.tabbar.market}/>,title:'Market Data',unmountOnBlur:true}}
      />
      <Tab.Screen 
        name="Profile"
        component={ProfileScreen} 
        options={{tabBarIcon:()=><TabBarIcon source={images.tabbar.profile}/>}}
      />
    </Tab.Navigator>
  );

}
