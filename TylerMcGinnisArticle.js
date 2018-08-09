/////All of the below info and code came from https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/ ////////////////

//////////////////////////////Below is for use during discussions on Implicit, and Explicit Binding////////////////


function greet (lang1, lang2, lang3) {
    console.log(`Hello, my name is ${this.name} and I know ${lang1}.`)
};


const user = {
    'name': 'Tyler',
    'age': 30
};

const languages = ['JS', 'Ruby', 'Python'];

/////CALL//// Notice we drop in the User object and the elements inside the Languages array /////// 

// greet.call(user, languages[0], languages[1], languages[2]);

////APPLY//// Notice we drop in the User object and the Languages array ///////

// greet.apply(user, languages);

////BIND////

// const newFN = greet.bind(user, languages[0], languages[1], languages[2]) 
// newFn() // alerts "Hello, my name is Tyler and I know JavaScript, Ruby, and Python"


//////////////////////////Below is for use during new Binding and Window Binding/////////////////////////////

//////new Binding//////////
function User (name, age) {
    /*
    Under the hood, JavaScript creates a new object called `this`
    which delegates to the User's prototype on failed lookups. If a
    function is called with the new keyword, then it's this new object
    that interpretor created that the this keyword is referencing.
    */

    this.name = name
    this.age = age
};

const me = new User('Tyler', 27);


//////Us this on window Binding discussion//////

function sayAge () {
    console.log(`My age is ${this.age}`)
}

const user = {
    'name': 'Tyler',
    'age': 27
}



///////Use this on discussion about strict mode//////

'use strict'

window.age = 27

function sayAge () {
  console.log(`My age is ${this.age}`)
}

sayAge() // TypeError: Cannot read property 'age' of undefined


