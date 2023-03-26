import React, { useState, useEffect } from 'react'
import CardCarousel from '../components/CardCarousel'
import './css/popularcourses.css'

function PopularCoursesSlider() {

  const data = [
    {
      _id : "1",
      name : "Build Professional Websites with HTML and CSS", 
      description : "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid",
      learning : ["Become a modern and confident HTML and CSS developer, no prior knowledge needed!", 
      "Modern, semantic and accessible HTML5", 
      "Modern CSS (previous CSS3), including flexbox and CSS Grid for layout", 
      "Developer skills such as reading documentation, debugging, and using professional tools",
      "How to plan, sketch, design, build, test, and optimize a professional website",
      "Practice your skills with 10+ challenges (solutions included)"
      ],
      topics : ["Introduction to HTML", 
      "Introduction to CSS", 
      "Understanding CSS Layouts",  
      "Web Design Rules and Frameworks",
      "Final Project - Food Delivery App"],
      resources : ["https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/"],
      time : "6 hours 32 minutes",
      isPopular : false,
      category : {id : "456", name : "Web Design", src: "https://i.ibb.co/v4zk471/pexels-format-1029757.jpg"},
      videoURL : "https://www.youtube.com/embed/G3e-cpL7ofc",
      imgURL : "https://i.ibb.co/zJdscJg/course1.jpg",
      instructor : {
          name : "John Bowman",
          img : "https://i.ibb.co/FwPgc8W/happy-gfb413f18c-640.jpg",
          qualifications : "Web Developer, Designer, and Teacher",
          description : "I'm a full-stack web developer and designer with a passion for building beautiful things from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering. I discovered my passion for teaching and helping others by sharing all I knew when I was in college, and that passion brought me to Udemy in 2015. Here, in all my courses, what students love the most is that I take the time to explain every concept in a way that everyone can easily understand."
      }
  },
  {
      _id : "2",
      name : "Complete React Developer Course", 
      description : "Become a Senior React Developer. Build a massive E-commerce app with Redux, Hooks, GraphQL, Stripe, Firebase",
      learning : ["Build enterprise level React applications and deploy to production (using React 18!)", 
      "Learn the latest features in React including Hooks, Context API, Suspense, React Lazy + more", 
      "Use Redux, Redux Thunk and Redux Saga in your applications", 
      "Developer skills such as reading documentation, debugging, and using professional tools",
      "Handling online payments with Stripe API",
      "Testing your application with Jest, Enzyme and snapshot testing"
      ],
      topics : ["React Basics", 
      "React Routing", 
      "Authentication and Firebase",  
      "React COntext for State Management",
      "Final Project - Blog Application"],
      resources : ["https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/"],
      time : "2 hours 26 minutes",
      isPopular : true,
      category : {id : "333", name : "Web development", src: "https://i.ibb.co/v4zk471/pexels-format-1029757.jpg"},
      videoURL : "https://www.youtube.com/embed/Ke90Tje7VS0",
      imgURL : "https://i.ibb.co/RP5dS6j/course2.jpg",
      instructor : {
          name : "Jared Emelio",
          img : "https://i.ibb.co/C920Myb/man-ga63c9544a-640.jpg",
          qualifications : "Web Developer, Founder of zerotomastery.io, and Teacher",
          description : "Jared is the instructor of some of the highest rated programming and technical courses online. He is now the founder of ZTM Academy which is one of the fastest growing education platforms in the world. ZTM Academy is known for having some of the best instructors and success rates for students. His graduates have moved on to work for some of the biggest tech companies around the world like Apple, Google, Tesla, Amazon, JP Morgan, IBM, UNIQLO etc... He has been working as a senior software developer in Silicon Valley and Toronto for many years, and is now taking all that he has learned, to teach programming skills and to help you discover the amazing career opportunities that being a developer allows in life. "
      }
  },
  {
      _id : "3",
      name : "Build APIs using Nodejs, Express and Mongoose", 
      description : "Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)",
      learning : ["Master the entire modern back-end stack: Node, Express, MongoDB and Mongoose (MongoDB JS driver)", 
      "Build a fast, scalable, feature-rich RESTful API (includes filters, sorts, pagination, and much more)", 
      "CRUD operations with MongoDB and Mongoose", 
      "Build a complete, beautiful & real-world application from start to finish",
      "Learn how Node really works behind the scenes: event loop, blocking vs non-blocking code, streams, modules",
      "How to work with data in NoSQL databases (including geospatial data)"
      ],
      topics : ["Introduction to Nodejs", 
      "Introduction to Express", 
      "Introduction to MongoDB",  
      "Server Side Rendering",
      "Final Project - Amazon Clone"],
      resources : ["https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/"],
      time : "2 hours 26 minutes",
      isPopular : false,
      category :  {id : "333", name : "Web development", src: "https://i.ibb.co/v4zk471/pexels-format-1029757.jpg"},
      videoURL : "https://www.youtube.com/embed/_GpQvC6HAuw",
      imgURL : "https://i.ibb.co/q0DS7Rt/course3.jpg",
      instructor : {
          name : "Lita Wright",
          img : "https://i.ibb.co/Jzbh0pZ/woman-g2520f68ad-640.jpg",
          qualifications : "Backend Web Developer, Co-Founder of The Website Builder, and Instructor",
          description : "I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees. I spend most of my time researching how to make learning to code fun and make hard concepts easy to understand. I apply everything I discover into my bootcamp courses. "
      }
  },
  {
      _id : "4",
      name : "Ethereum and Solidity: The Complete Guide", 
      description : "Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain",
      learning : ["Understand the why engineers would want to create an app with Ethereum", 
      "Design, test, and deploy secure Smart Contracts", 
      "Use the latest version of Ethereum development tools (Web3 v1.0)", 
      "Build compelling blockchain applications using the Ethereum Blockchain",
      "Learn the true purpose and capabilities of Ethereum and Solidity",
      "See practical examples to comprehend what the blockchain and mining are"
      ],
      topics : ["What is Ethereum", 
      "What is Solidity", 
      "What are Smart Contracts",  
      "Ethereum Project Infrastructure",
      "Final Project - Decentralized Voting System"],
      resources : ["https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/", 
      "https://www.codewithharry.com/blogpost/html-cheatsheet/"],
      time : "32 hours",
      isPopular : true,
      category : {id : "211", name : "Blockchain and Web3", src: "https://i.ibb.co/v4zk471/pexels-format-1029757.jpg"},
      videoURL : "https://www.youtube.com/embed/gyMwXuJrbJQ",
      imgURL : "https://i.ibb.co/4Svv669/course4.jpg",
      instructor : {
          name : "Stephen Grider",
          img : "https://i.ibb.co/WPYqB6x/asian-man-ga2ded740c-640.jpg",
          qualifications : "Engineering Architect, Co-Founder of The Ethereum Buddies, and Instructor",
          description : "Stephen Grider has been building complex Javascript front ends for top corporations in the San Francisco Bay Area.  With an innate ability to simplify complex topics, Stephen has been mentoring engineers beginning their careers in software development for years, and has now expanded that experience onto Udemy, authoring the highest rated React course. He teaches to share the knowledge he has gained with other software engineers. Invest in yourself by learning from Stephen's published courses."
      }
  }
  ]

  if(!data) {
    return (
        <div>Loading....</div>
    )
}

  else {
      return (
          <div className='popular-courses-component'>
              <h1 className='popular-course-text'>Explore top courses</h1>
              <CardCarousel data={data} />
          </div>
        )
  } 
}

export default PopularCoursesSlider