# LyricalGenius

## Project Abstract
LyricalGenius is a Web application lyric scraper that uses the Genius api to grab lyrics from a song. Before getting any further, Genius is a media company that
has lyrical artists come on, perform acapella and explain the lyrics they used in their song. They also stream music as well. From there the lyrics are parsed and
sent, **one by one** as a mobile message using the Twilio api. Making this into a web app is easier for the user such that all they have to do is search the song 
that they want, and click send to have these song lyrics be sent one by one. By sending messages one by one to a person very rapidly they might get very annoyed,
but that is part of the fun in this assignment. In the diagram below one thing I would like to point out is the connection from the first to last bubble. When the
user presses send, they are then able to enter another song that is why that connection is made.<br><br><br>
<img src>

## Project Relevance
Looking at **Educational Goals** there are some concepts that will be applied into this assignment. First is the design pattern, we will need to have a backend 
language like Node.js to be listening for requests which will then parsed and send back up to the client side as a response. Design is crucial here so that we know 
exaclty what connections are being made throughout the system. Next this project is one that can be broken down into parts. Developers can be working on the connection
side while another on the front end side, that is why git is very import here, by merging all the changes and consistently bug fixing we will be able to create a 
**mainline** that represents all of our ideas. On top of that all of us will gain experience on both the backend and frontend because by the way the connections 
will be made we need to be communative with eachother about what happens when a user clicks a certain button or when an invalid response is sent. 

##  Conceptual Design
This project will build off of an already existing open source scraper project. Genius and Twilio both have api's that can be used for free. HTML/CSS will potentially be used for styling 
application while Vanilla Javascript and Node.js will be responsilble for handling the heavy work. This heavy work includes grabbing the song name, finding it (using the
Genius api) displaying it to the user (on the client side), then from there having the user enter the number at which they would like to send the lyrics to. From there once "send" is hit the 
lyrics and mobile number are sent to node to be parsed a used with twilio api to begin to send the messages. 

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
