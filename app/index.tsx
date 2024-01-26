import { GestureHandlerRootView } from "react-native-gesture-handler"
import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TextInput, FlatList, ScrollView } from 'react-native';
import React from "react";
import MapView, { Marker } from 'react-native-maps';

export default function TabOneScreen() {
  const snapPoints = useMemo(() => ['15%', '50%', '100%'], []);
  const map = { uri: 'https://miro.medium.com/v2/resize:fit:828/1*JIo8O0Erc_WRhPVDMvJEtA.png' };
  const marker = { uri: "https://themayanagari.com/wp-content/uploads/2021/01/9-7.jpg" }
  const [text, onChangeText] = React.useState('Nairobi Street Kitchen');

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      photo: "https://image.made-in-china.com/202f0j00pkAblmafrhcN/Changan-Uni-K-2-0t-Awd-Full-New-Cars-From-China-Changan-Uni-K-Hybrid-and-Luxury-China-New-Energy-Electric-Car-EV-Car.jpg",
      plate: "3 min",
      hours: "Ksh 200",
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      photo: "https://image.made-in-china.com/202f0j00pkAblmafrhcN/Changan-Uni-K-2-0t-Awd-Full-New-Cars-From-China-Changan-Uni-K-Hybrid-and-Luxury-China-New-Energy-Electric-Car-EV-Car.jpg",
      plate: "3 min",
      hours: "Ksh 200",
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      photo: "https://image.made-in-china.com/202f0j00pkAblmafrhcN/Changan-Uni-K-2-0t-Awd-Full-New-Cars-From-China-Changan-Uni-K-Hybrid-and-Luxury-China-New-Energy-Electric-Car-EV-Car.jpg",
      plate: "3 min",
      hours: "Ksh 200",
    },
    {
      id: '3ac68afc-c05-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      photo: "https://image.made-in-china.com/202f0j00pkAblmafrhcN/Changan-Uni-K-2-0t-Awd-Full-New-Cars-From-China-Changan-Uni-K-Hybrid-and-Luxury-China-New-Energy-Electric-Car-EV-Car.jpg",
      plate: "3 min",
      hours: "Ksh 200",
    },
    {
      id: '58694a0f-3d1-471f-bd96-145571e29d72',
      title: 'Third Item',
      photo: "https://image.made-in-china.com/202f0j00pkAblmafrhcN/Changan-Uni-K-2-0t-Awd-Full-New-Cars-From-China-Changan-Uni-K-Hybrid-and-Luxury-China-New-Energy-Electric-Car-EV-Car.jpg",
      plate: "3 min",
      hours: "Ksh 200",
    },
  ];

  type ItemProps = { title: string, photo: string, plate: string, hours: string };

  const Item = ({ title, plate, hours, photo }: ItemProps) => (
    <View style={styles.item}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: photo
        }} />
      <View style={styles.teamWrapper}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.team}>{plate}</Text>
      </View>
      <View style={styles.teamWrapper2}>
        <Text style={styles.points}>{hours}</Text>
      </View>
    </View>
  );


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <ImageBackground source={map} resizeMode="cover" style={styles.image}>
        </ImageBackground> */}
        <MapView style={styles.map}
          initialRegion={{
            latitude: -1.28333,
            longitude: 36.81667,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: -1.265190,
              longitude: 36.804770,
            }}
            pinColor = {"#32D286"}
            title={text}
            description={"Westlands"}
          />
        </MapView>
        <BottomSheet index={1} snapPoints={snapPoints}>
          <View style={styles.contentContainer}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <ScrollView>
              <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} plate={item.plate} hours={item.hours} photo={item.photo} />}
                keyExtractor={item => item.id}
              />
            </ScrollView>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    width: 10,
    height: 10,
  },
  input: {
    height: 45,
    margin: 12,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#F2F3F4",
    padding: 10,
  },
  title: {
    fontSize: 15,
  },
  tinyLogo: {
    width: 50,
    borderRadius: 10,
    height: 40,
  },
  item: {
    backgroundColor: '#F2F3F4',
    borderRadius: 7,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  team: {
    fontSize: 10,
    paddingLeft: 6,
    paddingRight: 6,
  },
  text: {
    fontSize: 14,
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold',
  },
  logo: {
    width: 66,
    height: 58,
  },

  pointStat: {
    fontSize: 11,
    color: "grey",
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 15,
    color: "grey",
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold',
  },
  teamWrapper: {
    padding: 1,
    flex: 1,
  },
  teamWrapper2: {
    padding: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  containerHeadline: {
    fontSize: 14,
    fontWeight: '600',
    padding: 20
  }
});
