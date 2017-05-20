# 001 - Project File Structure

The Purpose of this example it's to understand how to set up a robust file structure for an Angular Project, [LIFT][1] principles:

* Locating our code is easy
* Identify code at a glance
* Flat structure as long as we can
* Try to stay DRY (Don’t Repeat Yourself)

For More information about Applications Structure [here][2]

### To Do
Perform the following in the current example:
* Create a login page.
* Create a Dashboard page after sign in up.

### Solution
Just to start working on this exercise I've updated the ui-router to 1.0.0-beta.3 because that version already supports components in routers,
this a good practise if you want to modularise your project, also allows you to have a component's pool to get any previous
component that you had made and it can be reused in another project just as it is or adding some modifications.
Basically we have 3 major components, Login / Dashboard / App.
Also we have separately components for the layout of the application, one component for header and another for footer.

In commons folder is the place for those thing we are going to use no matter the component or view. e.g. Services, Filters, Directives, Factories, Utils, etc.
Also we have a basic service for login, in this one you can access to login and logout functions to manage your session.
I used $localStorage to make persistent the login data across the browser session.

I decided to go with independently routes for each component, in this way it's more flexible and reusable.
In dashboard and login routes I used the resolves to check if the user is already login or if he doesn't to allow the transition.

If you want to see my solution, click [here][3].

### Next
* [002 - States, views and params][4]

 [1]: http://bguiz.github.io/js-standards/angularjs/application-structure-lift-principle/
 [2]: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#style-y150
 [3]: https://github.com/jeanpi-gomez/u-angularjs/tree/solved/001-file-structure/001-project-file-structure
 [4]: https://github.com/talosdigital/u-angularjs/tree/master/002-routing-params-views