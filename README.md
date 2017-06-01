**Author**: [@shouston](https://github.com/shouston)

**Maintainer**: TBC

# Morning challenge: Modularise a Node.js server

### Setup

```bash
git clone https://github.com/shouston3/morning-challenge.git
cd morning-challenge
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
