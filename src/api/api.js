import axios from "axios";
export const BACKEND_ENPOINT="https://qtify-backend-labs.crio.do/albums/top";

// function to get the Top-albums data from backend api
export const fetchTopAlbums=async()=>{
    try{
        const res= await axios.get(`${BACKEND_ENPOINT}/albums/top`);
        // console.log(res.data);
        // return res.data;
        if (res.status !== 200) {
            console.error("Unexpected status code:", res.status);
            return null;
        }
        console.log("Top Albums Data:", res.data);
        return res.data;
    }
    catch(error){
        // console.log(error);
        console.error("Error fetching top albums:", error.response ? error.response.data : error.message);
        return null;
    }
    
}

// function to get the New-albums data from backend api
export const fetchNewAlbums=async()=>{
    try{
        const res= await axios.get(`${BACKEND_ENPOINT}/albums/new`);
        console.log(res.data);
        return res.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
    
}

export const fetchSongs=async()=>{
    try{
        const res=await axios.get(`${BACKEND_ENPOINT}/songs`)
        return res.data;
    }
    catch(error){
        return null;
    }
}