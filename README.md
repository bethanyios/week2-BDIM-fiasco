# Week 2: BDIM Fiasco

## Authors

* Beth [@bethanyios](https://github.com/bethanyios)
* Reda [@redahaq](https://github.com/redahaq)
* Pat [@pat-cki](https://github.com/pat-cki)
* Dan [@plasticneuron](https://github.com/plasticneuron)

## Installation

To run our tests, you'll need to do the following:

1. Clone the [repo](https://github.com/fac18/week2-BDIM-fiasco)
2. `cd` into the directory
3. run `npm install`

This will install _tape_, _tap-spec_, _nodemon_ and _nyc_ as dev-dependencies, since these are listed in our `package.json` file.

You can then run `npm test` to run the tests, or `npm run coverage` to run nyc alongside.

## Process

This week was quite different to the last, although we were still in the same team! After reading the project readme, we had a little peek back at our retrospective notes, to see how we hoped to approach future projects. Some of these things were:

- continue mobbing the HTML
- switch up pairs
- leave our comfort zones
- continue asking for and offering help
- ensure we all understand the codebase, even the stuff we haven't written
- make more granular commits

### Mobbing first tests

As TDD is still a pretty new and unfamiliar concept, we thought mobbing our first logic function together would be a great way to learn. 

![](https://i.imgur.com/fCTf4Rg.jpg)

We really loved this approach, and even though it took the four of us 3 hours to write about 7 lines of code... 

`addTodo: function (todos, newTodo) {
    var allTodos = this.cloneArrayOfObjects(todos);
    newTodo.id = this.generateId(); // generate fresh id for newTodo
    newTodo.done = false;
    allTodos.push(newTodo); // add newTodo to cloned array
    return allTodos;
  },`

... we did write 137 lines of test on the way there. 

What a journey!

![What a journey!](https://media.giphy.com/media/mLugfDQ6PcCsg/giphy.gif)

### Dividing functions between pairs

Cut to Thursday morning. The scent of freshly brewed coffee perfumes the air. Our heroes enter, and split up for some pair programming! 



### Continued specific testing/functions per pair



### Wire frames/design meeting

We paused writing our logic and had a little brainstorm to get an overarching sense of how everything would fit together and how we wanted our Todo app to look.



![](https://i.imgur.com/Abwvlpc.jpg)

### Css variables

We used coolors to choose a colour palette, and created these as variables in our root directory.

### Mobbing semantic HTMl

### Granular ~~commits~~ comets

![](https://media.giphy.com/media/g0jidX9xXJe4jjKJTc/giphy.gif)

Some of us were great at remembering to commit regularly... @Beth.

Others, not so much... *cough* Reda *cough*. 

Something for next week!

![](https://media.giphy.com/media/LVWQ9iBwkpLmU/giphy.gif)

### DOM in pairs

![](https://i.imgur.com/GQfkHh1.jpg)


### Styling in pairs

## Tracking progress

We raised issues in github from the very beginning to track all our Todos! This was a goal we'd noted last week and we're pleased to say it worked really well for us in keeping everything very visible across the team.

### User stories

So, our user is some very disorganised person, who wants to be able to:

- [] enter tasks into a web page in order to remember them
- [] 

## Stretch goals

- Sort functionality:
- Separating marked todos in another part of the webpage (alive > extinct)

## Things we learnt

- How to write simple failing tests, and use these to construct functions
- DOM!
- The every JS array method

By osmosis:

We're pretty much gitflow ninjas now.

## Things that went wrong

- Forgetting to return something at the end of our functions and wondering why our tests weren't working. This happened more times than we'd care to admit. 

![](https://media.giphy.com/media/HiXbqSrs6aH04/giphy.gif) 

## Auditing

## Presentation
