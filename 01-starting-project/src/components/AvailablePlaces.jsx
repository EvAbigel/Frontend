import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './error.jsx';
 
export default function AvailablePlaces({ onSelectPlace }) {
  const [isFeching, setIsFeching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
 
  useEffect(() => {
    async function getPlaces(){
      setIsFeching(true)
      try{
        const response = await fetch('http://localhost:3000/places');
        if(!response.ok){
          throw response.statusText;
        }

        const resData = await response.json()
        setAvailablePlaces(resData.places);
      }
      catch(error){
        setError(error);
      }
 
      setIsFeching(false);
    }
 
    getPlaces();
  } ,[]);

  function handleConfirm(){
    setError(null);
  }

  if(error){
    return <Error title={"An error occured!"} message={error} onConfirm={handleConfirm}/>
  }

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