import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './css/events.css'
import { MdDescription, MdAccessTimeFilled, MdPlace } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { BsFillCalendar2EventFill } from "react-icons/bs";

const EventsCard = (props) => {

    const { src, date, month, title, description, timing, venue, link } = props

    return(
        <div className='events-card'>
            <img src={src} alt="event-image"></img>
            <div className='events-card-details'>
                <div className='events-date'>
                    <p><BsFillCalendar2EventFill />{date}</p>
                    <p>{month}</p>
                </div>
                <div className='events-details'>
                    <h1>{title}</h1>
                    
                </div>
            </div>
            <div>
                <h3><MdDescription />{description}</h3>
                <h4><MdAccessTimeFilled />{timing}</h4>
                <h4><MdPlace />{venue}</h4>
                <h4><BiLinkAlt />Register on Evenbrite: <a href={link} target="_blank" rel="noreferrer">Reserve A Spot</a></h4>
                <p>More information regarding the event can be found on the link above👆</p>
            </div>
        </div>
    )
}

function Events() {

    const [events, setEvents] = useState([])

    useEffect(()=> {
        async function fetchEvents() {
            try {
                const response = await axios.get("http://localhost:4040/api/events/")
                const events = await response.data.events
                setEvents(events)
            }
            catch(error) {
                console.log(error)
            }
        }
        
        fetchEvents()
    }, [])

    if(!events) {
        return (
            <div>Loading...</div>
        )
    }

    else {
        return (
            <div className='events-wrapper'>
                <h1>Events</h1>
                <img className='events-header-img' src='./images/events.jpg'></img>
                <h2>We bring to you a wide variety of virtual events, talks and seminars from the most prominent people in the industry</h2>
                <div className='events-component'>
                    {events.map((event) => {
                        return <EventsCard src={event.imgsrc} date={event.date} month={event.month} title={event.title}
                            description={event.description} timing={event.timing} venue={event.venue} link={event.link}
                        />
                    })}  
                </div>
            </div>
          )
    }
}

export default Events