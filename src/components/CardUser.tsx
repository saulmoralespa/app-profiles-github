import {
  View, 
  ScrollView, 
  StyleSheet,
  Image,
} from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const CardUser = ({user}) => {
  
  const {login, avatar_url, name, public_repos, public_gists} = user

  return (

    <>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Divider/>
            <Card.Image
                style={{ padding: 0 }}
                source={{
                  uri: avatar_url,
                }}
                resizeMode="contain"
              />
            <Text style={styles.textLogin}>
              username: <Text style={styles.bold}>{login}</Text>
            </Text>
            <Text style={styles.textLogin}>
              Repositorios públicos: <Text style={styles.bold}>{public_repos}</Text>
            </Text>
            <Text style={styles.textLogin}>
              Gists públicos: <Text style={styles.bold}>{public_gists}</Text>
            </Text>
          </Card>
        </View>
      </ScrollView>  
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  textLogin: {
    fontSize: 20,
    color: "#000",
    textAlign: 'center',
    marginTop: 5
  },
  bold: {
    fontWeight: 'bold'
  }
  });

export default CardUser;