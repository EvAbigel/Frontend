import { useEffect, useState } from 'react';
import Places from './Places.jsx';
 
export default function AvailablePlaces({ onSelectPlace }) {
  const [isFeching, setIsFeching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
 
 
  useEffect(() => {
    async function getPlaces(){
      setIsFeching(true)
      const response = await fetch('http://localhost:3000/places')
      const resData = await response.json()
      setAvailablePlaces(resData.places);
      setIsFeching(false);
    }
 
    getPlaces();
  } ,[]);

 
  // setIsFeching(true)
    // fetch('http://localhost:3000/places')
    // .then(response => response.json())
    // .then(resdata => {
    //   setAvailablePlaces(resdata.places);
    //   setIsFeching(false);
    // })
 
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading = {isFeching}
      loadingText = "The places data is loading..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}