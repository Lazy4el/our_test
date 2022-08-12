import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapData = {
  center: [55.83026, 49.044834],
  zoom: 16,
};

const coordinates = [
  [55.83026, 49.044834],
  [55.83026, 49.044834],
];

const YandexMap = () => (
  <YMaps>
    <Map width="100%" height="400px" defaultState={mapData}>
      {coordinates.map((coordinate, index) => (
        <Placemark key={index} geometry={coordinate} />
      ))}
    </Map>
  </YMaps>
);

export default YandexMap;
