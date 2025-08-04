// Sending a GET request and processing the response

async function fetchDataFromApi() {
  try {
    // Sending a GET request to fetch data
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    // Checking if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Processing the response headers (for example, checking content type)
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();  // Convert the response body to JSON
      console.log('Fetched Post:', data);  // Log the fetched data (post content)
    } else {
      throw new Error('Response is not in JSON format');
    }
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// Fetch data from the API
fetchDataFromApi();
