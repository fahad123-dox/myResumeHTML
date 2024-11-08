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

    // make API call with parameters and use promises to get response
    fetch("https://xxxxxxxxxxxxx/xxxxxxxxxxxxxxxxx/xxxxxxx", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(result => {
            counterElement.innerHTML = result.count;  // Corrected this line
        })
        .catch(error => console.log('Error:', error));
};

// Call the API to update the counter when the page loads
callAPI();
