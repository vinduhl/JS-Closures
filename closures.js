var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};


//////////////////PROBLEM 1////////////////////

// Above you're given a function that returns another function which has a closure over the name variable.
// Invoke outer saving the return value into another variable called 'inner'.

// Code Here
var inner = outer();


//Once you do that, invoke inner.

  //Code Here
inner();


//////////////////PROBLEM 2////////////////////


var callFriend = function(){
  var friend = 'Jake';
  function callF(number){ 
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};


// Above you're given a callFriend function that returns another function.
// Create a makeCall function that when invoked logs  'Calling Jake at 435-215-9248' in your console.

  //Code Here
function makeCall() {
  var call = callFriend();
  console.log(call("435-215-9248"));
}
makeCall();




//////////////////PROBLEM 3////////////////////



/*
  Write a function called makeCounter that makes the following code work properly.
*/

//Code Here

var makeCounter = function() {
  var currentCount = 0;

  return function() {
    //currentCount++;
    return ++currentCount;
  }
}

//Uncomment this once you make your function
   var count = makeCounter();
   console.log(count()); // 1
   console.log(count()); // 2
   console.log(count()); // 3
   console.log(count()); // 4



//////////////////PROBLEM 4////////////////////


// Inside the function called counterFactory
// return two functions that implement up/down counter.
// The first function is called inc, this function is responsible for incrementing the value once
// The second function is called dec, this function is responsible for decrementing the value by one
// You will need to use the module pattern to achieve this.

var counterFactory = function (value) {

  // Code here.

  var inc = function() {
    value++;
    return value;
  }

  var dec = function() {
    value--;
    return value;
  }

  return {
    inc: function() { return inc() },
    dec: function() { return dec() }
  }

}


var counter = counterFactory(10);
console.log("counter.inc() = " + counter.inc()); // 11
console.log("counter.inc() = " + counter.inc()); // 12
console.log("counter.dec() = " + counter.dec()); // 11




//////////////////PROBLEM 5////////////////////


// Inside the motivation function create another function called message that will return 'You're doing awesome, keep it up firstname lastname.'

  function motivation(firstname, lastname){

    var welcomeText = 'You\'re doing awesome, keep it up ';

    // code message function here.
    function message() {
      return welcomeText + firstname + ' ' + lastname + '.';
    }



    //Uncommment this to return the value of your invoked message function

    return message()
  }

  console.log(motivation('Billy', 'Bob')); // 'Your doing awesome keep it up Billy Bob



//////////////////PROBLEM 6////////////////////

// Inside the return create a publicMethod property that is a function that invokes privateMethod. After you create the privateMethod
// Invoke it by calling module.publicMethod(); outside the module scope

  var module = (function() {
    var person = {
      name: "phillip",
      age: 29,
      location: 'Utah'
    };

    var privateMethod = function(){
      return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
    };

    // Anything that is being returned is made public and can be invoked from outside our lexical scope

    return {
      publicMethod: function() {
        return privateMethod();
      }
      // Code here.
    };

  })();

//Uncomment this after you create your public method
console.log(module.publicMethod());



//////////////////PROBLEM 7////////////////////
// Here we have a for loop that will iterate as long as i is less than or equal to 5. What we need to do is console.log(i)
// So that it logs ( 0 then 1 then 2 then 3, etc). Run this code in your console to see what the output is.


function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    var scope = newScope(i);
    setTimeout(scope, i * 1000);
  }

  function newScope(i) {
    return function() {
      console.log(i);
    }
  }
}
timeOutCounter();
  // To make this code work you will need to create a new scope for every iteration.





//////////////////PROBLEM 8////////////////////

var funcArray = [];

for(var i=0; i<=5; i++) {
  funcArray[i] = createNumber(i);
}

function createNumber(num) {
  return function() {
    return num;
  }
}


/*
  Make the following code work
*/
  console.log(funcArray[0]()); //0
  console.log(funcArray[1]()); //1
  console.log(funcArray[2]()); //2
  console.log(funcArray[3]()); //3
  console.log(funcArray[4]()); //4
  console.log(funcArray[5]()); //5
/*
  *Hint: Don't let this fool you. Break down what's really happening here.
*/
