import { StatusBar } from "expo-status-bar";
import React, {useCallback, useEffect, useState} from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";

import CardContact from "./component/Card";

export default function App() {
  const [contactData, setContactData] = useState();

  const getData = useCallback(() => {
    axios({
      method: "get",
      url: "https://simple-contact-crud.herokuapp.com/contact",
    })
      .then(({ data }) => {
        setContactData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  })
    
  
  // console.log(contactData, '=========>');
  useEffect(() => {
    getData
  }, [])

  if(!contactData){
    return (
      <View>
        <Text>Wait a Second</Text>
      </View>
    )
  }

  function AddData() {}
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };


  return (
    <View style={styles.container}>
      {/* <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text>Example Modal. Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
        <Button style={{ marginTop: 30 }} onPress={showModal}>
          Create Contact
        </Button> */}
      {/* </Provider> */}
      {contactData.map(el => <CardContact el={el}/>)}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
