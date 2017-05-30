# 004 - DIRECTIVES

This example has the purpose of understand how to create and work with directives in AngularJS.

We are going to use for the layout [Angular Materials][1] and this project wants to cover the following subjects:

*  Directive types
*  Isolated scope
*  Prefixes to bind the parent scope’s methods and properties to the directive scope.

If you want more information about directives take a look of [Binding a Directive to a Controller][2].

### To Do
We want to create a bussines presentation card, so we want to see the preview of the card and see how it changes when the user inputs some custom fields.
* Create a `card` directive and bind the following variables
	* Icon
	* `background`
	* `color`
	* Title
	* Description
	* Hardcoded message
* Create two panels, one to edit the card and the other one to see the result of the card
* When user modify any field on the left panel the result should be seen automaticly in the right card panel
* Create a `&` atribute in the `scope` of the directive.
    * `bind` the callback of this attribute to the view controller
    * This should allow the user to mark the card as favorite from the right card panel
    * The result of the callback is a list in the view controller with the list of favorites cards

### Solution

As something consistent in my solutions is the file structure what I changed the first, so here I create a new directory
called `commons` where I placed another folder named `directives`, then I moved there the card directive.
After that I put the home folder inside `components`, also I had to change was the app.route and the card directive itself.

After setting the project I started working on the directive, I made it a directive restricted to an element, this element
receives some attributes attached to an isolated scope and then bind to the controller of the directive, the attributes are
card, reservedBy and finally a callback to save favourites function on parent's controller.

Last part was adding the function to save favourites in home's controller and to conclude I added to the home's page the
card directive and an iterator to print the list of favourites, tracked by index so it can allow multiple favourites with
the same name.

[1]: https://material.angularjs.org/latest/
[2]: https://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html