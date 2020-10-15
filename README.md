[![Build Status](https://dev.azure.com/jasonsigler0724/HackerNews/_apis/build/status/Jasigler.Hacker-News-Challenge-Client?branchName=master)](https://dev.azure.com/jasonsigler0724/HackerNews/_build/latest?definitionId=1&branchName=master)
<br />
<p align="center">

  <h3 align="center">Hacker News Challenge Client</h3>

  <p align="center">
     Web client for the Nextech Hacker News Challenge
    <br />
    <br />
    <a href="https://hackernewsclient.azurewebsites.net">View A Live Demo</a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Contact](#contact)



## About The Project

This is the web application portion of the Nextech Hacker News challenge. It is an Angular 10 application that displays the most recent stories from the Hacker News API through a .NET Core API found [here.](https://github.com/Jasigler/Hacker-News-Challenge-API)

Because the consumption of Hacker News data requires a significant number of API calls, this application avoids requesting information from all 500
new stories at once by using simple pagination. The UI can be configured to display 10 or 20 new stories at a time, thus limiting the number of requests to only those necessary at one time.



### Built With

* [Angular 10](https://angular.io/)
* [Ngx-Pagination](https://www.npmjs.com/package/ngx-pagination)
* [Bulma](https://bulma.io/)



## Getting Started

1. Node.js 12.18.3 or higher. Dowload can be found [here.](https://nodejs.org/en)
2. Angular CLI:
```sh
npm i -g @angular/cli
```

### Installation

1. Clone the repo
```sh
git clone git@github.com:Jasigler/Hacker-News-Challenge-Client.git 
```
2. Navigate to the root folder and intall dependencies
```sh
npm i
```
3. Run the Angular server
```sh
npm run build
```

### Running Tests

To run tests: 
```sh
npm run test
```

## Contact

Jason Sigler - jason.sigler@outlook.com


