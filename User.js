import Card from 'react-bootstrap/Card';

function User (props){

 
    return(
<Card style={{ width: '18rem' ,margin:'10px auto' }}>
  <Card.Body>
    <Card.Title>{props.name} </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{props.phone}</Card.Subtitle>
    <Card.Text>
      {props.address}
    </Card.Text>
   
  </Card.Body>
</Card>

   );
}

export default User;