import axios from 'axios';

// Make sure the URL is correct
const BASE_URL = 'http://localhost:3001';

const getDataFromServer = () => {
    return axios.get(`${BASE_URL}/items`)
        .then(response => response.data);
};

const pushDataFromUser = (newPurchase) => {
    return axios.post(
        `${BASE_URL}/items`,
        newPurchase,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(response => response.data);
};

export { 
    getDataFromServer,
    pushDataFromUser 
};
