//===================================================================
// インポート
//===================================================================
import { StyleSheet, View, ActivityIndicator } from 'react-native';

//===================================================================
// スタイル定義
//===================================================================
const styles = StyleSheet.create({
    container: {
        position : 'absolute',
        top: 0,
        left : 0,
        height : '100%',
        width:'100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

//===================================================================
const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
};

export default Loading;