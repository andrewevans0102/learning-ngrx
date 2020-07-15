# learning-ngrx

This project is to showcase an example application with NgRx. It uses NgRx in terms of "feature state" and uses the store for logging in and processing dinner orders.

The app uses a local backend that is a simple Express application that is in the "server" folder.

## Local Setup

I highly recommend using the [Chrome Redux DevTools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) with this application locally.

I have setup [concurrently](https://www.npmjs.com/package/concurrently) to run the backend and frontend all in one command. Just do the standard `npm install` and then `npm run start` to get both working together, and then open [http://localhost:4200/](http://localhost:4200/).
