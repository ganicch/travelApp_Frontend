import React from 'react'
import Navbar from './Navbar'
import {Card,CardBody,AllCards,Sve} from './MyTravels'
import { NavLink as Link } from 'react-router-dom'


function PlannedTrips({theme,setTheme}) {
  const dark = {
    background: "rgba(255,255,255,0.9)",
    color: "#000"
  }
  const light = {
    background: "rgba(0,0,0,0.2)",
    color: "#000"
  }

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Sve style={theme ? { background: "#F0FFFF" } : { background: "#000" }}>
        <h1 style={{ color: "orange" }}>My Travels</h1>
        <hr />
        <AllCards>
        
          <Link to='/travel' activeStyle>
            <Card style={theme ? light : dark} >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEsIP__cqPuMIWQyfIAa2Ouq2PSTaXjCNRUezWF1Ur9Q33ZbMWaANmjrp-0a9Y6vy3Ks&usqp=CAU" alt="" />
              <CardBody>
                <h5>Card title</h5>
                <p>This card has supporting text below as a natural lead-in to additional content.</p>
              </CardBody>
            </Card>
          </Link>



          <Card style={theme ? light : dark}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEsIP__cqPuMIWQyfIAa2Ouq2PSTaXjCNRUezWF1Ur9Q33ZbMWaANmjrp-0a9Y6vy3Ks&usqp=CAU" alt="" />
            <CardBody>
              <h5>Card title</h5>
              <p>This card has supporting text below as a natural lead-in to additional content.</p>
            </CardBody>
          </Card>
          <Card style={theme ? light : dark}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEsIP__cqPuMIWQyfIAa2Ouq2PSTaXjCNRUezWF1Ur9Q33ZbMWaANmjrp-0a9Y6vy3Ks&usqp=CAU" alt="" />
            <CardBody>
              <h5>Card title</h5>
              <p>This card has supporting text below as a natural lead-in to additional content.</p>
            </CardBody>
          </Card>
          <Card style={theme ? light : dark}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEsIP__cqPuMIWQyfIAa2Ouq2PSTaXjCNRUezWF1Ur9Q33ZbMWaANmjrp-0a9Y6vy3Ks&usqp=CAU" alt="" />
            <CardBody>
              <h5>Card title</h5>
              <p>This card has supporting text below as a natural lead-in to additional content.</p>
            </CardBody>
          </Card>
          
        </AllCards>
      </Sve>
    </>
  )
}

export default PlannedTrips

