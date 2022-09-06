import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YT_API_Key,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchVideos = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data;
}

export const fetchChannel = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/channels?part=snippet&id=${id}`, options)

    return data;
}

export const fetchChannelVideos = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/search?channelId=${id}&part=snippet%2Cid&order=date`, options)

    return data;
}