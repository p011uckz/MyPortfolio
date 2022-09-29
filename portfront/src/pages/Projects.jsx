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

/* display: flex; */

h1.buttonTitle{
    /* color: white; */
    font-weight: 900;
    -webkit-text-stroke: 1.5px black
    /* outline-color: black;
    outline-width: 300px; */
}

p{
    float: right;
    text-align: right;
}

h1.title {
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

/* a:visited{
    text-decoration: none;
    decoration: none;
} */

button{
    background-color: Transparent;
    background-repeat: no-repeat;
    cursor: pointer;
    color: aquamarine;
    margin: 15px;
    /* width: 500px;
    height: 80px; */
    
}

button.wiki{
    background-image: url('/Screen Shot 2022-09-29 at 10.30.56 AM.png');
    background-size: 100% 100%;
    /* background-size: contain; */
    /* background-size: cover; */
    color: #ffffff;
}

`

let RightButtons = styled.button`
    margin: 15px;
    width: 369px;
    height: 80px;
    float: right;

`

const Projects = () => {
    return (
        <Projdiv>
            <h1 className='title'>My Projects</h1>
        <header>
            <Link to='/'>
                <button className='home'>
                    <p>Home</p> 
                </button>
            </Link>
        </header>
            {/* <a href=""> */}
                <RightButtons><h1 className='buttonTitle'>Blackjack</h1></RightButtons>
            {/* </a> */}
            <p>
                This is a clone of the classic casino game, play against a computer dealer.
            </p>
            {/* <br></br><br></br>             */}
            
            <p>
            {/* <a href=""> */}
                <RightButtons><h1 className='buttonTitle'>Movie List</h1></RightButtons>
            {/* </a> */}
                Ever sat watching a movie or show then wonder "have I seen this"? Wonder no more, make a list of what you have and havent seen while also being able to browse a list of every move ever made. 
            </p>
            {/* <br></br><br></br> */}
            
            <p>
            {/* <a href=''> */}
                <RightButtons><h1 className='buttonTitle'>Chacracter Creator Plus</h1></RightButtons>
            {/* </a> */}
                This is a tool to create custom peices for your characters in Table-top role-playing games
            <p>
            <a href='https://marvel-wiki-project3.herokuapp.com/'>
                <RightButtons className='wiki'>
                    <h1 className='buttonTitle'>Marvel Wiki</h1>
                </RightButtons>
            </a>
                <p>Like Marvel characters? Want to know all of the series and comics your favorites have appeared in?
                <br></br>
                Check out this Wiki made with data from the official Marvel API.</p>
            </p>
            </p>
    </Projdiv>
  )
}


export default Projects