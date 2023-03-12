//Import supabase from static/js
import {
    supabase
} from '/js/supabase.js';

//Fetch data from the Players array, store the objects in an array and sort the array by points
export const fetchPlayers = async () => {
    const {
        data,
        error
    } = await supabase.from("Players").select("*");
    if (error) {
        console.log("error", error);
    } else {
        // console.log("data", data);
        const playersArray = Object.keys(data).map((key) => data[key]);
        const sortedPlayers = playersArray.sort((a, b) => b.points - a.points);
        return sortedPlayers;
    }
};
