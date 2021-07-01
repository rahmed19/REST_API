/**
 * Challenge: GET all the comments from the blog post with ID of 2 and log to the console
 * 
 * BaseURL: https://apis.scrimba.com/jsonplaceholder/
 * Endpoint: ??? (Check JSON Placeholder docs: https://jsonplaceholder.typicode.com/guide/ and look for the "Listing nested resources" section)
 */

fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=vancouver")
    .then(res => res.json())
    .then(data => console.log(data.city))
