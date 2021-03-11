import React, { useState, useRef } from 'react'

const Filters = ({ addFilters, removeFilters }) => {

    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [fullTime, setFullTime] = useState(false);
    const [userfilters, setUserFilters] = useState({ description: '', location: '', full_time: false })

    const descriptionRef = useRef('');
    const locationRef = useRef('');

    const validateTitle = (userInput) => {

    }

    // const searchByDescription = (e) => {
    //     e.preventDefault();

    //     setUserFilters({ ...userfilters, description: descriptionRef.current.value});
    //     setDescription('');
      
    //     addFilters({...userfilters, description: descriptionRef.current.value})
    // }

    const searchRefined = (e) => {
        e.preventDefault();
        
        setUserFilters({ ...userfilters, description: descriptionRef.current.value, location: locationRef.current.value, full_time: fullTime});
        setDescription('');
        setLocation('');
        setFullTime(false);

        addFilters({ ...userfilters, description: descriptionRef.current.value, location: locationRef.current.value, full_time: fullTime})
    }

    return ( 
        <div>
            <form onSubmit={searchRefined}>
                <div className="form-section">
                    <label htmlFor="search-title"></label>
                    <input
                        ref={ descriptionRef } 
                        type="text" 
                        id="search-title" 
                        placeholder="Filter by title..."
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }
                        />
                    <div>
                        <svg className="mobile-filters-toggle" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z" fill="#6E8098" fillRule="nonzero"/>
                        </svg>
                        <button 
                            type="submit"
                            className="search-title-button"
                            // onClick={ searchByDescription }
                            >
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fillRule="nonzero"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mobile-filters">
                    <div className="form-section"> 
                        <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 24">
                            <path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" fillRule="nonzero"/>
                        </svg>
                        <label htmlFor="search-location"></label>
                        <input
                            ref={ locationRef } 
                            type="text" 
                            id="search-location" 
                            placeholder="Filter by location..."
                            value={ location }
                            onChange={ (e) => setLocation(e.target.value) }/>
                    </div>
                    <div className="form-section">
                        <div>
                            <input 
                                type="checkbox" 
                                name="full-time" 
                                id="search-full-time"
                                checked={ fullTime }
                                onChange={ () => setFullTime(!fullTime)}/>
                            <label htmlFor="search-full-time">Full Time Only</label>
                        </div>
                        <div>
                            <button 
                                type="submit"
                                >
                                    Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default Filters;