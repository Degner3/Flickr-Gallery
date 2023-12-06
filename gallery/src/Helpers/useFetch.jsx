import { useEffect, useState } from "react"



export const useFetch = (_url) => {

    const [data, setData] = useState()
    const [error, setError] = useState()

    const fetchData = async (url) => {
        
        // console.log("fetch");

        try {
            let res = await fetch(url)
            let data = await res.json();
            setData(data)
            
        }

        catch (error) {
            setError(error)
        }

    }

    useEffect(() => {
        // console.log("effect");
        fetchData(_url)
    }, [_url])

    return {data, error}

}