import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.weatherbit.io/v2.0',
    headers: {
        Authorization: 'Bearer 263e615e957346f1a1b57c8c24e16b6d'
    }
});