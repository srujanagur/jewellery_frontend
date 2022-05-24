import * as React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='homesection'>
        <CardGroup className='cardgroup'>
          <Card className='eachCard'>
            <Card.Img variant="top" src="./assets/ear rings.jpg" />
            <Card.Body>
              <Card.Title>Ear Rings</Card.Title>
              <Card.Text>
                A fun pair of earrings is
                basically the finishing touch
                to any outfit; a nice watch is both
                practical and decorative
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link className='cartbtn' to={"/products"} >View More</Link>
            </Card.Footer>
          </Card>
          <Card className='eachCard'>
            <Card.Img variant="top" src="./assets/jewellery.jpg" />
            <Card.Body>
              <Card.Title>Jewellery Sets</Card.Title>
              <Card.Text>
                Nice Jewellery Sets and collections
                and it suits any type of occassions.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link className='cartbtn' to={"/products"} >View More</Link>
            </Card.Footer>
          </Card>
          <Card className='eachCard'>
            <Card.Img variant="top" src="./assets/bangles.jpg" />
            <Card.Body>
              <Card.Title>Bangles</Card.Title>
              <Card.Text>
                Nice collection of Bangles.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link className='cartbtn' to={"/products"} >View More</Link>
            </Card.Footer>
          </Card>
          <Card className='eachCard'>
            <Card.Img variant="top" src="./assets/sarees.jpg" />
            <Card.Body>
              <Card.Title>Sarees</Card.Title>
              <Card.Text>
                Nice saree collections
                and it suits any type of occassions.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link className='cartbtn' to={"/products"} >View More</Link>
            </Card.Footer>
          </Card>
          <Card className='eachCard'>
            <Card.Img variant="top" src="./assets/dresses.jpg" />
            <Card.Body>
              <Card.Title>Dresses</Card.Title>
              <Card.Text>
                Nice Dresses collections
                and it suits any type of occassions.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link className='cartbtn' to={"/products"} >View More</Link>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

export default Home;
