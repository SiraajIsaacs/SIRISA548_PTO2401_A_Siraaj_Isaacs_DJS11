// const BASE_URL = "https://podcast-api.netlify.app";

export const fetchPreviews = async () => {
    const response = await fetch("https://podcast-api.netlify.app");
    return response.json();
};

export const fetchGenre = async (id) => {
    const response = await fetch(`${"https://podcast-api.netlify.app"}/genre/${id}`);
    return response.json();
};

export const fetchShow = async (id) => {
    const response = await fetch(`${"https://podcast-api.netlify.app"}/id/${id}`);
    return response.json();
};

export const fetchShowById = async (id) => {
    try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetching show by ID failed:", error);
        return null;
    }
};
