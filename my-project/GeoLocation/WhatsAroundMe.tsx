import { useEffect, useRef } from "react";
import { Platform, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import styles from "../styles";

export default function WhatsAroundMe() {
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    let watcher: Location.LocationSubscription | undefined;
    let cancelled = false;

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted" || cancelled) {
        return;
      }

      // iOS는 followsUserLocation이 동작하므로 Android에서만 직접 카메라를 이동
      if (Platform.OS !== "android") {
        return;
      }

      const sub = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 1 },
        ({ coords }) => {
          mapRef.current?.animateCamera(
            {
              center: {
                latitude: coords.latitude,
                longitude: coords.longitude,
              },
            },
            { duration: 100 }
          );
        }
      );

      if (cancelled) {
        sub.remove();
      } else {
        watcher = sub;
      }
    })();

    return () => {
      cancelled = true;
      watcher?.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <MapView
        ref={mapRef}
        style={styles.mapView}
        showsUserLocation
        followsUserLocation
      />
    </View>
  );
}
