import axios from "axios";
let key = 'AIzaSyB1sSv_xyWqqyxqS5gUTWD326sKfmcHNVo';

const getPlaylist = async (playlistId, pageToken="", result =[])=>{


    const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet,status&playlistId=${playlistId}&maxResults=50&pageToken=${pageToken}`

    const {data}= await axios.get(URL)

    result  = [...result, ...data.items]

    if(data.nextPageToken){
        result =  getPlaylist(playlistId, data.nextPageToken, result);
    }

    return result;
}

export default getPlaylist