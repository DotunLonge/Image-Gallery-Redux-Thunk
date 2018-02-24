import axios from 'axios';

function loop(callback, number = 1, startArray = [] ){
    if(number === 2){
        console.log(startArray);
        callback(startArray)
      }else{
          number++;
          const axiosRequest = axios.get("http://www.splashbase.co/api/v1/sources/" + number)
          axiosRequest.then(( {data} )=>{
            const {images} = data;
            const concat = startArray.concat(images);
            return loop(callback,number, concat);
        })
    }
}



export function fetchImages(){
    return ( dispatch ) => {
        loop((data)=>{
            dispatch({ type: "FETCH_IMAGES", data: data})        
        });
    } 
}

export function display( Id ){
    return { type: "DISPLAY_THIS_IMAGE", data: Id }
}

export function clearImage(){
    return {type: "CLEAR_CURRENT_IMAGE" }
}

