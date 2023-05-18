# MedKetoKid

## About
MedKetoKid is a mobile and web application designed to help manage a ketogenic medical diet for children. The app provides the ability to store and track recipes, calculate ketogenic ratios, and ensure that diet recommendations set by a nutritionist are met.

## Features

1. **User Authentication**: Users can create personal accounts, log in, and manage their sessions securely.

2. **Recipe Management**: Users can create, view, update, and delete recipes. Each recipe consists of various ingredients with specific nutritional values.

3. **Ingredient Lookup**: Users can search and add ingredients from a database or add custom ingredients to recipes.

4. **Nutritional Calculation**: The app automatically calculates the ketogenic ratio for each recipe and informs the user if the ratio is within the acceptable range set by the nutritionist.

5. **Professional Connect**: Professionals such as nutritionists can connect to the app to monitor and make recommendations. 

6. **Data Export**: Users can export their data for further analysis or for sharing with their nutritionist.

## Future Features

1. **Multi-Language Support**: Translation of the app into various languages to reach a broader user base.
   
2. **Health Data Integration**: Integrate with health apps to track the impact of the diet on the child's health metrics.

## Tech Stack
- Frontend: React (via Remix)
- Backend: Express.js (Node.js)
- Database: SQLite via Prisma
- Cloud storage: User's personal cloud service (Dropbox, Google Drive, etc.)
- Deployment: Remix App Server

## Getting Started

1. Clone the repository and install dependencies:

```
git clone <repository-url>
cd MedKetoKid
npm install
```

2. Start the development server:

```
npm run dev

```

3. Open `localhost:3000` in your browser to see the app.

## Contributing
We welcome contributions! Please see the 'issues' section for ways to get started.

## License
This project is licensed under the MIT License. See `LICENSE` for more details.
