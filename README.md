<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AftonSlone/howl">
    <img src="https://cdn.freebiesupply.com/logos/large/2x/yelp-1-logo-png-transparent.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Howl</h3>

  <p align="center">
   Yelp Clone
    <br />
    <a href="https://github.com/AftonSlone/howl/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://afton-howl-app.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/AftonSlone/howl/issues">Report Bug</a>
    ·
    <a href="https://github.com/AftonSlone/howl/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project



 Howl, a Yelp clone, is a online directory for discovering local businesses ranging from bars, restaurants, and cafes to hairdressers, spas, and gas stations.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [React.js](https://reactjs.org/)
* [Express](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/AftonSlone/howl.git
   ```
   
2. Install NPM packages
   ```sh
   npm install
   ```
   
3. Create a **.env** file based on the example with proper settings for your
   development environment
   
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Run database migrations
  ```sh
  npx sequelize-cli db:migrate
  ```
  
  6. Seed database
  ```sh
  npx sequelize-cli db:seed:all
  ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Signup for a new account.

<img src="https://i.imgur.com/I4tZH8v.png" alt="Logo" width="480" height="360">

or login to a pre existing account that you already have.

<img src="https://i.imgur.com/NMyJq9W.png" alt="Logo" width="480" height="280">

Once you are logged in find a business in your area and leave a review. 

<img src="https://i.imgur.com/TGKIVa4.png" alt="Logo" width="480" height="280">


_For more examples, please refer to the [Documentation](https://github.com/AftonSlone/howl/wiki)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@AftonSlone](https://twitter.com/AftonSlone) - afton.slone@gmail.com

Project Link: [https://github.com/AftonSlone/howl](https://github.com/AftonSlone/howl)

<p align="right">(<a href="#top">back to top</a>)</p>







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AftonSlone/howl.svg?style=for-the-badge
[contributors-url]: https://github.com/AftonSlone/howl/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AftonSlone/howl.svg?style=for-the-badge
[forks-url]: https://github.com/AftonSlone/howl/network/members
[stars-shield]: https://img.shields.io/github/stars/AftonSlone/howl.svg?style=for-the-badge
[stars-url]: https://github.com/AftonSlone/howl/stargazers
[issues-shield]: https://img.shields.io/github/issues/AftonSlone/howl.svg?style=for-the-badge
[issues-url]: https://github.com/AftonSlone/howl/issues
[license-shield]: https://img.shields.io/github/license/AftonSlone/howl.svg?style=for-the-badge
[license-url]: https://github.com/AftonSlone/howl/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/afton-slone
[product-screenshot]: images/screenshot.png
