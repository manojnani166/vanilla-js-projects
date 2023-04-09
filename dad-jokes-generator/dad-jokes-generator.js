// Get DOM elements
const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

// API configuration
const apiKey = "A/XZVJmCm3AWPKtpH40zhg==YhtbRrSa3xql1YPR";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

// Function to get a joke from the API
async function getJoke() {
  try {
    // Update UI to show loading state
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    // Call the API and parse the response
    const response = await fetch(apiURL, options);
    const data = await response.json();

    // Update UI to show the joke
    jokeEl.innerText = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";
  } catch (error) {
    // Handle errors
    jokeEl.innerText = "Error! Please try again.";
    console.log(error);
  }
}

// Attach event listener to the button
btnEl.addEventListener('click', getJoke);
