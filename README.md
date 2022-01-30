# TRINIT_Spriggan-3_DEV02


<!-- PROJECT LOGO -->
<h1>Bug Management System</h1>
<br />

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
       <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
 *Bug Management System*
    This project is built during the TRI-NIT hackathon.Three of the most prestigious engineering colleges in the country present this coding competition like no other for the ultimate battle of wits. ACM NITK, Spider - NIT Trichy and CSEA - NIT Warangal proudly present the Tri-NITarian Coding Cup.
* Home Page
* Profile Page
* Bugs Page

### Features
-  The first feature which a team-leader has right to is creation of a project. While creating a project he adds all the information required such as a project_name, project_description, creation_details, project owner, users,etc.  
-  After the project is successfully created, the team lead will assign roles to different people in the software.  
-  People can join the projects as users. It would be the team lead’s decision whether he wants to appoint the user or no and which designation he wishes to assign him. 
-  Once the team members are assigned, the team lead along with the development team can create bugs for the particular project. Not only the development team but also users can create bugs for the project. 
-  After the bugs are created, one can view them all together. In order to discuss or add comments for any bug, the user must click on the bug and then he can add comments for that bug.  

Brownie Features: 

- Status of all the bugs is visible on the dashboard.  
- Bug reports would be generated in the form of a pdf and would be mailed to the team lead.  
- Specific data would be shown with statistical information (in graphical representation). 
- This is a cross platform application and can be accessed using a secure header as well. 


### Built With
* [Bootstrap](https://getbootstrap.com/)
* [Mongoose](https://mongoosejs.com/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [NodeJs](https://nodejs.org/en/)
* [Socket IO](https://socket.io/)
* [Axios](https://axios-http.com/)
* [Redux](https://redux.js.org/)


<!-- GETTING STARTED -->
## Getting Started

Instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```


### Installation

1. Get a Mongo URI from [https://cloud.mongodb.com/](https://cloud.mongodb.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/utsavk28/Social
   ```
3. Install NPM packages
   ```sh
   cd client && npm install
   ```
   ```sh
   cd server && npm install
   ```
4. Enter your Mongo URI and JWT Secret Token in `server/config/default.json`
   ```JSON
   {
		"mongoURI": "mongodb+srv://user:pass@cluster10.uxypi.mongodb.net/test?retryWrites=true&w=majority",
		"jwtSecret": "token"
	}
   ```



<!-- USAGE EXAMPLES -->
## Usage

Allow Organization & Individuals to track Bugs & tackle them

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contributors

- [Utsav Khatu](https://www.linkedin.com/in/utsav-khatu-431b741bb/) 
- [Jeet Shah](https://www.linkedin.com/in/jeets25/) 
- [Esha Shah](https://www.linkedin.com/in/esha-shah-8108b91a8/) 




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/utsavk28/Social.svg?style=for-the-badge
[contributors-url]: https://github.com/utsavk28/Social/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/outsavk28/Social.svg?style=for-the-badge
[forks-url]: https://github.com/utsavk28/Social/network/members
[stars-shield]: https://img.shields.io/github/stars/utsavk28/Social.svg?style=for-the-badge
[stars-url]: https://github.com/utsavk28/Social/stargazers
[issues-shield]: https://img.shields.io/github/issues/utsavk28/Social.svg?style=for-the-badge
[issues-url]: https://github.com/utsavk28/Social/issues
[license-shield]: https://img.shields.io/github/license/utsavk28/Social.svg?style=for-the-badge
[license-url]: https://github.com/utsavk28/Social/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/utsav-khatu-431b741bb/
