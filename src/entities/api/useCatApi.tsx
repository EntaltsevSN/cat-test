import type { UseCat } from "../model/types";

function useCatApi({ getCat }: Pick<UseCat, 'getCat'>) {
  const API_KEY = 'live_ZdV7U1z8q8s0d6UNmpx9KHPIJfw5YY5MrqHdq6F5SYFgd2DzsDZ6UOs2R0VgoziK';
  const URL_WITH_API_KEY = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`;

  async function fetchCat() {
    try {
      const response = await fetch(URL_WITH_API_KEY);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      getCat(data.shift());
      return;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return {fetchCat}
}

export default useCatApi;