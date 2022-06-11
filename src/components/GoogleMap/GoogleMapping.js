/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState , useCallback, useRef} from 'react'
import { GoogleMap, useJsApiLoader, Marker ,InfoWindow,} from '@react-google-maps/api';
import { Skeleton } from '@mui/material';
// import { width } from '@mui/system';
import house1 from '../../images/unsplash_sZ9F_XkGJfI.png'
// import house2 from '../../images/unsplash_qN-T-pY17Vc.png'
import './GoogleMapping.css'
import { Icon } from '@iconify/react';

const center = {lat: -36.848461, lng:174.763336}

const GoogleMapping = () => {
 const [markers, setMarkers] = useState([]);
 const [selected, setSelected] = useState(null);

 const onMapClick = useCallback((event) => {
  setMarkers(current => [...current, {
    lat:event.latLng.lat(),
    lng:event.latLng.lng(),
    time: new Date(),
  }])
}, []); 

const mapRef =  useRef();
const onMapLoad = useCallback((map) => {
  mapRef.current = map;
});

  const { isLoaded } =useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCBeAXhqR4l9OtiAWEJjy3NbSIVUhToeow',
  })

  if (!isLoaded) {
   return <Skeleton/>
  } 

  
    
 

  return (
    <>
      <GoogleMap
       center={center} 
       zoom={11} 
       mapContainerStyle={ {width: '100%', height:'100%'}}
       onClick={onMapClick}
       onLoad={onMapLoad}
       >
        {
          markers.map((marker) => 
          <Marker
          key={marker.time.toISOString()}
          position={{lat:marker.lat, lng: marker.lng}}
          icon={{
            url:'/Group 73.svg',
            scaledSize: new window.google.maps.Size(30,30),
            origin: new window.google.maps.Point(0,0),
            anchor: new window.google.maps.Point(15,15)
          }}
             onClick={() => {
               setSelected(marker);
             }}
          />)
        }
         {
           selected ? (
             <InfoWindow position={{lat: selected.lat, lng: selected.lng}}
             onCloseClick={() => {
               setSelected(null);
             }}
             >
               <div className="info-window">
                <div className="image-sample">
                  <img src={house1} alt="house" width={200} />
                </div>
                <div className="house-information-container">
                  <div className="information-product">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <div className="img-wrapper">
                    <Icon icon="ion:bed-sharp" color="black" />
                    <p> 2 </p>
                    <Icon className='icon-image' icon="jam:bathtub-f" color="black" width={18} height={19} />
                    <p> 1</p>
                  </div>
                  <div className="view-button-container">
                    <div className="view-button1">$536 Weekly</div>
                    <div className="view-button2">View details</div>
                  </div>
                </div>
              </div>
             </InfoWindow>
           ) : null
         }

      </GoogleMap>
    </>
  )
}

export default GoogleMapping