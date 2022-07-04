//===================================================================
// インポート
//===================================================================
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsListScreen from "../screens/NewsListScreen";
import AeticleScreen from '../screens/ArticleScreen'; 

const Stack = createNativeStackNavigator();

//===================================================================
// アプリケーションメイン
//===================================================================
export default AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={NewsListScreen} options={{headerShown:false}} />
          <Stack.Screen name="Aeticle" component={AeticleScreen} options={{headerTitle:""}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };