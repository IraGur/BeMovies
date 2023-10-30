// Step 1 - Search Swiper
/* Instructions
 - Create a movie card template(for swoper). It will be a function, that will take 'options' object as argument,
   and will return a string of html template literal. Values used in the card (e.g. movie name, year) will be passed
   through the optons object. For example 'options.movieName'
 - Create a function 'loadSearchResults'. Inside the funtion do the following step by step:
    1) create variables and asign all required elements to the (e.g. search-result section, search-results section, swiper-wrapper)
    2) create a variable 'data' which using 'fetch' function will get search data from API (e.g. const data = await fetch(#API_URL_HERE))
    3) add forEach method to 'data.reslts' array, and use previously create template function to insert movie card to 'swiper-wrapper'. Use += operator. 
    4) remove 'hidden' class from 'search-result'
 - Create 'onSearchClick' function (!!! outside of 'loadSearchResults') and add this function to search button in html using 'onclick=onSearchClick()' attribute.


 TIPS: 
 - after creation of variables in any functions add console.log('This is my variable', myVariable) after each, so you can check if you have required value
 - always check error in console
 - Do not chain the code, meaning asign everything to a variable then perform oparation on that variable.
    - Good example:
    const myElement = document.querySelector('.myElement');
    myElement.classList.remove('someClass');
    - Bad example (with chaining)
    document.querySelector('.myElement').classList.remove('someClass');
 - Use google to find only individual something that you don't know to make / get. Not ready soltions written by someone. Also make search properly, like if you would ask a person:
    - Good example:
        - How to get element from DOM, and assingn it to variable using JavaScript
        - How to create async / await function to fetch data from server
    - Bad example:
        - element DOM variable JavaScript
        - async / await function data server
    myElement.classList.remove('someClass');
*/

// Step 2 - Latest Swiper
// Step 3 - Genres Swiper
// Step 4 - Modal
// Step 5 - Sign up form

// FUNCTIONALY FOR STEP 1 - START //

// write your code here

// FUNCTIONALY FOR STEP 1 - FINISH //
