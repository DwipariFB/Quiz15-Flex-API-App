import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';


export default function App() {
  const[data, setData]=useState()

  const getData = async() => {
    try {
      const res= await axios.get('https://newsapi.org/v2/top-headlines', {
        params:{
          country:'us',
          category:'business',
          apikey:'d2880bf45394496697e32e0e00c41da9',
        },
      });

      // console.log(res)
      setData(res.data.articles)
    } catch (error) {
      alert(error.massage)
    }
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <>
    {/* {console.log(data)} */}
    <SafeAreaView>
     <ScrollView>
     <View style={styles.container}>
    <Text style={styles.title}>Business</Text>
  </View>
      {data && data.map((item, i) => {
        return<>
            
            
            <View style={{flex:1, flexDirection:'row', marginVertical:10, marginHorizontal:5,  backgroundColor: "#F5F5DC"}}>
            <Image style={{width:100, height:100,  backgroundColor: "#000000c0"}}source={{uri:item.urlToImage}}/>

            <View style={{justifyContent:'space-between', marginVertical:10, marginHorizontal:10}}>
            <Text style={{fontWeight:'bold', }}>{item.title}</Text>
            <Text>{item.author}</Text>
            </View>
            </View>
            </>
      })}
     </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    // marginTop: 16,
    paddingVertical: 8,
    // borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
