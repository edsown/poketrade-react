# Poke trader app

This project was created using React, and the requests to the api were made using axios.

## How does it work?

It is a quite simple project. It is a great practice project for those looking forward to leraning REST API consumption and React Hooks. 

Choose up to 6 Pokémon for each team (A or B) by tapping the buttons on the cards. The Pokémon are ordered in alphabetical order, loaded 20 at a time. The API itself provides a "next" parameter so we can request 20 more. After assembling your Pokémon, click on 'Open Trade' - a modal will pop-up on your screen -, review your selected Pokémon then click on 'Trade'. The application will tell you if the trade is fair or not, based on the total base_experience points of your team. A history of the attempeted trades is provided on the same modal as the trade area. 

## Running it locally

Clone the repo, open the project directory and run:
### `npm install`
and then
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

OR

Click [here](poketrader-edson.herokuapp.com) to see a live demo. 

## Work in progress

There's still a lot to do. I didn't have the time to do them yet, but just to name a few:
* Mobile responsivenes - Yeah I know about mobile first
* Unselecting individual Pokémon - Will be done by filtering the selected by their IDs
* An actual Navbar, with access to an 'about' page
