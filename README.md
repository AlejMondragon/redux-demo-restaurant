# Redux Demo Restaurant

![Demo Gif](https://media.giphy.com/media/9v733pmsh3c4doZCj7/giphy.gif)

## Description

This restaurant app has interesting features such as maintaining a global state, persisting the shopping cart to localStorage, routing and more. I used Redux to maintain my state globally, the "redux-persist" package for storing our cart state to the localStorage, "react-router-dom" for routing and the use of the createAcyncThunk Redux tool that allows us to make asynchronous functions in our slices. I used this last tool so I can fetch the meals of the menu from a Firebase Realtime database and again... use it globally. I also implemented; dynamic inputs (using only one useState hook) in the checkout page, lazy loading, use of portals (with backdrops for mobile navigation and cart) and dynamic navigation buttons (that highlights the current route).

### Goal

The reason I made this app is to practice with Redux and implement some interesting features I had to search and learn on the go such as persisting with Redux. The styling was not the focus and can use some work. Some pages are even empty.

### Link To Project

[Link](https://latraditional-demo.web.app/) <i>(open in new tab: CTRL+click on Windows/Linux or Command+click on MacOS)</i>.