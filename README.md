# Ecommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Features 

1-Product list page<br/>
2-Sort by low and high price<br/>
3-Filter by category and title<br/>


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Data
Database : Firebase clous firestore<br/>
Here is the structure of the data to be used: <br/>

Product : {<br/>
  image_url: string,<br/>
  title: string,<br/>
  description: string,<br/>
  price: number,<br/>
  category: string<br/>
} ;

## Components 

AppComponent<br/>
Headercomponent<br/>
Categorycomponent<br/>
Pricehighcomponent<br/>
Pricelowcomponent<br/>
Singleproduct<br/>

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


