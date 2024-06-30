import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import styles from './TrackingPage.module.css';
import axios from 'axios';
import { Input } from '../../components/ui/Inputs/Input/Input';
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { icon } from 'leaflet';
import L from 'leaflet';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
const city = [
  {
    "city": "Tokyo",
    "city_ascii": "Tokyo",
    "lat": "56.733436",
    "lng": "39.819050",
    "country": "Japan",
    "iso2": "JP",
    "iso3": "JPN",
    "admin_name": "Tōkyō",
    "capital": "primary",
    "population": "37977000",
    "id": "1392685764"
  },
  {
    "city": "Jakarta",
    "city_ascii": "Jakarta",
    "lat": "53.099294",
    "lng": "28.209741",
    "country": "Indonesia",
    "iso2": "ID",
    "iso3": "IDN",
    "admin_name": "Jakarta",
    "capital": "primary",
    "population": "34540000",
    "id": "1360771077"
  },
]

const ICON = icon({
  iconUrl: "/map-marker.svg",
  iconSize: [32, 32],
})

interface AddLocationMarkerProps  {
  position: any
}

const LocationMarker = ({position}:AddLocationMarkerProps) => {
  const map = useMapEvents({
    click(e) {
      map.flyTo(position.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
      <Marker icon={ICON} position={position} />
  )
}

interface RoutingProps {
  sourceCity: any,
  destinationCity: any
}

const Routing = ({ sourceCity, destinationCity }: RoutingProps) => {
  const map = useMap();
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!map) return;

    if (sourceCity?.lat !== undefined && destinationCity?.lat !== undefined) {
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(parseFloat(sourceCity.lat), parseFloat(sourceCity.lng)),
          L.latLng(parseFloat(destinationCity.lat), parseFloat(destinationCity.lng))
        ],
        routeWhileDragging: false,
        show: true,
        showAlternatives: false,
        addWaypoints: false,
        fitSelectedRoutes: true,
      }).addTo(map);


      mapRef.current = map;
      map.on('click', (e) => {
        e.originalEvent.stopPropagation();
        e.originalEvent.preventDefault();
      });

      return () => {
        map.removeControl(routingControl);
        if (mapRef.current) {
          mapRef.current.off('click');
        }
        return undefined;
      };
    }
  }, [map, sourceCity, destinationCity]);

  return null;
};


const MapForm = (

) => {

  return (
      <div className={styles.container}>

        <MapContainer   dragging={true}
                        touchZoom={false}
                        doubleClickZoom={false}
                        boxZoom={false} center={[53.9045398, 27.5615244]}  zoom={6} scrollWheelZoom={false} style={{height: '440px', width: '610px', borderRadius: '10px', marginTop: '5px'}}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker position={{lat: 53.9045, lng: 27.5615}}/>
          <Routing sourceCity={city[0]} destinationCity={city[1]}/>
        </MapContainer>
      </div>

  );
};





const TrackingPage = () => {
  const [error, setError] = useState()
  const [api, setApi] = useState('')
  const [id, setId] = useState('')
  const fetchData = async (key: string, id: string) => {
    try {
      return await axios.get('https://mapon.com/api/v1/routeplanning_routes/get.json', {
        params: {
          key: key,
          id: Number(id)
        }

      })
    } catch (error) {
    }
  }

  const SubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(api, id)
    console.log(fetchData(api, id))
  }

  return (
      <div className={styles.page}>
        <div className={styles.info }>
          <h1>
            Отслеживайте местоположение груза
          </h1>
          <h3>
            Сервис по отслеживанию местоположения груза. Благодаря сервису отслеживания грузов, Вы можете в реальном времени узнать, где находится Ваш груз, и ориентировочную дату прибытия груза.
          </h3>
        </div>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={SubmitHandler}>
            <h3>  Отследить свой груз</h3>
            <label htmlFor="">Введите ключ:</label>
            <Input placeholder='Ключ' onChange={(e: ChangeEvent<HTMLInputElement>)=>setApi(e.target.value)}/>
            <label htmlFor="">Введите номер:</label>
            <Input placeholder='Номер' onChange={(e: ChangeEvent<HTMLInputElement>)=>setId(e.target.value)}/>
            <button className={styles.button} type='submit'> Отслеживать</button>
          </form>
          <MapForm/>
        </div>

      </div>
  )
}

export default TrackingPage;