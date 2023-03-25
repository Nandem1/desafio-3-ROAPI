import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

function Home() {
  return (
    <div>
      <Container className='mb-5'>
        <Row lg={2} md={2} xs={1} sm={1}>
          <Col className='mt-5'>
            <div className='d-flex justify-content-center align-items-center'>
              <iframe className='border shadow video-home'
                src="https://www.youtube.com/embed/07tpyq42DzU?autoplay=1&mute=1&controls=0">
              </iframe>
            </div>
          </Col>
          <Col className='mt-5'>
            <h1>Ragnarok Online Monsters Database</h1>
            <p className='text-wrap fs-5 mb-5'>To search for a monster information please click the monster section in the navigation :D</p>
            <p>Made by Nande with ❤</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home