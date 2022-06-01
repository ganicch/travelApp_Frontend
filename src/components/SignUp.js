import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { NavLink as Link } from 'react-router-dom'



function SignUp({ theme, setTheme }) {
  const [person, setPerson] = useState(true)

  const redirect = () => {
    window.location.replace('/')
  }

  return (
    <>
      <SignUpPage>
        <Blur style={theme ? null : {background: "rgba(0,0,0,0.8)"}}>
          <Form style={theme ? {background: "rgba(0,0,0,0.5)"} : {background: "rgba(0,0,0,0.6)"}}>
            <h1 style={{margin: "auto",color: "orange"}}>Travel.io</h1>
            <h2 style={{ color: "#fff", marginBottom: "10px" }}>Sign Up</h2>

            <BtnGroup>
              <button onClick={() => setPerson(true)}>Person</button>
              <button onClick={() => setPerson(false)}>Company</button>
            </BtnGroup>

            {person ?
              <SignUpForm>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Last Name' />
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='E-mail' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
                <BtnGroup>
                  <button onClick={redirect}>Sign Up</button>

                  <Link to='/login' activeStyle>
                        <a href='/login'>Login</a>
                  </Link>
                  {theme ? <FontAwesomeIcon style={{ color: "#fff", cursor: "pointer" }} onClick={() => { setTheme(!theme) }} icon={faMoon} />
                    :
                    <FontAwesomeIcon style={{ color: "#fff", cursor: "pointer" }} onClick={() => { setTheme(!theme) }} icon={faSun} />
                  }
                </BtnGroup>
              </SignUpForm>
              :
              <SignUpForm>
                <input type="text" placeholder='Company Name' />
                <input type="number" placeholder='ID' />
                <input type="email" placeholder='E-mail' />
                <input type="date" />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
                <BtnGroup>
                  <button onClick={redirect}>Sign Up</button>
                  <Link to='/login' activeStyle>
                        <a href='/login'>Login</a>
                  </Link>
                  {theme ? <FontAwesomeIcon style={{ color: "#fff", cursor: "pointer" }} onClick={() => { setTheme(!theme) }} icon={faMoon} />
                    :
                    <FontAwesomeIcon style={{ color: "#fff", cursor: "pointer" }} onClick={() => { setTheme(!theme) }} icon={faSun} />
                  }
                </BtnGroup>
              </SignUpForm>}
              
          </Form>
        </Blur>
      </SignUpPage>
    </>
  )
}

export default SignUp

/* Ovdje treba staviti sliku background.jpg */
export const SignUpPage = styled.div`            
  background-image: url("./images/background.jpg"); 
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover; 
  height:100vh;
  
`

export const Blur = styled.div`            
  
  height:100vh;
  display: flex;
  align-items: center;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  padding: 50px 50px 30px 50px;
  width: 20vw;
  margin: auto;
  

  input {
    padding: 3px 10px;
    border-radius: 10px;
  }

  button {
    padding: 3px 10px;
    border-radius: 10px;
    width: 5vw;
    cursor: pointer;
  }
`
export const BtnGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  a {
      text-decoration: none;
      color: #fff;
      flex: 1;
  }
`
export const SignUpForm = styled.div`            
  display: flex;
  flex-direction: column;
  gap:10px;
`