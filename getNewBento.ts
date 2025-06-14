const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Muhammad%20Ridwan&g=codewithwan&x=code_with_wan&l=codewithwan&i=https%3A%2F%2Fcodewithwan.tech%2Fassets%2Fprofile.png&p=codewithwan.tech&z=857b4";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
