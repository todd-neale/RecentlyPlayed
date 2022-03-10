## Recently Played Spotify

## Overview

- A React app that uses Spotify's Web API to show you insights on your music preferences via your recently played songs.

- In the dashboard can see and filter the list of songs by artists you have listened most recently.

- It has been built using React.js, CSS and Bootstrap.

## The Task

Build a Single Page Application using Spotify Web API to meet the below requirements.

```
 - A user should be able to view a grid of their recently played tracks.

 - This should include a relevant image for each track.

 - In a sidebar, a user should be able to view a list of all recently played artists.

 - This should be in order of most recently played.

 - On click of an artist, the grid of recently played tracks should be filtered by the relevant artist.

 - BONUS | On refresh of the page, any applied filter should be persisted.
 ```

## Installation

- Clone and install dependencies locally
```
    gh repo clone todd-neale/RecentlyPlayed recentlyplayed
    cd recentlyplayed
    npm install
```
- Make sure you have Node installed on your system.

- If you run into a `403 error` on installation, please contact me and I will set permissions for the email account wishing to access the dashboard.

### Running Locally

- You can start the application in dev mode by running the following command in your terminal.

```
    npm run start
```
- The client is served on `localhost:3000`

## My Approach

For this challenge I decided to use React as it is one of the frameworks used by Andersen EV. I found that it is a great fit for the task in hand. I also used some Bootstrap and css to simplify my stying. 

To approach the challenge I first had to figure out the Spotify API and the Implicit Grant flow for Authorisation this took a large proportion of my time. I then used the spotify-web-api-node package to parse the data necessary for the task into my application. Once I had the data I used React Hooks to render the correct data to the Front-End and filter by each Artist. Finally for the front end I used Bootstrap, some CSS and vanilla JavaScript.

## Reflections

I am happy with the solution I was able to create I feel the final solution achieved the main requirements of the task. To improve I would certainly like to have removed the duplicated songs as I do get hooked on one song for a day so clicking around my listening history looks like I only listen to one song from an artist. I would also like to have implemented the Persiting data method, yet after storing the data localstorage I was unable to render this information as one useEffect was clearing the localstorage upon reload.

I decided to stick closely to the guide line time and wanted to give a realistic impression of my coding ability. This is one of my first React projects without having boilerplate code provided by a course or tutorial. I thoroughly enjoyed the challenge and the freedom of creating a project from scratch. I feel I managed to take different aspects of my knowledge and set them into different logical steps to achieve a working project. I realised I still need to improve my knowledge around Hooks in React so I have more control over what is rendered to the DOM.

# Thank you

Thank you for viewing my project and inviting me to this process. I'm looking forward to elaborating on my methodology and gaining any feedback you can offer for me to improve.
