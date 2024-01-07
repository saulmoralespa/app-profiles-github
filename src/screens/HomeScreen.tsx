import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ErrorBoundary from 'react-native-error-boundary';
import UsersContext from '../context/UsersProvider';
import Chart from '../components/Chart';
import ComponentError from '../components/ComponentError';
import clientAxios from '../config/axios';


const HomeScreen = ({navigation}): React.JSX.Element => {
const {
  users,
  nameUser,
  setNameUser,
  imageLoading,
  hasError,
  setImageLoading
} = useContext(UsersContext);

  const ListItemSeparator = () => {
    return (
      <View style={styles.listItemSeparator}
      />
    );
  }

  return (
    <ErrorBoundary>
      <SafeAreaView style={styles.contentContainerStyle}>
            <Text style={styles.textLabel}>
            Buscar usuarios de Github que inicien con:
            </Text>
            <View>
              <TextInput
                style={styles.textInput}
                placerholder='saul'
                value={nameUser}
                onChangeText={(text) => setNameUser(text)}
                maxLength={4}
              >
              </TextInput>
            </View>
            <FlatList
                enableEmptySections={true}
                data={users}
                keyExtractor= {(item) => {
                  return item.id;
                }}
          
                onEndReachedThreshold={0.5}
                renderItem={({item}) => {
                  return (
                    <View>
                      <TouchableOpacity onPress={() => {
                        navigation.navigate('Usuario', {
                          userLogin: item.login
                        });
                      }}>
                        <View style={styles.box}>
                          <ImageBackground
                            style={styles.image}
                            source={imageLoading ? require('../assets/img/default-user.png') : null} 
                          >
                            <Image
                              style={styles.image}
                              source={{uri: item.avatar_url}}
                              onLoad={() => setImageLoading(false)}
                            />
                          </ImageBackground>
                          <View style={styles.boxContent}>
                              <Text style={styles.textName}>{item.login}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )
                }}
                ItemSeparatorComponent={ListItemSeparator}
              />
              <Chart
                users={users}
              />
              {hasError && <ComponentError/>}
      </SafeAreaView>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
    contentContainerStyle:{
      flex: 1,
      backgroundColor: Colors.white,
      marginTop: StatusBar.currentHeight || 0,
    },
    textLabel: {
      color: Colors.black, 
      fontSize: 40, 
      fontWeight: 'bold'
    },
    textInput: {
      fontSize:20,
      color: Colors.black, 
      borderWidth:2,
      borderColor: 'gray'
    },
    image: {
      width: 150,
      height:150,
    },
    box: {
      padding:20,
      marginTop:5,
      marginBottom:5,
      backgroundColor: 'white',
      flexDirection: 'row',
    },
    boxContent: {
      flex:1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft:10,
    },
    textName: {
      fontSize: 18,
      fontWeight: "bold",
      fontStyle: "italic",
      color: "#000"
    },
    description: {
      fontSize:15,
      color: "#000",
      fontWeight: "bold"
    },
    listItemSeparator: {
      height: 1,
      width: "100%",
      backgroundColor: "#ccc"
    }
  });

export default HomeScreen;