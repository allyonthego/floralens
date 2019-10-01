## Flora Lens

Web app to identify flowers by photo. Created for family and friends.

### Use

Check it out [here](https://floralens.herokuapp.com/). Might take a while to load!
![Flora Lens](https://raw.githubusercontent.com/allyonthego/floralens/master/2.png =200x)

### Process

Learned frontend (HTML, CSS, Javascript, Bootstrap, React.js), server API (Node.js, Express.js), and database (PostgreSQL) basics.

#### Basic Tasks

* Frontend:
    * Flower recognition
    * Page navigation

* Server API:
    * Frontend-server connection
    * Query database

* Database:
    * Create user tables

#### Irritating Issues & Fun Fixes

* Frontend:
    * II: Promises sometimes (but not always) weren't kept
    * FF: Setting state and Google Vision API are async functions
    * II: UI difficult to create as planned
    * FF: Use React.js, Bootstrap, Tachyon UI designs!
    * II: Confusing app states and navigation/app routes
    * FF: Draw a diagram: centralize possible paths, minimize number of and size of requests  

* Deployment to Heroku: 
    * II: Node modules built with different versions of Node.js
    * FF: Specify versions in package.json
    * II: CORS error (ie. server API works with Postman but miraculously fails elsewhere)
    * FF: Create CORS proxy

#### Immediate Tasks

* DONE Make site look nice (with favions!)
* DONE Clean up code, comments, README
* DONE Deployment to Heroku
* DONE Switch to Google API
    * DONE API key retrieval
    * DONE Create new endpoint

* Frontend:
    * DONE Make UI responsive
    * DONE Make navigation convenient
    * DONE Fix photo not updating count
    * DONE Fix photo and link not reseting on reload
    * DONE Fix validation of credential input

* Server API:     
    * DONE Create CORS API/server
    * DONE Split up request functions/concerns
    * DONE Fix validation of credential input
    * DONE Fix validation of credentials

#### Future Tasks

* Frontend:
    * Improve accuracy + scope via:
        * Scrape local flora sites (make up for the fact that the model is trained on popular plants)    
        * Different API (make up for the fact that the model is used for popular angles)
        * Archived web data
    * Ability to upload own photos
    * Gallery of past plant photos
    * Bounding box for plant

* Server API:
    * Reset profiles
    * Async hashing
    * Confirmation of credentials
    * Heroku change remote names
