# 005 - Components 

The Purpose of this example it's to understand components both as a directive and as self contain view to use in routing

This example assume you already know about routing and directives. If you haven't is recommended that you check out [Routing][1] and [Directives][2]

Also you may want to read the [documentation][3] about Components in Angularjs

### To Do
Perform the following in the current example:
* Refactor all routes to use components instead:
  * Create all components files, don't forget the bindings
* Change the 'userCard' directive to a component

### Solution

Taking the second exercise as a base, I've updated the ui-router to version 1.0.0-beta3 which supports components in the routes.
Every route is defined separately in order to improve the reusability, also which component has its own folder with the elements it uses.
Additionally all components where moved into 'components' folder because this a new architecture based on components. Directives and factories where moved into 'commons' folder.

At this point I start changing the card directive to component, this didn't take to long because a few changes were necessaries at the HTML file.

I've done some refactor on the Auth factory in order to clean the code because it was using vm, being this element an essential part of controller but not in factories or services.

The latest thing was adding the component for user-list which was pretty simple and easy and then clean the route because the component will be on charge of binding the users to the controller.

If you want to see my solution, click [here][4].

[1]:https://github.com/talosdigital/u-angularjs/tree/master/002-routing-params-views
[2]:https://github.com/talosdigital/u-angularjs/
[3]:https://docs.angularjs.org/guide/component
[4]:https://github.com/jeanpi-gomez/u-angularjs/tree/solved/005-components/005-all-components