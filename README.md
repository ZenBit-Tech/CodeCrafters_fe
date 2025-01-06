# Dispatcher APP

## Introduction
  Create your own delivery company, manage users, orders, routes, and much more.

## Domain
  The product enables users to efficiently create and manage their own delivery company by overseeing users, orders, routes, and other key operational aspects, providing tools for streamlined logistics and optimized processes.

## Key Features:
  1. Modular Architecture:

  Built with a well-structured folder system, the project ensures ease of navigation, scalability, and clear separation of concerns.

  2. Modern Frontend Stack:

   - Utilizes React.js for building dynamic and interactive user interfaces.
   - TypeScript integration ensures type safety and reduces runtime errors.
   - State management is implemented using best practices for efficiency and clarity.

  3. Responsive Design:

  The UI is designed to be fully responsive, providing seamless user experiences across devices and screen sizes.

  4. Reusable Components:
  Emphasis on reusability with a library of custom-designed components to speed up development and maintain consistency.

  5. API Integration:
  Ready for integration with backend services, featuring a clean and efficient system for handling data fetching, caching, and error management.

## Requirements
 - NodeJS (20.x.x);
 - npm (10.x.x);

## Folder structure

```
  ├── src/
      ├── api/         
      ├── components/  
      ├── constants/    
      ├── hooks/        
      ├── interfaces/   
      ├── pages/
          ├── components/  
          ├── PageExample/
      ├── routes/
      ├── services/
      ├── store/
      ├── test/
      ├── utils/
      ├── App.tsx
      ├── global.d.ts
      ├── main.tsx
      ├── theme.ts
      ├── vite-env.d.ts
```

## How to run 

Create a .env file and populate it based on the .env.example file.

After run the next command

```
  npm install
  npm run dev
```

