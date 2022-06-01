import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

function Home({theme,setTheme}) {
  return (
    <>
        <Navbar theme = {theme} setTheme= {setTheme}/>
        <HomePage>
            <Title>
                <h1>Travel.io</h1>
                <h2>Travel with smile</h2>
            </Title>
            <Search style = {theme ? {background: "rgba(0,0,0,0.7)"} :{background: "rgba(0,0,0,1)"}}>
                  <input style={{flex: 1}} type="text" placeholder='Destination'/>
                  <input type="text" placeholder='Price Limit'/>
                  <input type="date" placeholder='Check-in-date'/>
                  <input type="date" placeholder='Check-out-date'/>
                  <button >Search</button>
            </Search>
        </HomePage>
    </>
  )
}

export default Home

 
const HomePage = styled.div`
  background-image: url("./images/homeHero.jpg"); 
  background-position: center;
  background-size: cover; 
  background-repeat: repeat; 
  height: calc(100vh - 80px);
  display: flex;
  
  justify-content: center;
`

const Search = styled.div`
    height: 70px;
    width: 60vw;
    
    display: flex;
    position: fixed;
    bottom: 70px;
    border-radius: 50px;
    padding: 10px 20px;
    align-items: center;
    gap: 20px;
    
    button {
      width: 150px;
      height: 35px;
      padding: 0 10px;
      border-radius: 50px;
      background: orange;
      color: #fff;
      border: none;
      cursor: pointer;
    }

    input {
      height: 30px;
      padding: 0 10px;
      border-radius: 50px;

    }

`

const Title = styled.div`
    color: #fff;
    padding: 50px;
    
    display: flex;
    flex-direction: column;
    align-items: center;


    h1 {
      font-family: Cursive;
      letter-spacing: 20px;
      color: orange;
      font-weight: 600;
    }
    h2 {
      font-family: Cursive;
      letter-spacing: 20px;
      
    }
    
`
