/* 

how to work with Promises, 6 points that are necessary for a Promise. 

1. promise (my friend has made a promise that he will call me 
   if he can or cannot get a pizza)
2. promise value (can get a pizza or cannot get a pizza)
3. fulfill the promise (can get a pizza)
4. reject the promise (cannot get a pizza)
5. successful callback (set up the dining table)
6. failure from callback (cook something else at home)


3 things in code.

1. how to create a promise (1)
2. how to fulfill or reject the promise (2, 3, and 4)
3. how to execute 'callback functions' based on whether the Promise is fulfilled or rejected? (5 and 6)



1. how to create a promise? 

const promise = new Promise() 
//create a new instance for a new constructor function

2. how to fulfill or reject the promise?

const promise = new Promise(() => {
})
// the new arrow constructor function accepts 1 function as its arguments, the arrow function automatically receives 2 arguments the, 'resolve and reject'..reslove and rejcets are both functions



const promise = new Promise((resolve, reject) => {
  resolve()
})
// changes the 'resolve' status of the promise when called; from 'pending' to 'fulfilled'

const promise = new Promise((resolve, reject) => {
  reject()
})
// reject function when called; changes status of the promise to 'rejected'



* we can only call the status 'resolve' to pending to 'fulfilled' and 'reject' to 'rejected'



these 2 functions are called after a async/wait operation
to keep things simple we can use a 'setTimeout' function, it will take 5se to the friend to go out and call me.  

eg.

const promise = new Promise((resolve, reject) => {
  setTimeout ( () => {
          // pizza is availble
          // change status from 'pending' to 'fulfilled'

        resolve() //calling resolve after 5sec

  }, 5000)

})

const promise = new Promise((resolve, reject) => {
  setTimeout ( () => {
          // pizza is NOT availble
          // change status from 'pending' to 'rejected'

        reject() //calling rejected after the pizza is NOT availble after                      5sec

  }, 5000)

})
  

3. How to execute callback functions based on the status change of the Promise? 

Success and Failure callbacks.

*Defining 2 callback functions

on 'fulfillment' is the function to be called if the result is called after the async operation

on 'rejection' is the function to be called if the 'reject' is called after the async operation

const on fulfillment = () => {

  console.log('set up the table to eat the pizza')
}

const onRejection = () => {

  console.log('we have no pizza, start cooking pasta')
}


callback functions are functions that are passed in as arguments to other functions, where are the other functions? the promise constructure function objects give us access to 2 methods or functions called 'then()' and 'catch()' or 'promise.then()' and 'promise.catch()' 

* promise status: pending to fulfilled? then() is excuted
* promise status: pending to rejected? catch() is excuted

promise.then(onFilfullment)
promise.catch(onRejection)

now we can pass dtata on these functions when they are called

const promise = new Promise((resolve, reject) => {
  setTimeout ( () => {
          // pizza is availble
          // change status from 'pending' to 'fulfilled'

        resolve('Bringing the Pizza') 

  }, 5000)

})

const promise = new Promise((resolve, reject) => {
  setTimeout ( () => {
          // pizza is NOT availble
          // change status from 'pending' to 'rejected'

        reject('Not bringing the Pizza, takeaway not open') 

  }, 5000)

})

const onFulFillment = (result) => {
  // resolve was called
  console.log(result)
  console.log('set up the table to eat the pizza')
}

const onRejection = (error) => {
  // reject was called
  console.log(error)
  console.log('we have no pizza, start cooking pasta')
}



*/