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

export const fetchVideos = async (phrase) => {
    const { data } = await axios.get(`${BASE_URL}/search?part=snippet&q=${phrase}`, options)

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

export const fetchVideoDetail = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/videos?part=snippet,statistics&id=${id}`, options)

    return data.items[0];
}

export const fetchRelatedVideos = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/search?part=snippet&relatedToVideoId=${id}&type=video`, options)

    return data.items;
}