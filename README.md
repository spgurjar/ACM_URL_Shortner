# ACM_URL_Shortner
Url Shortner WebD Project

This application allows users to shorten URLs and track the number of clicks on the shortened links. It is built using Node.js, Express, and MongoDB.

# Installation
Clone the repository: **`git clone https://github.com/your/repository.git`**

Install the dependencies: ```npm install```

# Usage
1. Set up the MongoDB database by providing the MongoDB URI in the ```.env``` file.
2. Start the application: ```npm run devStart```
3. Access the application in your browser at http://localhost:5000

# Features
1. **Shorten URLs**: Enter a full URL and click the "Shrink" button to generate a shortened URL.
2. **Search URLs**: Use the search bar to find specific URLs based on keywords.
3. **Track Clicks**: The application keeps track of the number of clicks on each shortened URL.
4. **View URL List**: See a table displaying the full URL, shortened URL, and click count for all URLs.

# File Structure
1. `websrvr.js` : The main server file that sets up the Express application, handles routes, and connects to the MongoDB database.
2. `ACMmdls/shortUrl.js` : Defines the Mongoose schema for the ShortUrl model, which represents the URL entries in the database.
3. `url.ejs` : The EJS template file that renders the HTML view for the application's homepage.
4. `package.json` : Contains the project's dependencies and scripts for running the application.

# Dependencies
1. `dotenv`: Loads environment variables from a `.env` file.
2. `ejs`: Templating engine for generating dynamic HTML views.
3. `express`: Web framework for creating the server and handling routes.
4. `mongoose`: MongoDB object modeling tool for Node.js.
5. `shortid`: Generates short, unique IDs for the shortened URLs.
6. `nodemon`: Utility that automatically restarts the server during development for live reloading.

**Note** : This application requires a running MongoDB server and a valid MongoDB URI to connect to the database.

# Resources: 
1. For website hosting: https://render.com/
2. From youtube:https://www.youtube.com/watch?v=AjaGmTVBIfI&t=406s , https://www.youtube.com/watch?v=68Jd7GXZPe8
3. Proper explaination: https://docs.google.com/document/d/1Cws0jDden4KPWC8PibALuY3jYWYbrUpItilKuLGe0Hg/edit?usp=sharing
