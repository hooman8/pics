import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID vOr9O2tX5GZL2sG65kaVtrv_YmATYGpU56GluGJE1LA",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
