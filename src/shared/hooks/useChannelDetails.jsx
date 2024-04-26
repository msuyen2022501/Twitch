import { useState } from "react";
import toast from "react-hot-toast";
import { getChannelDetails as getChannelDetailsRequest } from "../../services";
 
export const useChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState()
 
    const getChannelDetails = async (id) => {
        const responseData = await getChannelDetails(id)
 
        if(responseData.error){
            return toast.error(
                responseData.a?.response?.data || 'Error al cargar la información del canal'
            )
        }
 
        setChannelDetails(responseData)
    }
    return{
        channelDetails,
        isFetching: !channelDetails,
        getChannelDetails
    }
}