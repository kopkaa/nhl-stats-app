The application is showing team statistics, tables, info about players and matches from free NHL API. <br>
[Demo deployed on Heroku](https://nhl-app-client.herokuapp.com/) 


## Application

### Installing
First of all install all dependencies with `npm install`

### SERVER
Server is built with GraphQL server [Apollo Server](https://www.apollographql.com/docs/apollo-server/) <br>
Run server in apollo-server `npx nodemon server.js`

### CLIENT
Client is using Vue.js library for connecting to GraphQL server and fetching data it's using [Vue-Apollo Library](https://apollo.vuejs.org/) <br>
Run client in client folder with	`npm run serve`



| Name        	| Description   | 	|
| ------------- |:-------------:| -----:|
| Localization | CZ/EN translation    |    ❌ |
| Tabs      | Supporting tabs      | ❌ |
| Notifications      | Notifications      | ❌ |
| Widgets | On dashboard user can select custom widgets     |    ❌ |

### API Docs
https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/1.svg
https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md


## License
Feel free to contribute
