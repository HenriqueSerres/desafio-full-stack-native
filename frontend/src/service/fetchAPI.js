const URL = 'https://localhost:3001/';

const fetchAPI = async () => {
  const fetchURL = await fetch(URL);
  const response = await fetchURL.json();
  return response.results;
};

export default fetchAPI;
