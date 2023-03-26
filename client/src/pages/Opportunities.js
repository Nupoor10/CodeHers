import React from 'react'
import './css/opportunities.css'
import { MdDescription } from "react-icons/md";
import { RiTimerFlashFill } from "react-icons/ri";
import { BiLinkAlt } from "react-icons/bi";

const OpportunityCard = (props) => {
    return(
        <div className='opportunity-card'>
            <h2>{props.title}</h2>
            <h3><MdDescription />{props.description}</h3>
            <h4><RiTimerFlashFill />{props.deadline}</h4>
            <h4><BiLinkAlt />Link to apply : <a href={props.link}>APPLY HERE</a></h4>
        </div>
    )
}

function Opportunities() {
  return (
    <div className='opportunity-wrapper'>
        <h1>Opportunities</h1>
        <img className='opportunity-header-img' src='./images/opportunity (2).jpg'></img>
        <h2>We have curated a list of the most recent opportunities in the tech sector to help you build your career</h2>
        <div className='opportunity-component'>
            <OpportunityCard title ="Experienced React JS Full Stack Developer" description="DigitalMarketing360, seeking an experienced React JS Full Stack developer. We are looking to add an independent, energetic, and self-motivated React developer. We look for someone who loves to learn and is passionate about keeping up to date with industry trends and technology."
                deadline="Apply By 23 April 2023" link="https://in.indeed.com/q-web-developer-jobs.html?vjk=e1ea2736e77af11a&advn=5833223840588633"
            />
            <OpportunityCard title ="Experienced React JS Full Stack Developer" description="DigitalMarketing360, seeking an experienced React JS Full Stack developer. We are looking to add an independent, energetic, and self-motivated React developer. We look for someone who loves to learn and is passionate about keeping up to date with industry trends and technology."
                deadline="Apply By 23 April 2023" link="https://in.indeed.com/q-web-developer-jobs.html?vjk=e1ea2736e77af11a&advn=5833223840588633"
            />
            <OpportunityCard title ="Experienced React JS Full Stack Developer" description="DigitalMarketing360, seeking an experienced React JS Full Stack developer. We are looking to add an independent, energetic, and self-motivated React developer. We look for someone who loves to learn and is passionate about keeping up to date with industry trends and technology."
                deadline="Apply By 23 April 2023" link="https://in.indeed.com/q-web-developer-jobs.html?vjk=e1ea2736e77af11a&advn=5833223840588633"
            />
            <OpportunityCard title ="Experienced React JS Full Stack Developer" description="DigitalMarketing360, seeking an experienced React JS Full Stack developer. We are looking to add an independent, energetic, and self-motivated React developer. We look for someone who loves to learn and is passionate about keeping up to date with industry trends and technology."
                deadline="Apply By 23 April 2023" link="https://in.indeed.com/q-web-developer-jobs.html?vjk=e1ea2736e77af11a&advn=5833223840588633"
            />
            <OpportunityCard title ="Experienced React JS Full Stack Developer" description="DigitalMarketing360, seeking an experienced React JS Full Stack developer. We are looking to add an independent, energetic, and self-motivated React developer. We look for someone who loves to learn and is passionate about keeping up to date with industry trends and technology."
                deadline="Apply By 23 April 2023" link="https://in.indeed.com/q-web-developer-jobs.html?vjk=e1ea2736e77af11a&advn=5833223840588633"
            />     
        </div>
    </div>
  )
}

export default Opportunities