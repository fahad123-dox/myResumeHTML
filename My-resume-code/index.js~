let counterElement = document.getElementById("visit_counting_numbers");

<<<<<<< HEAD
// Function to fetch the current visitor count from the API
var callAPI = () => {
    // Instantiate a Headers object
    var myHeaders = new Headers();
    // Add Content-Type header to the request
    myHeaders.append("Content-Type", "application/json");

    // Create a requestOptions object with parameters for the API call
    var requestOptions = {
        method: 'POST',  // Using POST as you mentioned in your setup
=======
// callAPI function to fetch the current visitor count from the API
var callAPI = () => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");

    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'GET',  // Using GET 
>>>>>>> 85f849db4982998621585f52a9c0081d8587e14f
        headers: myHeaders,
        redirect: 'follow'
    };

    // make API call with parameters and use promises to get response
<<<<<<< HEAD
    fetch("https://xxxxxxxxxxxxx/xxxxxxxxxxxxxxxxx/xxxxxxx", requestOptions)
=======
    fetch("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", requestOptions)//Note: If anyone wants to use my template than rember to replace these xxx.. with your real aws REST API Endpoint
>>>>>>> 85f849db4982998621585f52a9c0081d8587e14f
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
<<<<<<< HEAD
            return response.json();
        })
        .then(result => {
            counterElement.innerHTML = result.count;  // Corrected this line
        })
        .catch(error => console.log('Error:', error));
};

// Call the API to update the counter when the page loads
=======
            return response.json();  // Parse the JSON response body
        })
        .then(result => {
            // Parsing the body because it is returned as a string
            const parsedBody = JSON.parse(result.body);  // Convert the stringified body to an object
            counterElement.innerHTML = parsedBody.count;  // Update the counter on the page
        })
        .catch(error => console.log('Error:', error));  // Log any errors
};

// Call the API to update the counter on page load
>>>>>>> 85f849db4982998621585f52a9c0081d8587e14f
callAPI();
