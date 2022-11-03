import React from 'react'
import {Row,Col} from 'react-bootstrap'

function Banner() {
  return (
    <div style={{
       background:' RGB(229,231,232) '
    }}><Row>
    <Col className="p-4"> 
    
    <img  src='images/banner/banner1.jpeg'/>
    
    </Col>
    <Col className='pt-4 pb-4'>
    <img src='images/banner/banner2.jpeg'/>
    </Col>
    <Col className="p-4">
    <img src='images/banner/banner3.jpeg'/>
    </Col>
  </Row></div>
  )
}

export default Banner