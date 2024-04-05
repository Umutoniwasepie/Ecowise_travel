# Ecowise_travel

### Welcome to EcoWise Travel!

This project is a web application designed to empower travelers to explore the world responsibly and minimize their environmental impact.
The uniqueness of the project lies in the impact calculator, which is an excellent feature to help travelers calculate their carbon footprints and make informed decisions.

### Key Features:

-Optional User Registration and Authentication: Create an account for a more personalized experience (optional). Secure login allows you to manage your profile information (if registered).

--Eco-Friendly Adventure Search: Discover curated eco-friendly adventures based on your preferences. Search by destination, activity type, and sustainability criteria.

-Impact Calculator (Unique Feature!): Estimate the carbon footprint of your planned trips. This powerful tool helps you make informed choices and minimize your environmental impact.

-Community Forum (Registered Users Only): Connect with other mindful travelers, share experiences, and discuss best practices for sustainable travel (requires registration).

-Review System (Registered Users Only): Leave reviews and ratings for eco-friendly adventures, helping others make informed choices (requires registration).

Operating Environment:

Hardware Platform

EcoWise Travel is compatible with standard computing devices, including laptops, desktops, tablets, and smartphones.
Accessibility across different hardware platforms ensures a broad user base can access the platform.

Operating System

The platform is compatible with major operating systems, including Windows, macOS, iOS, and Android.
Compatibility with various operating systems ensures a seamless user experience across different devices.

Web Browsers

EcoWise Travel supports popular web browsers such as Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge.
Browser compatibility is essential for users accessing the platform through web interfaces.

Internet Connectivity

The platform requires a stable internet connection to access real-time data, engage in forums, and use advocacy tools.
Users are encouraged to have a reliable internet connection for optimal functionality.

### Technologies Used:

-Frontend: React
-Backend: Node.js with Express
-Database: PostgreSQL

## Getting Started

To set up EcoWise Travel locally, follow these steps:

### Prerequisites
Before you begin, ensure you have the following installed on your local machine:

- Node.js: [Download & Install Node.js](https://nodejs.org)
- PostgreSQL: [Download & Install PostgreSQL](https://www.postgresql.org/download/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd eco-wise-travel
2. Install dependencies:
   ```bash
   npm install
3. Set up the database:
   Create a PostgreSQL database named eco_wise_travel.
   Configure the connection settings in server/config/db.config.js to match your database credentials.
4. Run database migrations:
   ```bash
   npm run migrate

Starting the Server
1. Start the backend server:
   ```bash
   npm run server
2. Start the frontend client:
   ```bash
   cd client
   npm start
   
  You can access EcoWise Travel in your web browser at http://localhost:3000.

Additional Notes
User Authentication: User registration and authentication are optional. You can access most features of EcoWise Travel without logging in, but certain functionalities, such as accessing the community forum and review system, require authentication.
