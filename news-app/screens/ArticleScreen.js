//===================================================================
// インポート
//===================================================================
import { StyleSheet, SafeAreaView} from 'react-native';
import WebView from "react-native-webview"
import Loading from '../components/Loading';

//===================================================================
// スタイル定義
//===================================================================
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });

//===================================================================
// 記事表示画面
//===================================================================
export default function AeticleScreen({route}) {
    const {article} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <WebView 
                source={{uri: article.url}}
                startInLoadingState = {true}
                renderLoading = {() => <Loading />}
            />
        </SafeAreaView>
        );
   
}