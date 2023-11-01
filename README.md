### [Netflix Clone](https://netflix-clone-lemon-six.vercel.app/) 


<img width="1792" alt="Screenshot 2023-10-29 at 11 22 59 AM" src="https://github.com/mihirp11/netflix-clone/assets/114366288/6e81285f-4450-4410-8b35-351fd03d7e9d">
<img width="1792" alt="Screenshot 2023-10-29 at 1 20 56 PM" src="https://github.com/mihirp11/netflix-clone/assets/114366288/4d8491fa-09ed-4b89-8280-adbe228f02c2">



## Features:

- Environment, Typescript, NextJS Setup
- MongoDB & Prisma connect, Database creation
- OAuth using GitHub and Google
- Fully Responsive UI
- Featured Movie on Dashboard
- Add to favorites List functionalty
- Full screen Movie watching
- Picture in picture functionality
- Zustand state management
- React SWR data fetching

## Project Description
- Application recreates many of the UI features and functionality in Netflix to create a similar movie watching app using open source short movies.
- Previews of movies are viewed by hovering on the movie components

<img width="717" alt="Screenshot 2023-10-29 at 11 23 17 AM" src="https://github.com/mihirp11/netflix-clone/assets/114366288/d6016403-a2fc-4ced-aa91-b2d7f013c5e0">

- Navbar is responsive to allow compatibility with many screen formats.

  <img width="250" alt="Screenshot 2023-10-29 at 12 56 56 PM" src="https://github.com/mihirp11/netflix-clone/assets/114366288/8b3460ed-00e2-45ed-98ec-ac6ad673fe6f">
  <img width="250" alt="Screenshot 2023-10-29 at 12 57 04 PM" src="https://github.com/mihirp11/netflix-clone/assets/114366288/f2ca3a21-0de2-40e4-87fb-500e1f08d646">

  

- Ability to add movies to favorite list
  
<img width="500" alt="Screenshot 2023-10-29 at 1 04 14 PM" src="https://github.com/mihirp11/netflix-clone/assets/114366288/56172a13-7e0b-4044-a931-26d0af00516f">



- Full screen Movie Viewer and Picture in Picture functionality

<img width="500" alt="Screenshot 2023-10-29 at 1 15 45 PM" src="https://github.com/mihirp11/netflix-clone/assets/114366288/6c44db47-e1da-4e33-b642-1e1db04492e0">
<img width="500" alt="Screenshot 2023-10-29 at 1 16 09 PM" src="https://github.com/mihirp11/netflix-clone/assets/114366288/7aac6248-28e0-4170-9445-63e990d056e1">


- OAuth using Google or GitHub, or create an account with username and email.
  
  <img width="250" alt="Screenshot 2023-10-29 at 1 21 05 PM" src="https://github.com/mihirp11/netflix-clone/assets/114366288/162922e7-34f7-401f-aa5b-757a9394d7d8">
  <img width="250" alt="Screenshot 2023-10-29 at 1 21 11 PM" src="https://github.com/mihirp11/netflix-clone/assets/114366288/22940fe3-2278-484c-b868-17bb070d6fd9">

## Coding Decisions
- Tailwind css is used due to it not needing redundant css files and inline styles when differentiating between styles with dark and light mode. Tailwind also allows for hover effects in many buttons and portions of the app without needing to create new eventhandlers for each separate effect/location. Conditional styling using tailwind and cn function also removes need for multiple portions in a css file. Responsive design is built into tailwind's modifiers
- OAuth with Google and Github create a more accessible way to enter the application and make it easier for users so they do not have to create new accounts
- MongoDB used with Prisma to create database with relations and still allow variety of data to be used
- Zustand used instead of redux to allow for more efficient UI, as it creates fewer unnecessary re-renders and will update state quicker.
- SWR allows prerendering of pages in Nextjs improving performance
  


