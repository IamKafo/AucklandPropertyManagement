import React from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import { Skeleton } from '@mui/material';

const center = {lat: -36.848461, lng:174.763336}

const GoogleMapping = () => {

  const { isLoaded } =useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCBeAXhqR4l9OtiAWEJjy3NbSIVUhToeow',
  })

  if (!isLoaded) {
   return <Skeleton/>
  } 
    
 

  return (
    <>
      <GoogleMap center={center} zoom={11} mapContainerStyle={ {width: '100%', height:'100%'}}>

      </GoogleMap>
    </>
  )
}

export default GoogleMapping