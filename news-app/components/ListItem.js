import { StyleSheet, Text, View , Image } from 'react-native';

const styles = StyleSheet.create({
    itemcontainer:  {
      height : 100,
      width  : '100%',
      borderColor : 'gray',
      borderWidth : 1,
      flexDirection :"row",
    },
  
    leftconrainer: {
      width : 100,
    },
    rightcontiner: {
      flex : 1,
      flexDirection : "column" ,
      padding : 10,
      justifyContent : "space-between",
    },
    text : {
      fontSize : 16,
    },
    subText: {
      fontSize : 12,
      color : "gray",
    },
  });

  const ListItem = ({imageUrl, title, author}) => {
    return (
        <View style= {styles.itemcontainer}>
        <View style={styles.leftconrainer}>
        {!!imageUrl && (<Image
          style = {{width : 100, height :100,}}
          source = {{uri:imageUrl}}
        />)}
        </View>
        <View style={styles.rightcontiner}>
          <Text numberOfLines={3} style={styles.text}>
          {title}
          </Text>
          <Text style={styles.subText}>{author}</Text>
        </View>
      </View>
    )
  }

  export default ListItem;