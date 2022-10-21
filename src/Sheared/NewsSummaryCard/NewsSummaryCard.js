import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { author, details, image_url,rating, thumbnail_url, published_date, title, total_view, _id } = news;
  // console.log(news);
  return (
    <Card className=" mb-3">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
          <Image roundedCircle
            src={author.img}
            style={{ height: '50px' }}>
          </Image>
          <div className='ms-2 pb-0'>
            <p className='mb-0'>{author.name} </p>
            <p>{author.published_date} </p>
          </div>
        </div>
        <div>
          < FaRegBookmark className='me-2' />
          < FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Img variant='top' src={image_url}
        ></Card.Img>
        {/* <Image
          src={thumbnail_url}
          ></Image> */}
        <Card.Text>
          {
            details.length > 250 ?
              <p>{details.slice(0, 250) + '....'} <Link to={`/news/${_id}`}>Read More</Link></p>
              :
              <p>{details}</p>
          }
        </Card.Text>

      </Card.Body>
      <Card.Footer className="text-muted">
      <div className='d-flex justify-content-between align-items-center'>
      <div className='align-items-center'>
          <FaStar className='me-2'></FaStar>
          <span>{rating.number}</span>
        </div>
        <div className='align-items-center'>
          <FaEye className='me-2'> </FaEye>
          {total_view}
        </div>
      </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;