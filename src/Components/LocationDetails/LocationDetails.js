import React from 'react';
import './LocationDetails.css'
import { useParams } from 'react-router';
import fakeData from '../../fakeData/locations'
import IndividualLocations from '../IndividualLocations/IndividualLocations';
const LocationDetails = () => {
 const{locationName}=useParams();
 const loc=fakeData.find(loc=>loc.name===locationName);
 
 return (
  <div className="details">
     <IndividualLocations location={loc}></IndividualLocations>
  </div>
 );
};

export default LocationDetails;