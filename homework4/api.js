const BASE_URL = "https://api.zippopotam.us/us/";

async function getStateAndCityFromZipcode(zipcode) {
  let url = BASE_URL + zipcode;
  try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
