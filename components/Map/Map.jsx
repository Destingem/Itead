import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import styles from "./Map.module.css"
const Map = () => {
  return (
    <MapContainer
      center={[49.78579030057748, 15.29432513473377]}
      zoom={7}
      scrollWheelZoom={false}
      
      className={styles.map}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGVzdGluZyIsImEiOiJjbDBoNzM5bnQwMnBlM3FvZ29uM3QxMHFhIn0.3cPfA6iJTulOMUYMld-ipQ`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />
      <Marker position={[50.0380945, 15.7701927]} draggable={true} animate={true}>
        <Popup>Sídlo společnosti, Pardubice</Popup>
      </Marker>
      <Marker position={[50.0755916, 14.4379635]} draggable={true} animate={true}>
        <Popup>Pobočka společnosti, Praha</Popup>
      </Marker>
      <Marker position={[49.6040921, 17.2413196]} draggable={true} animate={true}>
        <Popup>Pobočka společnosti, Olomouc</Popup>
      </Marker>
      <Marker position={[49.2678979, 13.9198834]} draggable={true} animate={true}>
        <Popup>Pobočka společnosti, Strakonice</Popup>
      </Marker>
      <Marker position={[49.1968173, 16.6187722]} draggable={true} animate={true}>
        <Popup>Pobočka společnosti, Brno</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
