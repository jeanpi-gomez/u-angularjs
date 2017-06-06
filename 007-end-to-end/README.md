# 007 - end to end

This example it's to understand how to create a simple end to end test using protractor. We are going to cover the following subjects:

*  End to end tests
*  Protractor

### To Do
Perform the following in the current example:
* Fill all form filds with right values
* Test the data into the form is the same than data in directive card
* Test favorite list is more than 1 element

### Solution

For this solution the first thing was renaming the files because we are testing home view and not main view.

Then I tried to get all elements present in the page by model, css avoiding xpath due to the lack of stability when using xpath locator. After having the elements from the page I created some functions to add a favourite or set some text into a specific field, this is because it allows a better separation between the page object and the spec file.

Finally in the spec file I added a function to convert rgba colors into hex color in order to compare the color values. All I do in the spec file is calling functions in the page object that has almost the whole logic to send values to the page or press some buttons.
Also I got access to the elements in the directive so I can know what is the value of each field to compare it with the initial data sent with function fillForm.
