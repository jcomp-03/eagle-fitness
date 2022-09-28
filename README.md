<div  id="top"><div>
	
<!-- PROJECT SHIELDS -->
<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

<!-- PROJECT LOGO -->
<div align="center">
<a href="https://jlcomp-03-eagle-fitness.herokuapp.com/" target="_blank">
	<img src="./client/public/images/logo-full.png"  alt="logo">
</a>
<br>Click the logo to launch the App<br>
<br />
<p align="center">Fitness management app for those who care about their personal fitness! 
<br />

</a>
</div>

----------
<!-- TABLE OF CONTENTS -->
<details>
<summary>
	<h2>TABLE OF CONTENTS</h2>
</summary>
<ul>
  <li><h3><a href="#TheApp's Purpose">The App's Purpose</a></h3></li>
  <li><h3><a href="#Under the Hood">Under The Hood</a></h3></li>
  <li><h3><a href="#Installation">Installation</a></h3></li>
  <li><h3><a href="#Contact">Contact</a></h3></li>
</ul>
</details>

[![Product Name Screen Shot][product-screenshot1]](./public/assets/images/11-express-homework-demo-01.png)
	
----------
<!-- ABOUT THE PROJECT -->
# The App's Purpose
This full-stack MERN application is a single-page application (SPA) resource for those wish to stay fit and healthy! Deployed and hosted on Heroku, the website offers the user the ability to create a profile, review basic workout statistics, the option to plan a workout, or meal plan. In the case of planning a workout, once scheduled the workout will be visible on their in-app calendar page. A user can also log their miles ran or miles cycled in chart form, and see the chart update in real-time.

----------
# Under the Hood
This app features a React.js-powered frontend-facing UI, with Bootstrap CSS framework for mobile-first, responsive design. The API is consumed thanks to a Node.js\/Express.js\/GraphQL backend which powers all the routes. The database features NoSQL-based MongoDB paired with Mongoose object-document mapper (ODM) for storing database documents and creating schema and models. React-date-picker is implemented for the calendar, and Apex charts for displaying workout statistics. We used Git for a version control tool. The app was developed with the following frameworks, libraries, or tools:

<div align="center">
	
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white&style=for-the-badge) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge) ![Apollo GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?logo=apollo-graphql&style=for-the-badge) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge) 
![Insomnia](https://img.shields.io/badge/Insomnia-black?logo=insomnia&logoColor=5849BE&style=for-the-badge)![NPM  ](https://img.shields.io/badge/NPM-%23000000.svg?logo=npm&logoColor=white&style=for-the-badge) ![Node.js  ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge) ![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB&style=for-the-badge)![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white&style=for-the-badge) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?logo=SASS&logoColor=white&style=for-the-badge) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white&style=for-the-badge) 
![Git](https://img.shields.io/badge/git-%23F05033.svg?logo=git&logoColor=white&style=for-the-badge)  ![GitHub](https://img.shields.io/badge/github-%23121011.svg?logo=github&logoColor=white&style=for-the-badge)
	
</div>

----------
# Installation

You can visit the deployed app directly on Heroku [here](https://jlcomp-03-eagle-fitness.herokuapp.com/). 
If you wish to run your own local version, please follow below:

 1. Fork or clone this repository.
 2. Ensure you have already installed Node.js and MongoDB.
 3. In the root directory of your local repository, open a terminal and run the following commands sequentially:
	
	```
	npm i
	```
	
	```
	npm run seed
	```
	
	This will install the dependencies listed in the root *package.json* file first, and then run the script **seed** as defined in the scripts property of the root's package.json file. The **seed** script effectively changes directory into the server folder and runs that folder's **seed** script which populates some data tables with initial information.
 4. Still in the root directory in the terminal, then run:
	
	```
	npm run start
	```
	
	This script runs the server.js located in the server folder. At the tail end of this file, the Node/Express/GraphQL is opened, ready to listen for requests.
	
 5. Navigate to \http://localhost:3001
 6. To deploy the development version locally, in the same terminal window run:
	
	```
	npm run develop
	```
	
	This command will concurrently run nodemon to listen for file changes and also run *react-scripts start* from the client folder.
 7. Enjoy!

----------
<!-- CONTACT -->
# Contact
Thank you for taking time looking at this page.
I am reachable via this GitHub profile. Please contact me should you have any questions regarding this app, its deployment, or observations.
Happy painting! <p  align="right">(<a  href="#top">back to top</a>)</p>

## Done By
 
### Alex Noble-James
### Megan Campbell
### James Compagnoni
### Abraham Aguirre  


Project Link: [https://github.com/jcomp-03/eagle-fitness](https://github.com/jcomp-03/eagle-fitness)

<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot1]: ./client/public/images/screenshot_1.png



