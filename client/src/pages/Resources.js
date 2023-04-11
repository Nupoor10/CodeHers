import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './css/resources.css'
import { ImBooks } from "react-icons/im";

const ResourcesCard = (props) => {
    return(
        <div className='resources-card'>
            <h2><ImBooks />  {props.title} </h2>
            <h3>{props.category}  |  Link to view : <a href={props.url}>View</a></h3>
        </div>
    )
}

function Resources() {

    const [resources, setResources] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4040/api/resources/").then(
            res => {
                const resources = res.data.resources
                console.log(resources)
                setResources(resources)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
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