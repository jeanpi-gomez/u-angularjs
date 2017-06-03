# 006 - Basic Testing

The Purpose of this example it's to help you understand the basic concepts about unit testing, in this example we are going to work with [`karma`][1] as our test runner and [`jasmine`][2] to write our tests, using our previous example [003 - Servers and Maps][3] as starting point we are going to cover:

*  Testing Services
*  Testing Controllers
*  Setup Jasmine with Karma
*  Coverage Report

### To Run Tests

* `gulp test` will build the tests of the app.
* coverage test result can be found in: `/coverage/PhantomJs***/index.html`

### To Do
Before of getting started please take a look of jasmine [documentation][4] if you don't have previous experience with tests:
* Create a test for the Service `WeatherFactory`
* Create a test for the Controller `WeatherController`
* We need 100% of coverage test result

### Solution

First of all, I did some refactor on the WeatherFactory to remove the vm variable. Then I started doing some test cases for that factory, so I included $httpBackend to run some fake calls to the endpoints.
Also I mocked some data from the API and put it in the responses to check if that was being retrieve.

Then I moved into DialogController, this one was easy because it only require one set of data that is mocked in every test case (it) because it doesn't have methods or function so it just run the controller logic as soon as it is called.

Finally for the WeatherController it was necessary inject some elements including $log, $mdDialog for the modal from material, $q to mock the responses of the functions in the WeatherFactory.
After that I split the test cases into 2 mainly describes `getWeather` and `getUV`, inside this describes the describes are classify as happy path first and then the two alternative paths that can happen.

Take a look of my solution  [here][5].

[1]:https://karma-runner.github.io/1.0/index.html
[2]:https://jasmine.github.io/pages/docs_home.html
[3]:https://github.com/talosdigital/u-angularjs/tree/master/003-servers-and-maps
[4]:https://jasmine.github.io/2.5/introduction
[5]:https://github.com/jeanpi-gomez/u-angularjs/tree/solved/006-basic-unit-testing/006-basic-testing