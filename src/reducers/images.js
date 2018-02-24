
 const images = (initialState = null , payload)=>{
    switch(payload.type){
        case "FETCH_IMAGES":
        return {...initialState, images: payload.data }

        case "CLEAR_CURRENT_IMAGE":
        return {...initialState, currentlyDisplayed: ""}
        
        case "DISPLAY_THIS_IMAGE":

        const imageToFind = initialState.images.filter((image)=>{
            if(image.id === payload.data){
                return image
            }else{
                return ""
            }
        })
        return {...initialState, currentlyDisplayed: imageToFind[0].url }

        default:
        return initialState
    }
}

export default images;