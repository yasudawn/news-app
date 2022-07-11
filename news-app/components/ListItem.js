import { StyleSheet, Text, View , Image ,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    itemcontainer:  {
      height : 100,
      width  : '100%',
      padding : 3,
    },
    maincontainer:  {
      flexDirection :"row",
      width  : '100%',
      borderColor : 'gray',
      borderWidth : 1,
      borderRadius: 10,
    },
  
    leftconrainer: {
      padding : 2,
      width : 84,
    },
    rightcontiner: {
      flex : 1,
      flexDirection : "column" ,
      padding : 5,
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

  const ListItem = ({imageUrl, title, author, onPress}) => {
    return (
        <TouchableOpacity style= {styles.itemcontainer} onPress={onPress}>
          <View style={styles.maincontainer}>
            <View style={styles.leftconrainer}>
            {!!imageUrl && (<Image
              style = {{width : 84, height :84,}}
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
      </TouchableOpacity>
    )
  }

  export default ListItem;