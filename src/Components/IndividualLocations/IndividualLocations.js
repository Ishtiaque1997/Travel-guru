import React ,{useState}from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './IndividualLoactions.css'
import { Link, useHistory } from 'react-router-dom';
import Final from '../Final/Final';

const IndividualLocations = (props) => {
  const[selectedDate,setSelectedDate]=useState(null);
  const {img,name,description}=props.location;
  const history=useHistory();
  const handleStartBooking=()=>{
     history.push('/final')
  }
  const [buttonClicked,setButtonClicked]=useState(false);
  const formStyle={
    backgroundColor:'white',
    borderRadius:'20px',
    width:'300px',
    height:'350px',
    borderColor:'orange'
  }
  const cardStyle={
    marginRight:'20px',
    cursor:'pointer',
    borderRadius:'23px',
    borderColor:'orange'
  }
 
  return (
    <div className="place-container">
      <div className="locationCard" >

        {props.showImage ?
          <Card onClick={()=>props.cardClick(props.location)}  style={cardStyle}>
          <Card.Img  style={{height:'450px',width:'350px'}}src={img}alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text style={{fontSize:'30px',marginLeft:'12px',fontStyle:'Arial Narrow, sans-serif'}} > <Link to={"/location/"+name}>{name}</Link></Card.Text>
          </Card.ImgOverlay>
          </Card>:

          <div className="infos">
             <div className="explanation">
                <h1>{name}</h1>
                <br/>
                <p>{description}</p> 
              </div>
              <div className="form" >
                <Form style={formStyle}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{marginLeft:'20px'}}>Origin</Form.Label>
                  <Form.Control type="email" style={{backgroundColor:'#C0C0C0',width:'260px',marginLeft:'25px'}} placeholder="Enter starting point" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                   <Form.Label style={{marginLeft:'20px'}}>Destination</Form.Label>
                   <Form.Control style={{backgroundColor:'#C0C0C0',width:'260px',marginLeft:'25px'}} type="password" placeholder="Ending point" />
                 </Form.Group>
                 <p style={{marginLeft:'20px'}}>From  <DatePicker selected={selectedDate}onChange={date=>setSelectedDate(date)}
                 dateFormat="dd/MM/yyyy"
                 minDate={new Date()}/></p>
                 <p style={{marginLeft:'20px'}}><span style={{marginRight:'20px'}}>To</span>  <DatePicker selected={selectedDate}onChange={date=>setSelectedDate(date)}
                 dateFormat="dd/MM/yyyy"/></p>
                 <br/>
                 <Button onClick={handleStartBooking
                
                }style={{width:'200px',marginLeft:'45px'}} variant="warning" type="submit">
                   Start booking
                 </Button>
            </Form>
        </div>
       </div>     
}
      </div>
    </div>  
  );
};

export default IndividualLocations;