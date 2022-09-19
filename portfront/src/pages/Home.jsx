import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Homediv = styled.div`
background-image: url(https://wallpaperaccess.com/full/1271508.jpg);
/* background-image: url(https://images.pling.com/img/00/00/64/96/96/1738390/neon-221.jpg); */
background-size: 1920px, 1080px;
background-repeat: no-repeat;
min-width: 100%;
min-height: 100%;
position: fixed;
color: aquamarine;

h1{
    text-align: center;
}
.yellow{
    text-align: center;
    margin-right: 30px;
}
.red{
    text-align: center;
    color:aquamarine;
    margin-right: 30px;
    text-align: 
}    
/* p {
        -webkit-animation:colorchange 1s infinite;
}

@keyframes color-change {
  0% { color: red; }
  50% { color: blue; }
  100% { color: red; }
} */
h1 {
    -webkit-animation: color-change 5s infinite;
    -moz-animation: color-change 5s infinite;
    -o-animation: color-change 5s infinite;
    -ms-animation: color-change 5s infinite;
    animation: color-change 5s infinite;
}

@-webkit-keyframes color-change {
    0% { color: red; }
    50% { color: blue; }
    100% { color: red; }
}
@-moz-keyframes color-change {
    0% { color: red; }
    50% { color: blue; }
    100% { color: red; }
}
@-ms-keyframes color-change {
    0% { color: red; }
    50% { color: blue; }
    100% { color: red; }
}
@-o-keyframes color-change {
    0% { color: red; }
    50% { color: blue; }
    100% { color: red; }
}
@keyframes color-change {
    0% { color: red; }
    50% { color: blue; }
    100% { color: red; }
}

footer{
    text-align: right;
    margin-right: 30px;
    color: aquamarine
}
h3{
    /* vertical-align: text-bottom; */
    text-align-last: right;
    margin-right: 30px;
    color: aquamarine;
}
a{
    color: green;
}
`


const Home = () => {
  return (
    <Homediv>
        <div>
            <h1>Hi there, My name is Jeremy</h1><h1> Welcome to my website</h1>
            <h5 className='yellow'>I am a software developer</h5>
            <h4 className='red'>I can use many programming languages<br></br>
            and tools like:<br></br>
            HTML<br></br>
            CSS<br></br>
            Python<br></br>
            SQL<br></br>
            Django<br></br>
            JavaScript<br></br>
            Express<br></br>
            Json<br></br>
            MongoDB<br></br>

            </h4>
        </div>
        <footer>
            {/* <br></br>
            <br></br> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3> <a href={"https://github.com/p011uckz/"}>Here is my Github </a> </h3>
            <h3> <a href={"https://www.linkedin.com/in/jeremy-currier/"}>Here is my Linkedin:</a></h3>

            {/* <Link to="https://github.com/p011uckz/">
                Here is my Github:</h3>
            </Link> */}
            {/* // <a target="https://github.com/p011uckz/"></a> */}
            {/* <h3>About Me:</h3> */}
            </footer>
    </Homediv>
  )
}

export default Home