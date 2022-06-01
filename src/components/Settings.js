import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

function Settings({theme,setTheme}) {
  const [author,setAuthor] = useState(true);
  let user = true;

  const authorSet = () => {
    setAuthor(!author)
  }

  const light = {
    background: "rgba(0,0,0,0.1)"
  }
  const dark = {
    background: "rgba(0,0,0,0.8)"
  }
  return (
    <>
      <Set >
        <Navbar theme = {theme} setTheme = {setTheme}/>
        <All>
          <UserInfo>
            {user ?
              <Info>
              <In style={theme ? light : dark}>
                <img src='https://icon-library.com/images/username-icon/username-icon-11.jpg' alt="" />
                <Name style={theme ? {borderLeft : "4px solid #000"}:{borderLeft : "4px solid #fff"}}>
                  <div>
                    <h2>Edin</h2>
                    <h2>Ganic</h2>
                    <h3>EdinG123</h3>
                    <h3>edinganic99@gmail.com</h3>
                  </div>
                </Name>
              </In>
              <Change style={theme ? light : dark}>
                <ChangeIn>
                  <label>Change First Name:</label>
                  <input type="number" />
                  <button>Change</button>
                </ChangeIn>
                <button style={{padding:"5px",borderRadius:"10px",border:"1px solid #fff",color:"#fff",background:"transparent",cursor:"pointer"}}
                onClick={authorSet}
                >
                  Author?
                  </button>
                <ChangeIn>
                  <label>Change Last Name:</label>
                  <input type="text" />
                  <button>Change</button>
                </ChangeIn>
              </Change>
            </Info>
              :
              <Info>
                <In style={theme ? light : dark}>
                  <img src='https://icon-library.com/images/username-icon/username-icon-11.jpg' alt="" />
                  <Name style={theme ? {borderLeft : "4px solid #000"}:{borderLeft : "4px solid #fff"}}>
                    <div>
                      <h2>124151</h2>
                      <h2>JAT Company</h2>
                      <h3>jat@gmail.com</h3>
                      <h3>30.07.2000</h3>
                    </div>
                  </Name>
                </In>
                <Change style={theme ? light : dark}>
                  <ChangeIn>
                    <label>Change ID:</label>
                    <input type="number" />
                    <button>Change</button>
                  </ChangeIn>
                  <button style={{padding:"5px",borderRadius:"10px",border:"1px solid #fff",color:"#fff",background:"transparent",cursor:"pointer"}}>Author?</button>
                  <ChangeIn>
                    <label>Change Company Name:</label>
                    <input type="text" />
                    <button>Change</button>
                  </ChangeIn>
                </Change>
              </Info>}
          </UserInfo>
          {author ?
          <About style={theme ? light : dark}>
                  <label>Author name:</label>
                  <h3>Edin Ganic</h3>
                 
                  <label>Author birth date:</label>
                  <h3>30.07.2000</h3>
                  
                  <label>College</label>
                  <h3>Faculty of sciences , IT</h3>

                  <label>Subject</label>
                  <h3>Dynamic web systems</h3>

                  <label>Professor</label>
                  <h3>Adis Alihodzic</h3>   

                  <label>Assistant</label>
                  <h3>Eldina Delalic</h3>  
          </About>
          : null}
        </All>
      </Set>
    </>
  )
}

export default Settings

export const All = styled.div`
    padding: 5vw 20vw;
    background-image: url("./images/settingsBackground.jpg"); 
    background-position: center;
    background-size: cover; 
    background-repeat: repeat; 

`
export const Set = styled.div`
    display: flex;
    flex-direction: column;
`
export const UserInfo = styled.div`
    display: flex;
    
`
export const In = styled.div`
    display: flex;
    width: 100%;
    gap: 5vw;
    align-items: center;
    padding: 30px 50px;
    
    border-radius: 10px;
    

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      
    }
`
export const Change = styled.div`
    display: flex;
    width: 100%;
    gap: 5vw;
    justify-content: space-between;
    align-items: center;
    padding: 30px 50px;
    background: rgba(0,0,0,0.1);
    border-radius: 10px;
    
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5vw;
    align-items: center;
    border-radius: 10px;

`
export const Name = styled.div`
    display: flex;
    gap: 15px;
    margin-right: 10vw;
    border-left : 4px solid #000;
    div {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 7px;
      color: #fff;
    }
`
export const ChangeIn = styled.div`
    display: flex;
    gap: 10px;

    label {
      color: #fff;
    }
    input {
      background: transparent;
      border-radius: 10px;
      border: none;
      color: #fff;
      border-bottom: 2px solid #fff;
      padding: 0 10px;
    }
    button {
      background: transparent;
      color: #fff;
      border-radius: 10px;
      border: none;
      border-bottom: 2px solid #fff;
      cursor: pointer;
    }
    
`

export const About = styled.div`
display: flex;
color: #fff;
margin-top: 50px;
gap: 10px;
flex-direction: column;
align-items: center;
padding: 30px 50px;
background: rgba(0,0,0,0.1);
border-radius: 10px;


h3 {
  margin-bottom: 20px;
}
`