import {MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';  


const getIcon = (_iconSize) => {
    return L.icon({
        iconUrl: require('../assets/clipart1517460.png'),
        iconSize: [_iconSize],
    })
}

const center = [14.556586, 121.023415]

const WorldMap = ({data}) => {
    console.log(data)
    return (
        <MapContainer 
            className="h-full w-full"
            center={data ? data.data[0] : center} 
            zoom={12}
            scrollWheelZoom={true}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                subdomains= 'abcd'
	            maxZoom= '20'
            />
            {data ? data.data.map((location,index) => {
                return (
                    <Marker 
                        position={location} 
                        icon={getIcon(20)} 
                        key={index}
                    >
                        <Tooltip>{data.labels[index]}</Tooltip>
                    </Marker>
                )
            }) : ''}
        </MapContainer>
    )
}

export default WorldMap;