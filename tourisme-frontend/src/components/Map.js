import { MapContainer, TileLayer } from "react-leaflet"

const Map = ({ site }) => {             
    return (
        <div class="w-full aspect-[1.9851] mt-[3.385vw]">
            <MapContainer style={{width:"100%", height:"100%" , zIndex: 0}} center={[site.position.lat, site.position.log]} zoom={site.position.zoom} scrollWheelZoom={true}>
                <TileLayer
                     attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                     url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERNAME}/${process.env.REACT_APP_MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`}
                />
            </MapContainer>
        </div>

    )
}
export default Map