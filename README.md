# first-repo

just for testing stuff

Regine Naas
If you read this. You read this.

Further changes to the sauce

body {
background-image: url(../images/home/finalish.jpg);
background-repeat: no-repeat;
background-attachment: fixed;
font-family: "Dosis", sans-serif;
margin: 0;
padding: 0;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(100px, 1fr);
gap: 10px;
grid-template-areas:
"myheader myheader myheader"
"mynav mynav mynav"
"mymain mymain mymain"
"myfooter myfooter myfooter";
}

header {
grid-area: myheader;
}

nav {
grid-area: mynav;
}

main {
grid-area: mymain;
}

footer {
grid-area: myfooter;
background-color: cadetblue;
}

h1,
h2 {
font-family: "Julius Sans One", sans-serif;
color: azure;
}

h1 {
text-align: center;
font-size: 2.5rem;
}

img {
max-width: 100%;
}

a {
text-decoration: none;
color: rgb(166, 141, 173);
padding: 10px 0;
}

a:hover {
color: cadetblue;
}

ul {
list-style-type: none;
margin: 0;
padding: 0;
}

ul li {
display: inline-block;
padding: 0 10px;
}

/_ HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE HOME PAGE _/

#logo {
margin-bottom: 30px;
}

#nav_top {
background-color: azure;
text-align: center;
padding: 15px;
font-size: 1.5rem;
font-family: "Julius Sans One", sans-serif;
position: sticky;
top: 0;
}

#nav_top li:last-child {
font-family: "Press Start 2P", cursive;
font-size: 1.3rem;
color: rgb(75, 26, 87);
}

.poem_doves {
font-size: 1.5rem;
text-align: center;
padding: 70px 0;
}

.birdbox {
display: inline-block;
position: relative;
bottom: -14px;
left: 0;
}

#bird {
display: inline-block;
position: relative;
bottom: 0;
left: 0;
margin: 0;
padding: 0;
}

/_ MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC _/

.artist-list {
display: grid;
max-width: 100%;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr auto;
}

.artist-list li figure {
margin-top: 40px;
box-sizing: border-box;
}

.artist-list li figure img {
width: 100%;
height: 370px;
object-fit: cover;
border-radius: 2%;
}

.artist-list figcaption {
border-radius: 2%;
text-align: center;
background-color: azure;
font-family: "Dosis", sans-serif;
}

.artist-list h3 {
font-size: large;
text-align: left;
font-family: "Dosis", sans-serif;
background-color: cadetblue;
padding: 5px 0 5px 0;
color: azure;
}

.artist-list summary {
list-style-type: none;
font-size: 1.5rem;
color: black;
font-family: "Julius Sans One", sans-serif;
padding: 15px 0 15px 0;
margin-top: 10px;
}

#whysolong {
font-size: 1.3rem;
}

.artist-list summary:hover {
background-color: cadetblue;
color: white;
cursor: pointer;
transition: all 0.5s ease-in-out;
}

.artist-list .top10 li {
display: block;
text-align: left;
list-style-type: none;
font-family: "Dosis", sans-serif;
}

.tracks {
width: 50%;
float: left;
height: 300px;
overflow: auto;
}

.tracks ul {
padding: 0;
}

.album {
width: 50%;
float: right;
height: 300px;
}

.album h3 {
text-align: center;
}

.album .pic {
width: 100%;
height: auto;
}

.tracks h3 {
text-align: center;
}

.album .pic img {
width: 70%;
height: auto;
object-fit: cover;
}

.additional h3 {
margin-top: 300px;
text-align: center;
}

.additional {
display: block;
}

/_ RESPONSIVE RESPONSIVE RESPONSIVE RESPONSIVE RESPONSIVE RESPONSIVE RESPONSIVE _/

@media screen and (max-width: 600px) {
body {
background-image: url(../images/home/finalish.jpg);
background-repeat: no-repeat;
background-attachment: fixed;
font-family: "Dosis", sans-serif;
margin: 0;
padding: 0;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(100px, 1fr);
gap: 10px;
grid-template-areas:
"myheader"
"mynav"
"mymain"
"myfooter";
}

#logo {
margin: 0;
}

#nav_top ul {
display: flex;
flex-direction: column;
}

#nav_top ul li {
justify-content: center;
}

.artist-list {
display: grid;
max-width: 100%;
grid-template-columns: 1fr;
grid-template-rows: 1fr auto;
}
}

@media screen and (min-width: 601px) {
}
