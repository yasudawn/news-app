//===================================================================
// インポート
//===================================================================
import { StatusBar as ExpoStatusBar  } from "expo-status-bar";
import React , { useState, useEffect} from "react";
import { StyleSheet, View, FlatList, SafeAreaView, StatusBar,RefreshControl } from 'react-native';
import ListItem from '../components/ListItem';
import Loading from "../components/Loading"
import Constants from "expo-constants";
import axios from "axios";

// ニュースサイトのURL
const URL= `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:0,
    backgroundColor: '#fff',
    // Android 対応
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

//===================================================================
// ニュースリスト画面
//===================================================================
export default function NewsListScreen({navigation}) {
    const [articles, setArticles] = useState([]);
    const [loading , setLoading] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    useEffect(() => {
        fetchArticles();
    }, [])
  //=================================================================
  // ニュースサイトからデータを取得する
  //=================================================================
  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
      setLoading(true);
    } catch(error) {

    }
    setLoading(false);
  }

  const onRefresh = () => {
    setRefreshing(true);
    fetchArticles();
    setRefreshing(false);
  }

  //=================================================================
  // ニュースリスト表示
  //=================================================================
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="auto" />
      <View>
        <FlatList 
          data={articles}
          renderItem = {({item}) => <ListItem 
            imageUrl={item.urlToImage}
            title={item.title}
            author ={item.author}
            onPress = {() => navigation.navigate("Aeticle" ,{article: item})}
          />}
          keyExtractor = {(item, index) => index.toString()}
          refreshControl = {
              <RefreshControl 
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
          }
        />
      </View>
      {loading && <Loading />}
    </SafeAreaView>
    );
};



