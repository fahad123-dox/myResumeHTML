let counterElement = document.getElementById("visit_counting_numbers");

// callAPI function to fetch the current visitor count from the API
var callAPI = () => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");

    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'GET',  // Changed to GET since you're not sending data
        headers: myHeaders,
        redirect: 'follow'
    };

    // make API call with parameters and use promises to get response
    fetch("https://9gxsw6cj3g.execute-api.ap-south-1.amazonaws.com/dev", requestOptions)
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

// Call the API to update the counter on page load
callAPI();
