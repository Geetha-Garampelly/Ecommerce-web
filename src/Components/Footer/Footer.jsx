import React from 'react'
import '../Footer/footer.css'

import logo from "../../assets/images/eco-logo.png"


import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'



const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className='logo'>
              <div>
                <h1 className='text-white'>ComfyMart</h1>
              </div>
            </div>
            <p className='footer_text mt-3'>
              Modern interior design is shaped by a heritage of
              clean lines, geometric form, clear spaces, function and storage.
              Below we explore some of the concepts behind modern design style,
              how to distinguish each approach and how to create the look in your own home.</p>
          </Col>
          <Col lg='3'>
            <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Top Categories</h4>
            
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Mobile Phones</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Modern Sofa</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Arm Chair</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Smart Watches</Link>
              </ListGroupItem>
            </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
          <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border- d-flex align-items-center gap-2'>
                <Link to='/login'>Login</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='#'>Private Policy</Link>
              </ListGroupItem>
            </ListGroup>
            </div>
          </Col>

          <Col lg='3'>
          <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Contact</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>Raghuma Towers, Hitch City Rd, Phase 2, Kavuri Hills, Madhapur, Hyedarbad</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <span><i class="ri-phone-line"></i></span>
                <p>040-1234567890</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <span><i class="ri-mail-line"></i></span>
                <p>test1234@comfymart.com</p>
              </ListGroupItem>
            </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className='copy_right'>Copyright @{year} developed by G123007. All rights reserved. </p>
          </Col>
        </Row>
      </Container>

    </footer>)
}

export default Footer