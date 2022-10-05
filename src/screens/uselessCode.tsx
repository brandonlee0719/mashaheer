import {BorderlessButton} from 'react-native-gesture-handler';

<View style={styles.passwordWrapper}>
  <View style={styles.passwordIconWrapper}>
    <PasswordIcon color={colors.gray01} />
  </View>
  <View style={styles.inputFieldWrapper}>
    <InputField
      keyboardType={'default'}
      placeholder={'Password'}
      secureTextEntry
      placeholderTextColor={colors.gray02}
    />
  </View>
  <View style={styles.showIconWrapper}>
    <TouchableWithoutFeedback onPress={() => alert('Pressed')}>
      <View>
        <ShowOnIcon color={colors.gray02} />
      </View>
    </TouchableWithoutFeedback>
  </View>
</View>;

<BorderlessButton onPress={() => navigation.navigate('RegisterScreen')}>
  <View style={styles.createAccountTextWrapper}>
    <Text style={styles.createAccountText01}>New to the game?</Text>
    <Text style={styles.createAccountText02}>Create an Account</Text>
  </View>
</BorderlessButton>;
----
export const Map: React.FC<MapProps> = ({}) => {
  const theme = useTheme();

  const initialMapState = {
    markers,
    categories: [
      {
        name: 'Fastfood Center',
        icon: <ChatIcon color={colors.gray02} size={18} />,
      },
      {
        name: 'Restaurant',
        icon: <QuantsIcon color={colors.gray02} size={18} />,
      },
      {
        name: 'Dineouts',
        icon: <SMSIcon color={colors.gray02} size={18} />,
      },
      {
        name: 'Snacks Corner',
        icon: <HomeIcon color={colors.gray02} size={18} />,
      },
      {
        name: 'Hotel',
        icon: <EmailIcon color={colors.gray02} size={15} />,
      },
    ],
    region: {
      latitude: 25.01107393004878,
      longitude: 55.28918798527704,
      latitudeDelta: 0.015,
      longitudeDelta: 0.016,
    },
  };

  const [state, setState] = RuseState(initialMapState);

  // let mapIndex = 0;
  // let mapAnimation = new Animated.Value(0);
  //
  // useEffect(() => {
  //   mapAnimation.addListener(({value}) => {
  //     let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
  //     if (index >= state.markers.length) {
  //       index = state.markers.length - 1;
  //     }
  //     if (index <= 0) {
  //       index = 0;
  //     }
  //
  //     clearTimeout(regionTimeout);
  //
  //     const regionTimeout = setTimeout(() => {
  //       if (mapIndex !== index) {
  //         mapIndex = index;
  //         const {coordinate} = state.markers[index];
  //         _map.current.animateToRegion(
  //           {
  //             ...coordinate,
  //             latitudeDelta: state.region.latitudeDelta,
  //             longitudeDelta: state.region.longitudeDelta,
  //           },
  //           350,
  //         );
  //       }
  //     }, 10);
  //   });
  // });
  //
  // const interpolations = state.markers.map((marker, index) => {
  //   const inputRange = [
  //     (index - 1) * CARD_WIDTH,
  //     index * CARD_WIDTH,
  //     (index + 1) * CARD_WIDTH,
  //   ];
  //
  //   const scale = mapAnimation.interpolate({
  //     inputRange,
  //     outputRange: [1, 1.5, 1],
  //     extrapolate: 'clamp',
  //   });
  //
  //   return {scale};
  // });
  //
  // const onMarkerPress = mapEventData => {
  //   const markerID = mapEventData._targetInst.return.key;
  //
  //   let x = markerID * CARD_WIDTH + markerID * 20;
  //   if (Platform.OS === 'ios') {
  //     x = x - SPACING_FOR_CARD_INSET;
  //   }
  //
  //   _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  // };

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  return (
    <View>
      <MapView
        ref={_map}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={state.region}>
        {state.markers.map((marker, index) => {
          // const scaleStyle = {
          //   transform: [
          //     {
          //       scale: interpolations[index].scale,
          //     },
          //   ],
          // };
          return (
            <MapView.Marker
              key={index}
              coordinate={marker.coordinate}
              onPress={e => onMarkerPress(e)}>
              <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={require('../../img/map/mapMarker.png')}
                  style={[styles.marker]}
                  resizeMode="cover"
                />
              </Animated.View>
            </MapView.Marker>
          );
        })}
      </MapView>
    </View>
  );
};


      {/* <View>
        <View style={styles.categoriesWrapper}>
          <Text style={styles.mainTitle}>Categories</Text>
          <FlatList
            style={styles.listWrapper}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categoriesList}
            renderItem={({ item }) => {
              return (
                <CategoriesCard
                  id={item.id}
                  name={item.name}
                  photo={item.photo}
                  onPress={() =>
                    navigation.navigate('Category', {
                      id: item.id,
                      name: item.name,
                      photo: item.photo,
                    })
                  }
                />
              );
            }}
          />
        </View>
      </View> */}
      {/* <Text style={styles.mainTitle}>Explore</Text> */}


      <View style={styles.header}>
        <SearchBar
          // onPress={() => navigation.navigate('Search')}
          onPress={() => handleRefetchPressed()}
        />
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
          <View style={styles.profileButton}>
            <ProfileIcon color={colors.black01} />
          </View>
        </TouchableWithoutFeedback>
      </View>