import { useEffect, useRef, useState } from "react";
import { Platform, View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import MapView, { Polygon } from "react-native-maps";
import styles from "../styles";

// Expo는 EXPO_PUBLIC_ 접두사가 붙은 환경 변수만 앱 코드에 노출함
const APPLICATION_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

type Weather = { temp: string; desc: string; icon: string; name: string };
type LatLng = { latitude: number; longitude: number };

// 중심 좌표 주위로 육망성(정삼각형 2개를 겹친 모양) 좌표를 생성
// radius는 위도 기준 degree 단위이며, 경도는 위도에 따라 보정함
function makeHexagram(center: LatLng, radius = 0.002): LatLng[][] {
  const lngScale = 1 / Math.cos((center.latitude * Math.PI) / 180);
  const triangle = (startAngle: number): LatLng[] =>
    [0, 1, 2].map((i) => {
      const angle = startAngle + (i * 2 * Math.PI) / 3;
      return {
        latitude: center.latitude + radius * Math.sin(angle),
        longitude: center.longitude + radius * Math.cos(angle) * lngScale,
      };
    });
  // 위쪽을 향한 삼각형과 아래쪽을 향한 삼각형
  return [triangle(Math.PI / 2), triangle(-Math.PI / 2)];
}

export default function WeatherAroundMe() {
  const mapRef = useRef<MapView>(null);
  const [weather, setWeather] = useState<Weather>({
    temp: "", desc: "", icon: "", name: ""
  });
  const [star, setStar] = useState<LatLng[][]>([]);

  useEffect(() => {
    let watcher: Location.LocationSubscription | undefined;
    let cancelled = false;

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted" || cancelled) {
        return;
      }

      // 현재 위치 기준으로 날씨 조회
      const { coords } = await Location.getCurrentPositionAsync({});
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${APPLICATION_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((result) => {
          if (cancelled) return;
          setWeather({
            temp: String(result.main.temp),
            desc: result.weather[0].main,
            icon: result.weather[0].icon,
            name: result.name,
          });
          // 날씨를 갱신하는 시점에 내 위치에 육망성을 그림
          setStar(makeHexagram({ latitude: coords.latitude, longitude: coords.longitude }));
        })
        .catch((err) => console.error(err));

      // iOS는 followsUserLocation이 동작하므로 Android에서만 직접 카메라를 이동
      if (Platform.OS !== "android" || cancelled) {
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
      {weather.icon ? (
        <>
          <Text>City: {weather.name}</Text>
          <Text>Temperature: {weather.temp} °C</Text>
          <Text>Description: {weather.desc}</Text>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png` }}
            style={{ width: 50, height: 50 }}
            accessibilityLabel="Weather icon"
          />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
      <MapView
        ref={mapRef}
        style={styles.mapView}
        showsUserLocation
        followsUserLocation
      >
        {star.map((triangle, i) => (
          <Polygon
            key={i}
            coordinates={triangle}
            strokeColor="gold"
            strokeWidth={4}
            fillColor="rgba(255, 215, 0, 0.25)"
          />
        ))}
      </MapView>
    </View>
  );
}
