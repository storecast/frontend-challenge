# Storecast frontend-challenge

The task is to implement a **2 step UI wizard** to create a user account. There is no UX or UI constraints, this is 
up to you to decide. 

The User information that we need to collect is described in the User type:
```
interface User {
  name: string
  age: number
  email: string
  newsletter: 'daily' | 'weekly' | 'monthly'
}
```
You can, for example collect the name and age in the first step and then email and newsletter in the second step.
You may use a routing library such that every step is a separate route but this is completely optional and not 
required.

There is a dummy `sdk` package(implemented in the /sdk folder) which exports a `createUser` function. This function returns a `Promise`.
Use it to simulate a request that creates a user account. 
Ex:

```
import { createUser } from 'sdk'

const details = {...}

createUser(details).then( ... )
```

The focus should be on code style and the way you approach the problem implementation wise.
Feel free to use any other helper library although ideally the more code you write yourself the better.

### Implementation requirements:

- use either vanilla Javascript or one of the frameworks we use at Storecast(React / Vue.js)
- use npm to manage dependencies, there is pre-initialized package.json included in this repo

### Feel free to:
- use [create-react-app](https://github.com/facebookincubator/create-react-app) or webpack as a build tool
- use a statically typed language like Typescript or simply [flowtype](https://flowtype.org/)

### Getting started:

- Fork the repo
- Implement your solution
- Create a PR against this repo

Optional: build the project and deploy (ie make it available as a static project) on 
[Github Pages](https://pages.github.com/), otherwise please provide detailed instructions
on how to start the project locally.

Any questions please contact me via email (agon.bina AT storecast.de) :)