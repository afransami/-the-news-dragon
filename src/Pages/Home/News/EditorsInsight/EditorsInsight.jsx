import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img1 from '../../../../assets/1.png'
import img2 from '../../../../assets/2.png'
import img3 from '../../../../assets/3.png'
import { useLoaderData } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import Category from "../../Category/Category";


const EditorsInsight = () => {
    const news = useLoaderData();
    const {
        _id,
        title,
        details,
        image_url,
        author,
        rating,
        total_view,
        category_id,
      } = news;
  return (
    <Row xs={1} md={2} lg={3} className="g-4 mt-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>            
          </Card.Body>
          <div className="d-flex justify-content-between me-5">
          <p>Sport</p>
          <p>
            <FaCalendarAlt /> {moment().format("MMM D, YYYY")}
          </p>
        </div>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>            
          </Card.Body>
          <div className="d-flex justify-content-between me-5">
          <p>Sport</p>
          <p>
            <FaCalendarAlt /> {moment().format("MMM D, YYYY")}
          </p>
        </div>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>            
          </Card.Body>
          <div className="d-flex justify-content-between me-5">
          <p>Sport</p>
          <p>
            <FaCalendarAlt /> {moment().format("MMM D, YYYY")}
          </p>
        </div>
        </Card>
      </Col>
    </Row>
  );
};

export default EditorsInsight;
