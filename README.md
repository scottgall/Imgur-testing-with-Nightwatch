# Imgur-testing-with-Nightwatch
End-to-end testing of imgur.com with Nightwatch.js

## OBJECTIVE

To isolate and assess the functionality of common user interactions.  The tests aim to minimize reliance on styling/UI specific elements that may change in the future.

### NEW POST TEST
- Asserts user is redirected to `imgur.com/upload` after clicking `new post` button.
- Asserts user can upload an image and is redirected to the page with their new post.

Note: 

  When running the 'new post' test, only the image file upload interaction is tested, and not the image URL upload interaction.

  The image URL upload functionality is triggered when a user pastes a URL in the input field. Nightwatch's `.setValue()` command simulates typing when targeted on the input field, causing imgur to initiate the upload before the entire URL is typed out.  JavaScript can be used to set the value of the input field along with the `.keys()` command to trigger the image upload in Chrome. However, GeckoDriver does not seem to support the `.keys()` command, causing the test to fail in Firefox.  This part of the test has been commented out. 


### SEARCH IMAGES TEST
- Asserts user is redirected to `imgur.com/search?q=<search-term>` after entering a search term and clicking the `search` icon.
- Asserts headline on new page contains user's search term and the number of results.
- Asserts images are present, and that their description metadata matches the search term.

### RANDOM MODE TEST
- Asserts user is presented with new images after selecting the `random` filter.

#### RUNNING THE TESTS
`npm test` runs all tests in Chrome (ChromeDriver) and Firefox (GeckoDriver) sequentially.