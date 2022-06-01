import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { NavLink as Link } from 'react-router-dom'


function MyTravels({ theme, setTheme }) {

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
          <Link to='/travel' activeStyle>
            <Card style={theme ? light : dark} >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEsIP__cqPuMIWQyfIAa2Ouq2PSTaXjCNRUezWF1Ur9Q33ZbMWaANmjrp-0a9Y6vy3Ks&usqp=CAU" alt="" />
              <CardBody>
                <h5>Card title</h5>
                <p>This card has supporting text below as a natural lead-in to additional content.</p>
              </CardBody>
            </Card>
          </Link>
          <Link to='/travel' activeStyle>
            <Card style={theme ? light : dark} >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEsIP__cqPuMIWQyfIAa2Ouq2PSTaXjCNRUezWF1Ur9Q33ZbMWaANmjrp-0a9Y6vy3Ks&usqp=CAU" alt="" />
              <CardBody>
                <h5>Card title</h5>
                <p>This card has supporting text below as a natural lead-in to additional content.</p>
              </CardBody>
            </Card>
          </Link>
          <Link to='/travel' activeStyle>
            <Card style={theme ? light : dark} >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEsIP__cqPuMIWQyfIAa2Ouq2PSTaXjCNRUezWF1Ur9Q33ZbMWaANmjrp-0a9Y6vy3Ks&usqp=CAU" alt="" />
              <CardBody>
                <h5>Card title</h5>
                <p>This card has supporting text below as a natural lead-in to additional content.</p>
              </CardBody>
            </Card>
          </Link>
          <Link to='/travel' activeStyle>
            <Card style={theme ? light : dark} >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEsIP__cqPuMIWQyfIAa2Ouq2PSTaXjCNRUezWF1Ur9Q33ZbMWaANmjrp-0a9Y6vy3Ks&usqp=CAU" alt="" />
              <CardBody>
                <h5>Card title</h5>
                <p>This card has supporting text below as a natural lead-in to additional content.</p>
              </CardBody>
            </Card>
          </Link>
          <Link to='/travel' activeStyle>
            <Card style={theme ? light : dark} >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEsIP__cqPuMIWQyfIAa2Ouq2PSTaXjCNRUezWF1Ur9Q33ZbMWaANmjrp-0a9Y6vy3Ks&usqp=CAU" alt="" />
              <CardBody>
                <h5>Card title</h5>
                <p>This card has supporting text below as a natural lead-in to additional content.</p>
              </CardBody>
            </Card>
          </Link>
          <Link to='/travel' activeStyle>
            <Card style={theme ? light : dark} >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEsIP__cqPuMIWQyfIAa2Ouq2PSTaXjCNRUezWF1Ur9Q33ZbMWaANmjrp-0a9Y6vy3Ks&usqp=CAU" alt="" />
              <CardBody>
                <h5>Card title</h5>
                <p>This card has supporting text below as a natural lead-in to additional content.</p>
              </CardBody>
            </Card>
          </Link>
        </AllCards>
      </Sve>
    </>
  )
}

export default MyTravels



export const Sve = styled.div`
    padding: 10vh 8.5vw;
    height: calc( 100vh - 80px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    
`
export const Card = styled.div`
    
    height: 280px;
    width: 200px;
    cursor: pointer;
    overflow: hidden;
    z-index: 1;

    img {
      width: 100%;
      height: 50%;
    }

    animation: myAnim 1s ease 0s 1 normal forwards;
`
export const CardBody = styled.div`
    padding: 10px;
`
export const AllCards = styled.div`
    display: flex;
    gap: 10px;
    width: 90vw;
    overflow: hidden;
    flex-wrap: wrap;
    align-items: center;
    
    @keyframes myAnim {
      0% {
        transform: scale(0);
      }
    
      100% {
        transform: scale(1);
      }
    }
    
`