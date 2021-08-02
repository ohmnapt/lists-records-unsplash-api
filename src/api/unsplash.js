import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID JT3mwOkooiVuI2zscru7t7xUQgRx61i5dhxWegNfQP4',
        },

});