let counterElement = document.getElementById("visit_counting_numbers");

// Function to fetch the current visitor count from the API
var callAPI = () => {
    // Instantiate a Headers object
    var myHeaders = new Headers();
    // Add Content-Type header to the request
    myHeaders.append("Content-Type", "application/json");

    // Create a requestOptions object with parameters for the API call
    var requestOptions = {
        method: 'POST',  // Using POST as you mentioned in your setup
        headers: myHeaders,
        redirect: 'follow'
    };

    // Make the API call with the specified options and handle the response
    fetch("https://xxxxxxx/xxxxxxxxxxxxxxxx/xxxxxxxxxxxx/xx", requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();  // Parse the JSON response
    })
    .then(result => {
        console.log('API Response:', result);  // Log the response for debugging
        
        // Parse the body string to JSON and then update the counter with the count value
        let parsedBody = JSON.parse(result.body);
        counterElement.innerHTML = parsedBody.count;  // Update the counter with the count value from the API response
    })
    .catch(error => console.log('Error:', error));
};

// Call the API to update the counter when the page loads
callAPI();
