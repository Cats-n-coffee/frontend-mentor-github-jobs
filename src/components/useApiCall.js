import { useEffect, useState } from 'react'

function useApiCall(filters, page) {
    const [jobs, setJobs] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    let { description } = filters;
    let { location } = filters;
    let { full_time } = filters;

    var urlTemplate = `https://cors.bridged.cc/https://jobs.github.com/positions.json`;
      
    var params = Object.keys(filters)
        .map(key => {
            if (filters[key] === '') {
                delete filters[key];
            }
            if (filters[key] === false) {
                delete filters[key];
            }
            if (filters[key] === true) {
                filters[key] = 'on';
            }

            return encodeURI(key) + '=' + encodeURI(filters[key])})
        .join('&');

    params = `?${params}`;
      
    urlTemplate = `${urlTemplate}${params}&page=${page}` ;


    console.log(urlTemplate, 'page', page)
    
    useEffect(() => {
        fetch(urlTemplate)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not find any job matching your criteria');
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setJobs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
        
    }, [description, location, full_time, page]);

    return { jobs, isPending, error }
}

export default useApiCall;