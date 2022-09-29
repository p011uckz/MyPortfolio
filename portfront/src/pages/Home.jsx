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


.yellow{
    text-align: center;
    margin-right: 30px;
}
.red{
    text-align: center;
    color:aquamarine;
    margin-right: 30px;
    /* text-align:  */
}

h1 {
    text-align: center;
    -webkit-animation: color-change 5s infinite;
    -moz-animation: color-change 5s infinite;
    -o-animation: color-change 5s infinite;
    -ms-animation: color-change 5s infinite;
    animation: color-change 5s infinite;
}

@-webkit-keyframes color-change {
    0% { color: aquamarine; }
    25% { color: green; }
    50% { color: blue; }
    75% { color: yellow; }
    100% { color: aquamarine; }
}
@-moz-keyframes color-change {
    0% { color: aquamarine; }
    25% { color: green; }
    50% { color: blue; }
    75% { color: yellow; }
    100% { color: aquamarine; }
}
@-ms-keyframes color-change {
    0% { color: aquamarine; }
    25% { color: green; }
    50% { color: blue; }
    75% { color: yellow; }
    100% { color: aquamarine; }
}
@-o-keyframes color-change {
    0% { color: aquamarine; }
    25% { color: green; }
    50% { color: blue; }
    75% { color: yellow; }
    100% { color: aquamarine; }
}
@keyframes color-change {
    0% { color: aquamarine; }
    25% { color: green; }
    50% { color: blue; }
    75% { color: yellow; }
    100% { color: aquamarine; }
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
button{
    background-color: Transparent;
    background-repeat:no-repeat;
    cursor:pointer;
    color: aquamarine;
    font-size: 20px;
    /* align-items: right; */
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
            
            
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3> <Link to='/projects'><button>Projects</button></Link> </h3>
            <h3> <a href={"https://github.com/p011uckz/"}><button>Here is my Github: </button></a> </h3>
            <h3> <a href={"https://www.linkedin.com/in/jeremy-currier/"}><button>Here is my Linkedin:</button></a></h3>

            
            </footer>
    </Homediv>
  )
}

export default Home