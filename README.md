**Author**: [@shouston3](https://github.com/shouston3)

**Maintainer**: TBC

# Morning challenge: Modularise a Node.js server

### Setup

```bash
git clone https://github.com/foundersandcoders/modules-challenge.git
cd modules-challenge
npm install # install the dependencies
npm start # Start the server
```

### Get familiar with the application

Visit `http://localhost:4000` and play around with the ux of the application.

### Now let's have a think about refactoring the code

The first thing to note is that we have tests in place to safeguard against breaking the application.

Ensure to be regularly running these when refactoring.

Try to address the following issues when refactoring:
* File structure (Try to group together common file types)
* Repetitous code (Try to abstract out common code patterns)
* Code readability

We are not expecting everyone to complete this challenge, just to get as far as
you can. There is a lot to make more modular and we just expect you to do as much as you can, and learn a bit in the hour.

Think about how you are finding modularising the code after it's been
completely written. Is it easy? Is this a way you would like to make your code
modular in future? Or would you prefer to make your code modular _as you go_?

We will go over a solution after 45 minutes, so you will be able to see the way
 someone else has made it modular.

### Where to focus your attention?

```
├── dwyl.html
├── fac.html
├── index.js
├── server.js # <------ This file may need changing
├── package.json
├── request.js
├── stylesheet.css
└── test.js
```

### Questions

##### Can I change the tests that are being run?
Yea go for it, it should be used only as a tool when refactoring.

##### Should I refactor file <file_name>?
Refactor as much as you want, if you think you can improve code readability, then go for it.

##### I still don't know how to refactor this code
Here are some inspiration for design patterns:
* https://github.com/sofer/sssk
* https://github.com/sofiapoh/autocomplete-app/tree/master/src
* https://github.com/vanillasquad/nodelibs/tree/master/server

If your still unsure, just try your best, we'll be going through good and bad patterns to follow.
I'll post a model answer after the workshop
