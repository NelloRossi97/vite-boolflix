import { reactive } from 'vue';

export const store = reactive({
    cardsList: [],
    baseUrl: 'https://api.themoviedb.org/3/',
    endpoint: '',
    searchMovie: 'search/movie',
    api_key: '?api_key=e60b86b9c8b2fb1e858ded1ab6ecab1b'
})