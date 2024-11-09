export const fetchPodcasts = async () => {
  try {
    const response = await fetch('https://podcast-api.netlify.app');
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch podcasts:", error);
    return null; // Return null if fetching fails
  }
};