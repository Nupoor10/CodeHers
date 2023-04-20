import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './css/resources.css'
import { ImBooks } from "react-icons/im";

const ResourcesCard = (props) => {

    const { title, category, url } = props
    return(
        <div className='resources-card'>
            <h2><ImBooks />  {title} </h2>
            <h3>{category}  |  Link to view : <a href={url}>View</a></h3>
        </div>
    )
}

function Resources() {

    const [resources, setResources] = useState([])

    useEffect(() => {
        async function fetchResources() {
            try {
                const response = await axios.get("http://localhost:4040/api/resources/")
                const resources = await response.data.resources
                setResources(resources)
            }
            catch(error) {
                console.log(error)
            }
        }
        
        fetchResources()
    }, [])

    if(!resources) {
        return (
            <div>Loading...</div>
        )
    }

    else {
        return (
            <div className='resources-wrapper'>
                <h1>Resources</h1>
                <img className='resources-header-img' src='./images/resources.jpg'></img>
                <h2>Important resources to supplement your learning journey</h2>
                <div className='resources-component'>
                    {
                        resources.map(function(resource) {
                            return <ResourcesCard title ={resource.title} category={resource.category} url={resource.url}/>
                        })
                    }    
                </div>
            </div>
          )
    }

}

export default Resources