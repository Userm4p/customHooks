import React, { useEffect, useRef, useState } from 'react'



export const useFetch = (url) => {
    

    const isMounted = useRef(true);
    const [state1, setState] = useState({
        loading: true,
        error: null,
        data:null
    })

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, []) 

    useEffect(() => {

        setState({data:null, loading:true, error:null})
      
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setTimeout(() => {

                    if (isMounted.current){
                        setState({
                            loading: false,
                            error: null,
                            data
                        });  
                    }
                }, 0); 
            });
    }, [url])

    
    return state1;
}
