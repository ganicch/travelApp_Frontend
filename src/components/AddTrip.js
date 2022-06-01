import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


function AddTrip({theme,setTheme}) {
  return (
    <>
        <Navbar theme = {theme} setTheme = {setTheme}/>
        <All style={theme ? {background: "#F0FFFF"} : {background: "#000"}}>
            <Form>
                <h2 style={!theme ? {color: "#fff"}: null}>ADD A NEW TRIP</h2>
                <input type="text" placeholder='Name / Title'/>
                <input type="text" placeholder='Country'/>
                <input type="text" placeholder='Price'/>
                <input type="text" placeholder='Date'/>
                <label style={!theme ? {color: "#fff"}: null}>Select a image:</label>
                <input type="file" style={!theme ? {color: "#fff"}: null}/>
                <input type="textarea" placeholder='Description'/>
                <button>Add Trip</button>
            </Form>
        </All>
    </>
  )
}

export default AddTrip

export const All = styled.div`
    height: calc( 100vh - 80px);
    padding: 5vw 20vw;
    
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 20px;

    
    input {
      width: 400px;
      height: 20px;
      margin: auto;
      padding: 0 10px;
    }
    button {
      width: 200px;
    }
`