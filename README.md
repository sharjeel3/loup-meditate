# meditate

## TL;DR
I used preact for this project. Yayyy!!! Run following commands and go to http://localhost:8080 to view it on Mobile view.
```
npm install
npm start

```

## What I have done
I have focused initially on creating the right base for this project. This is done it in a way that we can build on top of it in future. Whether it is more UI components or new views, we should be sweet with scaling the application. \
I have worked on following areas in general: 
* Overall base for the application 
* Styleguide / UI components
* Meditate View for the app
* Audio player using HTML5/DOM API 
* Progress bar control using D3.js 


More details about the project are below. 

## What is in progress
I have paused working on it at the moment.  

## The Future
There are few areas I would like to touch in future. These are the things usually discussed at the start of the projects but I am mentioning them to let you know that some areas of app require more updates. 

* Design discussion and scaling the app between devices. I am particularly interested in finding out how it should appear on older Mobile devices. The player controls/ typography would need some adjustments based on this. Currently it is working better on iPhone 8 Plus. 
* One or two API response keys required changes to the data before it can be rendered. This can be discussed.
* Fonts may be hosted locally because including them using Typekit introduces a glitch on load. 
* Main background image for card needs to be changed to suit overall design. 
* The background SVG shape for play/forward icon is not as per design. This can be replaced easily if I can get SVG as per designs.
* Unit testing 

## All CLI Commands
This project is bootstrapped using preact CLI. Following commands require that you have installed preact CLI globally.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy 
npm run test
```

## Tech Being Used
* PREACT
* Redux
* Thunk
* SCSS
* Helmet
* D3.js

## Code Structure 
The code is divided into directories/logical components to keep it structured. You will find following directories in `src` folder found at the root of the repository.
* **actions:** It contains anything related to Action creators or Async updates
* **api:** It contains sample API data   
* **assets:** General public assets    
* **components:** It contains wide range of UI/View components. It has a dedicated component that bundles all the UI/theme components. UI component is the one that can be enhanced and converted to a standard styleguide. Majority of the these components don't carry business logic.    
* **containers:** These will be responsible for carrying more business logic and handling async action creators.    
* **global:** It has Constants and anything we want to reuse across project.   
* **reducers:** It contains Redux reducers for a global state management    
* **routes:** It contains components mapped to preact router's routes. Routes components may include other components or containers.   
* **style:** The global app styles should go here.    
* **test:** Unit testing    

### Entry point
src/index.js

### Store 
src/store.js - Using Redux

### UI 
I have added basic UI components in the UI folder in very simple form. The purpose of having this is to reuse common UI patterns. Once we have completed this work, the rest of the development in future will become faster.\
The usage is very simple. Just import the UIProvider and wrap your app with it. 

```
import {UIProvider, Button} from './UI'
<UIProvider helmet={{}}>
    <div>
        <h1>Cool UI</h1>
        <Button id="my-button" href="/activities">Magic Button</Button>
    </div>   
</UIProvider>

```  
