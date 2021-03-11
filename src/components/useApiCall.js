import { useEffect, useState } from 'react'

function useApiCall({ description, location, full_time }) {
    const [jobs, setJobs] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    var urlTemplate = `https://cors.bridged.cc/https://jobs.github.com/positions.json`;

    let descriptionParam = ``;
    let locationParam = ``;
    let fullTimeParam = ``;

    if (description !== '' && /^[A-Za-z]+$/.test(description)) {
        descriptionParam = `description=${description}`;
    }
    if (location !== '') {
        locationParam = `location=${location}`;
    }
    if (full_time !== false) {
        console.log(full_time)
        fullTimeParam = `full_time=on`;
    }

    if (descriptionParam !== '' && locationParam === '') {
        urlTemplate += `?${descriptionParam}`;
    }
            
    if (descriptionParam === '' && locationParam !== '') {
        urlTemplate += `?${locationParam}`;
    }

    if (descriptionParam !== '' && locationParam !== '') {
        urlTemplate += `?${descriptionParam}&${locationParam}`;
    }

    if (descriptionParam === '' && locationParam === '' && fullTimeParam !== '') {
        urlTemplate += `?${fullTimeParam}`;
    }

    if ((descriptionParam !== '' || locationParam !== '') && fullTimeParam !== '') {
        urlTemplate += `&${fullTimeParam}`;
    }


    console.log(urlTemplate)
    
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
        
    }, [description, location, full_time]);

    return { jobs, isPending, error }
}

export default useApiCall;