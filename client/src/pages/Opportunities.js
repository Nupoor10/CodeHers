import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './css/opportunities.css'
import { MdDescription } from "react-icons/md";
import { RiTimerFlashFill } from "react-icons/ri";
import { BiLinkAlt } from "react-icons/bi";

const OpportunityCard = (props) => {

    const { title, description, deadline, link } = props
    return(
        <div className='opportunity-card'>
            <h2>{title}</h2>
            <h3><MdDescription />{description}</h3>
            <h4><RiTimerFlashFill />{deadline}</h4>
            <h4><BiLinkAlt />Link to apply : <a href={link}>APPLY HERE</a></h4>
        </div>
    )
}

function Opportunities() {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        async function fetchJobs() {
            try {
                const response =  await axios.get("http://localhost:4040/api/jobs/")
                const opportunities = await response.data.jobs
                setJobs(opportunities)
            }
            catch(error) {
                console.log(error)
            }
        }
        
        fetchJobs()
    }, [])

    if(!jobs) {
        return (
            <div>Loading...</div>
        )
    }

    else {
        return (
            <div className='opportunity-wrapper'>
                <h1>Opportunities</h1>
                <img className='opportunity-header-img' src='./images/opportunity (2).jpg'></img>
                <h2>We have curated a list of the most recent opportunities in the tech sector to help you build your career</h2>
                <div className='opportunity-component'>
                    {
                        jobs.map(function(jobs) {
                            return <OpportunityCard title ={jobs.title} description={jobs.description} deadline={jobs.deadline} link ={jobs.link}/>
                        })
                    }    
                </div>
            </div>
          )
    }

}

export default Opportunities