seed-javascript
===============

A simple seed Javascript project backed by Jasmine and plain-old Javascript.


# Software used in the seed project

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) -- The Language
* [Jasmine](http://jasmine.github.io/2.2/introduction.html) version 2.2 -- A Behavior-Driven Testing framework


# How to use the seed project

You have the following two options to start your own project with the seed project.


## Option 1: You do not have a GitHub account -- clone the seed project

If you don't have a GitHub account, the simplest way is to just clone (i.e. checkout) the original seed project.
The only requirement is a local installation of [git](http://git-scm.com/) on your machine.

```
$ git clone git://github.com/josefsalyer/seed-javascript.git
```

Now you can start hacking away!

```
$ cd seed-javascript
# ...start coding...
```

## Option 2 (Recommended): You do have a GitHub account  -- fork the seed project

If you do have a GitHub account, I recommend that you fork the seed project.  Then start writing your own code
against your personal fork.

First, open the [seed project on GitHub](https://github.com/josefsalyer/seed-javascript) and fork it.
Then clone (i.e. checkout) your personal fork.

```
$ git clone git@github.com:YOURUSERNAME/seed-javascript.git
```

_Note: Make sure to replace `YOURUSERNAME` in the git URL above with the name of your GitHub user account._

Now you can start hacking away!

```
$ cd seed-javascript
# ...start coding...
```

# Using the project

## Write a test

In Jasmine, the tests are called specs.  Specs is short for specifications.  Create a new file in the *spec* directory with the following naming convention:

```
SOURCEFILESpec.js
```

_Note: make sure to replace SOURCEFILE with the name of the source file you are creating below._


## Write source code

Create a file in the src directory:

```
SOURCEFILE.js

```

This file should contain the source code that you create for your project.


## Add both source code and tests to the SpecRunner.html file

The easiest way to make sure that your spec files are testing your source files is to add them to the SpecRunner.html file in the locations specified.  Your source files must be included before their corresponding tests.

```
14  <!-- include source files here... -->
15  <script src="src/SOURCEFILE.js"></script>
16
17  <!-- include spec files here... -->
18  <script src="spec/SOURCEFILESpec.js"></script>
```


## About the Sample code and test

The sample code is very simple.  Inside Application.js there is a single method defined on an function declared at the top of the file.


```
function Application() {
}

Application.prototype.myFunction = function() {
  
  //this will fail because null does not equal undefined
  return;

  //this will pass!
  //return null;
  
};
```

If you load SpecRunner.html, it will show you that the single test inside of ApplicationSpec.js has failed.  To fix this failure, comment out the line with `return;` on it and uncomment the `return null;`.  Now reload the SpecRunner.html file and you will see that the test is passing.



