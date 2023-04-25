import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


const Newscard = ({ news }) => {
  const { _id, title, details, image_url, author } = news;

  return (
    <Card className="mb-4">
      <Card.Header>
      <div className="d-flex">
      <Image className="w-25" src={author.img} roundedCircle />
      <div className="d-flex flex-column">
      <h5>{author.name}</h5>
      <>{moment(author.published_date).format("YYYY-MM-D")}</>
      
      </div>
      </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-start">{title}</Card.Title>
        <Card.Text className="text-start">
         <Card.Img className="mb-2" variant="top" src={image_url} />
         {details.lenght > 250 ? <>{details}</> : 
         <>{details.slice (0, 250)}... <Link to = {`/news/${_id}`}>Read More</Link> </>}
         </Card.Text>        
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default Newscard;
