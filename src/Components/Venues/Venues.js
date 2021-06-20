import React ,{useState}from 'react'; 
import './Venues.css'
import fakeData from '../../fakeData/locations';
import IndividualLocations from '../IndividualLocations/IndividualLocations';

const Venues = () => {
  const first3=fakeData.slice(0,3);
  const [locations,setLocations]=useState(first3);
   const cardClick=(location)=>{console.log('khela',location)};

 return (
  <div className="venues">   
     {
       locations.map(location=><IndividualLocations
        key={location.id}
        showImage={true}
        cardClick={cardClick}
        location={location}></IndividualLocations>)
     }
  </div>
 );
};

export default Venues;