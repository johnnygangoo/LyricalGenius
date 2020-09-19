# LyricalGenius

## Project Abstract
LyricalGenius is a Web application lyric scraper that uses the Genius api to grab lyrics from a song. Before getting any further, Genius is a media company that
has lyrical artists come on, perform acapella and explain the lyrics they used in their song. They also stream music as well. From there the lyrics are parsed and
sent, **one by one** as a mobile message using the Twilio api. Making this into a web app is easier for the user such that all they have to do is search the song 
that they want, and click send to have these song lyrics be sent one by one. By sending messages one by one to a person very rapidly they might get very annoyed,
but that is part of the fun in this assignment.<br><br><br>
<img src=https://github.com/johnnygangoo/LyricalGenius/blob/master/JohnnyGangoo_LyricalGenius.png>

## Project Relevance
Looking at **Educational Goals** there are some concepts that will be applied into this assignment. First is the design pattern, we will use Vanilla js which will parse the lyrics in the front end, that were acquired with the Genius api, then from there the lyrics will be sent to the backend. With Node.js as the backend language we will finally then send the messages using the Twilio api. What I am trying to indicate here is, design is crucial, we need to know 
exactly what connections are being made throughout the system. Next this project is one that can be broken down into parts. Developers can be working on the connection
side while another on the front end side, that is why git is very import here, by merging all the changes and consistently bug fixing we will be able to create a 
**mainline** that represents all of our ideas. On top of that all of us will gain experience on both the backend and frontend because by the way the connections 
will be made we need to be communative with eachother about what happens when a user clicks a certain button or when an invalid response is sent, etc. 

##  Conceptual Design
This project will build off of an already existing open source lyric scraper project. Along with that, Genius and Twilio both have api's that can be used for free. HTML/CSS will be used for design and styling parts of the
application while Vanilla Javascript and Node.js will be responsible for handling the heavy work. This heavy work includes grabbing the song name, finding it (using the
Genius api) displaying it to the user (on the client side), then from there having the user enter the number at which they would like to send the lyrics to. From there once "send" button is hit the 
lyrics and mobile number are sent to node to be used with twilio api to begin to send the messages. 

##  Background
<a href="https://github.com/farshed/genius-lyrics-api#types">Genius Lyric Scraper Repo</a>
<br>
Installation involves downloading the npm package that the repo has provided, and from there setting up the website
and using the website name to create the API Client in Genius and Twilio. Also to allow any user to connect we will 
need something like an AWS EC2 instance to keep our server, made by Node, active.

## Require Resources
Students participating in this assignment will need the follow:
 *  HTML
 *  CSS
 *  Javascript
 *  Node.js<br>
**If they are new to any of these, this project is a good gateway to learning about them.**
