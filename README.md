<!-- 15Apr My notes  -->
1. Using nextJS, MapBox API, Google Firebase & Tailwind CSS, I am trying to build a ride hailing app similar to Uber. I built a login page with full user authentication using Firebase. 
2. Once logged in it will take you to the home page to view the entire app - choose whether to take a ride, 2-wheeler or reserve
3. After selecting, it takes you to the search page & asks where you want to go. So you can put in your pickup & drop off cities/locations
4. Upon inputting locations, it takes you to the confirm page where it will tell which rides are available and also how much they cost based on the distance. 

1. Link the Back Button to go to the home page
2. Create the Confirm Locations button
3. Create the confirm page
4. Plot a random point on a map
5. Get Coordinates from a location 
6. Add the pickup and dropoff as markers on the map
7. Add a auto zoom to be able to zoom into the markers
8. Pass in location data into confirm page
9. Use the passed in data to put it on the map
10. Create the HTML for the Ride Selector
11. Add - Calculate the ride fare price
12. Add a login
13. Google pop up & user authentication
14. Use Firebase & Google API - User authentication - Sign In & out ability
15. 




<!-- 27Apr22 -->








This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
