import React, {useState, useEffect, useContext} from 'react';
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
  import CardUser from '../components/CardUser';
  import ComponentError from '../components/ComponentError';

export default function ProfileScreen({route, navigation}): React.JSX.Element {

  const {
    users,
    hasError
  } = useContext(UsersContext);

  const { userLogin } = route.params;
  const userState = users.find(userState => userState.login === userLogin);  

  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <View style={styles.box}>
          <CardUser
            user={userState}
          />
        </View>
      </View>
      {hasError && <ComponentError/>}
    </ErrorBoundary>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: StatusBar.currentHeight || 0,
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
});