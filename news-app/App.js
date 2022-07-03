import { StatusBar as ExpoStatusBar  } from "expo-status-bar";
import React , { useState, useEffect} from "react";
import { StyleSheet, View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import ListItem from './components/ListItem';
import DummyArticles from './DummyData/articles.json'
import Constants from "expo-constants";
import axios from "axios";

const URL= `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default function App() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetchArticles();
  }, [])

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL)
      setArticles(response.data.articles)
    } catch(error) {

    }
  }

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
          />}
          keyExtractor = {(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
    );
};



