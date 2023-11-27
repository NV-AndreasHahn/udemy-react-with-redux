import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID S84lj1-Y_KB7eVYytmVRBCFNMKcvnw9Ld4EDEqAbMfs'
        },
        params: {
            query: term
        }
    });
    console.log(response)
    return response.data.results;
};

export default searchImages;