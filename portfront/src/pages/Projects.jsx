import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Projdiv = styled.div`
background-image: url(https://wallpaperaccess.com/full/1271508.jpg);
background-size: 1920px, 1080px;
background-repeat: no-repeat;
min-width: 100%;
min-height: 100%;
position: fixed;
color: aquamarine;

h1{
    text-align: center;
}
p{
    float: right;
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
.home{
    /* float: left; */
    align-items: right;
    font-size: 20px;
    color: aquamarine;
}
a:visited{
    text-decoration: none;
    decoration: none;
}
button{
    background-color: Transparent;
    background-repeat:no-repeat;
    cursor:pointer;
    color: aquamarine;

    /* border-radius: 28px;
    background-image: url(https://wallpaperaccess.com/full/1271508.jpg);
    background-repeat: no-repeat;
    background-size: 1000px;
    position: fixed; */

    /* border: none; */
    /* overflow: hidden; */

    /* background-image: url(https://cdn.xxl.thumbs.canstockphoto.com/blue-button-one-blue-neon-button-empty-black-background-drawings_csp1114649.jpg); */
    /* min-width: 10%;
    min-height: 10%; */
    /* background-position: center; */
}
`

const Projects = () => {
  return (
    <Projdiv>
        <h1>My Projects</h1>
        <header>
            <Link to='/'><button className='home'>
                 <p> Home </p> 
            </button></Link>
            <p>Here is where I will have links to my projects, once I have it all working.</p>
            <br></br>
            <br></br>
            <p>
                <a href=""><button>Blackjack</button></a>
            </p>
            <br></br>
            <br></br>
            <p>
                <a href=""><button>Movie List</button></a>
            </p>
            <br></br>
            <br></br>
            <p>
                <a href='https://marvel-wiki-project3.herokuapp.com/'><button>Marvel Wiki</button></a>
            </p>
            <br></br>
            <br></br>
            <p>
                <a href=''><button>Chacracter Creator Plus</button></a>
            </p>
        </header>
    </Projdiv>
  )
}

export default Projects