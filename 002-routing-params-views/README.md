# 002 - Routing, Params and Views 

The Purpose of this example it's to understand a more depth routing system, involving params and views, those are the following concepts that we want to cover:

* Routes one file or many? `$stateProvider`
* Abstract states `abstract:true`
* Views `ui-view`
* Sending params `$stateParams`

There is information about [Multiple Named Views][1] and [Parent and Abstract States][2], take a look of this documentation to get a clearer concept about views and routes.

### To Do
Perform the following in the current example:
* Create an `abstract` state for the `dashboard` module, with the following views:
  * Config, use `resolve` in this state to load a `configuration.json` file.
  * Detail, use `params` to send the detail component wanted.
  * Main, dashboard view.

* Create a `navbar` to navigate in the pages:
   * Show the current user name.
   * Show a logout button.
   * Should be a directive.
   * Use authFactory to get the login data.
   * Use `ui-view` to show, depending of the `dashboard` state.

* If the user is already logged in page should not allow him to see login or signin page.

### Solution
Taking the previous exercise as a base, I took the navbar form inside header component and put it as an element directive to use it in the header component.
At this point we went into the dashboard component and start upgrading this component, first of all making the dashboard state as abstract, then adding the 3 new components, Main / Config / Details.
Then in the Config component route I use $http provider to get a json file inside assets/data in order to loads it in the resolve and passes it to the controller thanks to the binding.

In commons folder I add a directory named directives where navbar directive is and another called factories where I moved the Auth factory.

The lastest thing was adding a new abstract state called auth to hold login and sign-up components.

Between auth and dashboard there's a validation to redirect the user to the other one depending on if he's logged into the system.

If you want to see my solution, click [here][3].

### Next
* 003 - Communicating with servers.

[1]:https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views
[2]:https://github.com/angular-ui/ui-router/wiki/Nested-States-and-Nested-Views
[3]:https://github.com/jeanpi-gomez/u-angularjs/tree/solved/002-routes-params-views/002-routing-params-views