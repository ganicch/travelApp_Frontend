import React, { useState } from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faCheck, faUmbrellaBeach, faPlane, faAnglesDown, faPhone } from '@fortawesome/free-solid-svg-icons'

function Travel({theme,setTheme}) {
    const [book, setBook] = useState(false)

    const light = {
        background: "rgba(0,0,0,0.1)"
    }
    const dark = {
        background: "rgba(255,255,255,0.1)",
        color: "#fff",
        border: "2px solid #fff"
    }
    return (
        <>
            <Navbar theme = {theme} setTheme = {setTheme}/>
            <TravelInfo style={theme ? {background: "#F0FFFF"}:{background: "#000"}}>
                <AboutTravel style={theme ? light : dark}>
                    <img src='./images/sea.jpg' alt=''></img>
                    <AllAbout>
                        <PrimInfo>
                            <h2>Budva</h2>
                            <h4>Montenegro</h4>
                            <p>30.5.2021</p>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishingsoftware like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                        </PrimInfo>
                        <SecInfo>
                            <Phone>
                                <FontAwesomeIcon icon={faPhone} />
                                <h4>062/068-225</h4>
                            </Phone>
                            <Params>
                                <Hotel>
                                    <FontAwesomeIcon icon={faHotel} />
                                    <FontAwesomeIcon icon={faCheck} />
                                </Hotel>
                                <Hotel>
                                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                                    <FontAwesomeIcon icon={faCheck} />
                                </Hotel>
                                <Hotel>
                                    <FontAwesomeIcon icon={faPlane} />
                                    <FontAwesomeIcon icon={faCheck} />
                                </Hotel>
                            </Params>

                            <Price>
                                <h2>350€</h2>
                            </Price>
                            <BookingBtn>
                                <button style={theme ? {color: "#000"} : {color: "#fff"}} onClick={() => { setBook(!book) }}>Book now <br /><FontAwesomeIcon icon={faAnglesDown} /></button>
                            </BookingBtn>
                        </SecInfo>
                    </AllAbout>
                </AboutTravel>
                {book ?
                    <Book style={theme ? light : dark}>
                        <h3>Book your travel</h3>
                        <Inputs>
                            <Input>
                                <label>Adults:</label>
                                <input type="number"></input>
                            </Input>
                            <Input>
                                <label>Hotel category:</label>
                                <select>
                                    <option>1*</option>
                                    <option>2*</option>
                                    <option>3*</option>
                                    <option>4*</option>
                                    <option>5*</option>
                                </select>
                            </Input>
                            <Input>
                                <label>Number of rooms:</label>
                                <input type="number"></input>
                            </Input>
                            <Input>
                                <label>Number of beds:</label>
                                <input type="number"></input>
                            </Input>
                            <Input>
                                <label>Your country:</label>
                                <select>
                                    <option>Bosnia and Herzegovina</option>
                                    <option>Croatia</option>
                                    <option>Serbia</option>
                                    <option>Montenegro</option>
                                    <option>Albania</option>
                                </select>
                            </Input>
                            <Input>
                                <label>Full name:</label>
                                <input type="text"></input>
                            </Input>
                            <Input>
                                <label>Phone number</label>
                                <input type="text"></input>
                            </Input>

                            <button>Book</button>
                        </Inputs>
                    </Book>
                    : null}
            </TravelInfo>
        </>
    )
}

export default Travel

export const TravelInfo = styled.div`            
    padding: 10vh 5vw;
    
    height: 100vh;
    display: flex;
    flex-direction: column;
    
`
export const AboutTravel = styled.div`            
    
    height: 50vh;
    display: flex;
    gap: 20px;

    img {
        height: 100%;
    }
`
export const AllAbout = styled.div`            
    padding: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @keyframes myAnim2 {
        0% {
            opacity: 0;
            transform: translateX(-500px);
        }
    
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes myAnim {
        0% {
            animation-timing-function: ease-in;
            opacity: 1;
            transform: translateY(-45px);
        }
    
        24% {
            opacity: 1;
        }
    
        40% {
            animation-timing-function: ease-in;
            transform: translateY(-24px);
        }
    
        65% {
            animation-timing-function: ease-in;
            transform: translateY(-12px);
        }
    
        82% {
            animation-timing-function: ease-in;
            transform: translateY(-6px);
        }
    
        93% {
            animation-timing-function: ease-in;
            transform: translateY(-4px);
        }
    
        25%,
        55%,
        75%,
        87% {
            animation-timing-function: ease-out;
            transform: translateY(0px);
        }
    
        100% {
            animation-timing-function: ease-out;
            opacity: 1;
            transform: translateY(0px);
        }
    }
    p {
        margin-top 10px;
    }
`
export const Params = styled.div`            
   display: flex;
   gap: 10px;
   margin: 20px 0;
`
export const Hotel = styled.div`            
    display: flex;
    gap: 10px;
    
`
export const Price = styled.div``

export const SecInfo = styled.div``

export const PrimInfo = styled.div``

export const BookingBtn = styled.div`            
   display: flex;
   flex-direction: column;
   justify-content: center;
   animation: myAnim 2s ease 0s 1 normal forwards;
    


   button {
       background: transparent;
       border: none;
       font-size: 15px;
       cursor: pointer

   }
`
export const Phone = styled.div`            
   display: flex;
   gap: 10px;
   margin-top:10px;
`
export const Book = styled.div` 
  
padding: 20px;         
border-top: 2px solid #000;
background: rgba(0,0,0,0.1);
display: flex;
flex-direction: column;

gap: 30px;
animation: myAnim2 1s ease 0s 1 normal forwards;

`
export const Inputs = styled.div`
    display: flex;
    gap: 50px;
    
    flex-wrap: wrap;
    input {
        width: 150px;
        height: 20px;
        padding: 5px;
    }
    select {
        width: 150px;
        height: 35px;
        padding: 5px;
    }
    button {
        width: 150px;
        height: 35px;
        padding: 5px;
        background: gray;
        cursor: pointer;
        color: #fff;
    }

`
export const Input = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    
`