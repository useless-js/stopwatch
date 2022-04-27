# stopwatch

***
### **[YouTube Link](https://youtu.be/RJq6ZnE-ASE)**

***

In this project we build a useless stopwatch and then interface with it using an express server! 

Of course, the goal of this project is to teach you nothing. None of the following is explained in the above video:

## stopwatch

The stopwatch module makes use of a [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) in order to persist state, allowing us to simply implement the basic stop/start/reset functions. 

The function we create is a [factory function](https://www.javascripttutorial.net/javascript-factory-functions/) that produces an object containing our stopwatch functionality. While our module exports a single stopwatch object, the code could easily be modified so that we export the factory function itself, allowing us to produce multiple stopwatch instances. 

The stopwatch makes use of [NodeJS Timers](https://nodejs.org/dist/latest-v18.x/docs/api/timers.html). Of particular interest, we see how we can use a reference to a specific timer in order to manipulate timers in a useful way. 

## server
Our server is a very simple [Express](https://expressjs.com/) application. We use the server to expose stopwatch functionality over HTTP requests. 

This is of course a stupid project to use a web server for, but it should give you a sense of how easy it is to put together a set of endpoints. 

## commands
Install dependencies 
```
$ yarn install
```

Transpile (or "build") the application: 
```
$ yarn watch
```

Start the server: 
```
$ yarn start
```
## comments
I hope you enjoy this project and content. If you haven't already, please check out the associated [YouTube Video](https://youtu.be/RJq6ZnE-ASE). Like and subscribe if you'd like to see more! 

If you have a project suggestion or a concept you would like to see in action, please let me know by commenting on one of the videos on the [channel](https://www.youtube.com/channel/UCAeVZXezCZDPXYDTHVNAXDQ)!