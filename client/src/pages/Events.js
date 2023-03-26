import React from 'react'
import './css/events.css'
import { MdDescription, MdAccessTimeFilled, MdPlace } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { BsFillCalendar2EventFill } from "react-icons/bs";

const EventsCard = (props) => {
    return(
        <div className='events-card'>
            <img src={props.src} alt="event-image"></img>
            <div className='events-card-details'>
                <div className='events-date'>
                    <p><BsFillCalendar2EventFill />{props.date}</p>
                    <p>{props.month}</p>
                </div>
                <div className='events-details'>
                    <h1>{props.title}</h1>
                    
                </div>
            </div>
            <div>
                <h3><MdDescription />{props.description}</h3>
                <h4><MdAccessTimeFilled />{props.timing}</h4>
                <h4><MdPlace />{props.venue}</h4>
                <h4><BiLinkAlt />Register on Evenbrite: <a href={props.link} target="_blank" rel="noreferrer">Reserve A Spot</a></h4>
                <p>More information regarding the event can be found on the link above👆</p>
            </div>
        </div>
    )
}

function Events() {
  return (
    <div className='events-wrapper'>
        <h1>Events</h1>
        <img className='events-header-img' src='./images/events.jpg'></img>
        <h2>We bring to you a wide variety of virtual events, talks and seminars from the most prominent people in the industry</h2>
        <div className='events-component'>
            <EventsCard src="https://i.ibb.co/NW4qCCw/pexels-pavel-danilyuk-8761541.jpg" date="3" month="April" 
            title ="Women in Tech MENA Awards 2023" description="The Women in Tech® MENA Forum and Awards will be held at the Sharjah Research Technology and Innovation Park."
                timing="10 h 00 min - 17 h 00 min" venue = "Online" link="https://www.eventbrite.com/e/mumbai-startup-mixer-networking-pitch-event-tickets-593765607917?aff=ebdssbcitybrowse"
            />
            <EventsCard src="https://i.ibb.co/NW4qCCw/pexels-pavel-danilyuk-8761541.jpg" date="3" month="April" 
            title ="Women in Tech MENA Awards 2023" description="The Women in Tech® MENA Forum and Awards will be held at the Sharjah Research Technology and Innovation Park."
                timing="10 h 00 min - 17 h 00 min" venue = "Online" link="https://www.eventbrite.com/e/connect-masters-event-mumbai-tickets-524417806777?aff=ebdssbcitybrowse&keep_tld=1"
            />
            <EventsCard src="https://i.ibb.co/NW4qCCw/pexels-pavel-danilyuk-8761541.jpg" date="3" month="April" 
            title ="Women in Tech MENA Awards 2023" description="The Women in Tech® MENA Forum and Awards will be held at the Sharjah Research Technology and Innovation Park."
                timing="10 h 00 min - 17 h 00 min" venue = "Online" link="https://www.eventbrite.com/e/100-successful-women-in-business-convention-awards-2023-mumbai-india-tickets-483980748447?aff=ebdssbcitybrowse"
            />
            <EventsCard src="https://i.ibb.co/NW4qCCw/pexels-pavel-danilyuk-8761541.jpg" date="3" month="April" 
            title ="Women in Tech MENA Awards 2023" description="The Women in Tech® MENA Forum and Awards will be held at the Sharjah Research Technology and Innovation Park."
                timing="10 h 00 min - 17 h 00 min" venue = "Online" link="https://www.eventbrite.com/e/career-fair-exclusive-tech-hiring-event-new-tickets-available-tickets-63049080497?aff=ebdssbcitybrowse"
            />
            <EventsCard src="https://i.ibb.co/NW4qCCw/pexels-pavel-danilyuk-8761541.jpg" date="3" month="April" 
            title ="Women in Tech MENA Awards 2023" description="The Women in Tech® MENA Forum and Awards will be held at the Sharjah Research Technology and Innovation Park."
                timing="10 h 00 min - 17 h 00 min" venue = "Online" link="https://www.eventbrite.com/e/black-women-in-cybersecurity-initiative-tickets-432907446827?aff=ebdssbonlinesearch"
            />   
        </div>
    </div>
  )
}

export default Events