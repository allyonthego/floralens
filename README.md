## Flora Lens

Web app to identify flowers by photo. Created for family and friends.

### Use

Check it out [here](https://floralens.herokuapp.com/).

### Process

Learned frontend (HTML, CSS, Javascript, Bootstrap, React.js), server API (Node.js, Express.js), and databases (PostgreSQL) basics.

Basic Tasks:

* Frontend:
    * Flower recognition
    * Page navigation

* Server API:
    * Frontend-server connection
    * Query database

* Database:
    * Create user tables


Tasks to do:

* DONE Make site look nice (with favions!)
* DONE Clean up code, comments, README
* DONE Deployment to Heroku (troubleshoot Node.js ver)

* Frontend:
    * DONE Switch to Google API
        * DONE API key retrieval
    * DONE Fix photo not updating count
    * DONE Fix photo and link not reseting on reload
    * DONE Fix validation of credential input

* Server API:
    * DONE Switch to Google API
        * DONE Create new endpoint
    * Create CORS API
    * DONE Split up request functions/concerns
    * DONE Fix validation of credential input
    * DONE Fix validation of credentials

Tasks for the future:

* Frontend:
    * Improve accuracy + scope via:
        * Scrape local flora sites (make up for the fact that the model is trained on popular plants)    
        * Different API (make up for the fact that the model is used for popular angles)
        * Archived web data
    * Ability to upload own photos
    * Gallery of past plant photos
    * Bounding box for plant

* Server:
    * Reset profiles
    * Async hashing
    * Confirmation of credentials
