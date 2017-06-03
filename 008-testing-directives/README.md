# 008 - Testing Directives

The Purpose of this example it's to teach you how to test directives that use Templates Urls, we are going to work with the previous example of [Directives][1] and we are going to cover the following concepts:

*  Karma Preprocessor
*  `$templateCache`

### To Run Tests

* `gulp test` will build the tests of the app.
* coverage test result can be found in: `/coverage/PhantomJs***/index.html`

### To Do

* Use `$templateCache` to cache the card template.
* Test card with empty params
* Test card with fields using `.find`
* Test Controller

### Solution

To cover this exercise the only 2 necessary things are knowing how to use $templateCache and how to do a wait with $timeout.

First we have $templateCache, first we do a get to the original templateUrl to have the template, then we replace the original template with the mock using put.
After that we need to create a variable for the template we are going to use, in this template we passed the attributes that the directive will use to bind the data, also I include an outer div before the directive to catch properly the class for the card directive.
Also it's necessary compile this need template so it can be render and processed with the data in it.

Using .find() I was able to access to properties inside the element that we compile before.
Finally we need to use $timeout to wait until the styles with ng-style are injected to the elements, also I used $timeout.flush() to finish the timeouts that are pending to be executed because in the unit testing the $timeout injected is a mock so it doesn't work as it should work in Javascript.

CardController didn't required a spec file because it was tested through the diretive. For HomeController was necessary add some test for the functions, now the code coverage should be 100%.

Take a look of my solution [here][2].

[1]:https://github.com/talosdigital/u-angularjs/tree/solved/004-directives/004-directives
[2]:https://github.com/jeanpi-gomez/u-angularjs/tree/solved/008-testing-directive/008-testing-directives