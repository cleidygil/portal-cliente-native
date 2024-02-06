import React from "react";
import {
  FlatList,
  RefreshControl,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import services from "../../server/service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import CardDeuda from "../../components/Card-deuda";
import CardContract from "../../components/CardContract";
const Home = () => {
  const navigation = useNavigation();
  const [contratos, setContratos] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(true)
  const [refreshing, setRefreshing] = React.useState(false);

  const getClient = async () => {
    setLoading(true)
    const value = JSON.parse(await AsyncStorage.getItem("user"));
    try {
      const response = await services.get(
        `/api/gsoft/portal/contracts/?client=${value.id}`
      );
      if (response.data) {
        console.log("getCliente", response.data.results);
        const res = response.data.results
        setResults(res);
        setContratos(response.data);
        setLoading(false)
      }
    } catch (error) {
      console.log(error, "Error");
      setLoading(false)
    }
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getClient();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  React.useEffect(() => {
    getClient();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        } >
        {
          !loading ? (
            <>
              <CardDeuda />
              <View style={styles.container}>
                <View style={styles.card}>
                  <FlatList data={results}
                    renderItem={({ item }) => <CardContract value={item} />} />
                </View>


              </View>
            </>
          ) :
            (
              <>
                <View style={styles.container}>
                  <ActivityIndicator animating={true} color={MD2Colors.red800} size={100} />
                </View>
              </>
            )
        }

      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    color: "#ffff",
    justifyContent: "center",
    alignItems: 'stretch',
    padding: 20,
    margin: 20,
    gap: 4
  },

});
export default Home;
{/* <TouchableOpacity
                  accessibilityRole="button"
                  onPress={getClient}
                  style={{
                    backgroundColor: "red",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Contratos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  accessibilityRole="button"
                  style={{
                    backgroundColor: "red",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Salir</Text>
                </TouchableOpacity> */}