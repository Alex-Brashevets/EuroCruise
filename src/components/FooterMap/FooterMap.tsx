import { MapContainer, TileLayer , Marker} from "react-leaflet";
import { icon } from "leaflet";

const ICON = icon({
    iconUrl: "/marker.png",
    iconSize: [32, 32],
  })


  const FooterMap = () => {
    return (
        <MapContainer id="Office" center={[52.175965, 23.667446]} zoom={16} scrollWheelZoom={false} style={matches ? {height: '240px', width: '250px', borderRadius: '10px', marginTop: '25px'} : {height: '240px', width:  '410px', borderRadius: '10px', marginTop: '25px'}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={ICON} position={[52.175965, 23.667446]}/>
    </MapContainer>
    )
  }

  export default FooterMap;