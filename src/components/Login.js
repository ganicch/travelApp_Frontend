import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { NavLink as Link } from 'react-router-dom'

function Login({theme , setTheme}) {
  const [isChecked,setIsChecked] = useState(false)

   const redirect = () => {
    window.location.replace('/')
  }

  return (
    <>  
        <LoginPage>
            <Blur style={theme ? null : {background: "rgba(0,0,0,0.8)"}}>
                <Form style={theme ? {background: "rgba(0,0,0,0.5)"} : {background: "rgba(0,0,0,0.6)"}}>
                    <h2 style={{color:"#fff",marginBottom:"10px"}}>Login</h2>
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='Password'/>
                    <BtnGroup>
                    
                    <button onClick={redirect}>Login</button>
                    <Link to='/signup' activeStyle>
                      <p>Sign up</p>
                    </Link>
                    {theme ? <FontAwesomeIcon style={{ color: "#fff", cursor: "pointer" }} onClick={() => { setTheme(!theme) }} icon={faMoon} />
                        :
                        <FontAwesomeIcon style={{ color: "#fff", cursor: "pointer" }} onClick={() => { setTheme(!theme) }} icon={faSun} />
                    }
                    </BtnGroup>
                    <LostPassword>
                    <label style={{color:"#fff"}}>Zaboravili ste sifru?</label>
                    <input type="checkbox" onChange={() => {
                      if (isChecked) setIsChecked(false);
                      else setIsChecked(true);}
                    }></input>
                    </LostPassword>
                    {isChecked ? 
                    <SendPassword>
                    <input type="text" placeholder='Enter e-mail'/>
                    <button>Send</button>
                    </SendPassword>
                    : null}
                </Form>
            </Blur>
        </LoginPage>
    </>
  )
}

export default Login

/* Ovdje treba staviti sliku background.jpg */
export const LoginPage = styled.div`            
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
    color:#fff;
    flex: 1;
  }
`
export const LostPassword = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`
export const SendPassword = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;

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