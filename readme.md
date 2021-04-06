# Whiteboard Wednesday - Array Helpers

## Please Read!

Your mission is to solve a problem we'll describe below.

But your _real_ mission is to prepare to help someone else solve it.

## Help Someone Else Solve It?!

Tomorrow you'll be interviewing someone, helping them through the process of solving this problem. So as you solve this, think through your process. You'll be able to use that to, with the benefit of hindsight, guide your partner through that same process.

Also... that same person will interview you too!

## Things To Think About As You Do This

- As an interviewer, you'll have to think about how YOU solved the problem.
- Remember that you won't be solving the problem for them, but helping guide them there.
- Think about what helped get you unstuck on this problem. They may get stuck in the same places!
- This will be an amazing learning experience for YOU, as a teacher--you'll need to understand the problem enough to help someone though it.
- Don't forget that tomorrow you can give _them_ the advice below!

## When you're getting interviewed tomorrow

- Talk through the problem - it's about the process, not the solution
- Don't give up
- Ask about edge cases - 0 and negative numbers and empty strings and multiple words and all that!
- Solve the problem, don't build the app
  - Don't sweat syntax
  - Pseudocode
  - Invent helper functions if necessary... you don't need to actually _write_ those functions! Just imagine a function to, say, check if a string is in another string, use it, and if you ever code it FOR REAL you could always write it then.

## The Problem You'll Be Doing Tonight (And Interviewing Someone On Tomorrow!)

You will extend the functionality of JavaScript's Array class with the following two methods:

`Array.sum` - sums all the numbers in an array
`Array.average` - averages all the numbers in an array

## Background

You can add methods to a class when you define it, like so:

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
```

Or, in JavaScript, you can add methods later, like so:

```javascript
Person.prototype.sayHi = function () {
  return this.firstName + ' says "Hi!"';
};
```

Arrays in JS are classes as well, and we can add a method to them if we want.

Once those methods are added, we can use them on _every single array we make_. So we'll be able to do this:

```javascript
const nums = [5, 10, 3, 6];
const average = nums.average();
average; // --> 6
```

Cool, huh?

This is called Monkey Patching, and as cool as it is, and as fun as it is to tell people its name, it is considered Very Bad Practice, as it changes what should be a common language (JavaScript) into a weird project-specific dialect.

Better practice is to create a function called `average` that takes in an array as a parameter. Much cleaner!

But for now: let's play with Monkey Patching!

## Basic Run-Through

- Assign `Array.prototype.sum` to be a function (see above example with `Person` for the syntax).
- Don't take in any arguments. Instead, you'll use `this`, which, in any method, is the object it's called on. So in the example above, in the call to `nums.average()`, `this` is the array `[5, 10, 3, 6]`.
- Iterate through `this`, summing up all the numbers, and `return` that sum.
- Now do the same for `Array.prototype.average`, BUT, this time, use your `sum` method you just declared, which you can access using `this.sum()`. Remember that it returns a value that you can use!
