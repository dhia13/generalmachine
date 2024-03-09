// Import Axios library
const axios = require("axios");

// Function to call an API using Axios
async function submitContact(url) {
  try {
    // Making a GET request to the specified URL
    const response = await axios.get(url);

    // Returning the data received from the API
    return response.data;
  } catch (error) {
    // Handling errors, you can customize this part according to your needs
    console.error("Error fetching data from API:", error);
    throw error;
  }
}

// Exporting the function to make it accessible in other modules
module.exports = submitContact;
