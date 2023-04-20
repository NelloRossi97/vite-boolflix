import { reactive } from 'vue';

export const store = reactive({
    filmList: [],
    baseUrl: 'https://api.themoviedb.org/3/',
    endpoint: { movie: 'search/movie', tv: 'search/tv' },
    params: {
        api_key: 'e60b86b9c8b2fb1e858ded1ab6ecab1b',
        query: ''
    }
    
})