import React from 'react';

// import { java, java8, Javascript, typescript } from './images';

import java from './images/java.jpg';
import java8 from './images/java8.jpg';
import Javascript from './images/javascript.jpg';
import typescript from './images/typescript.jpg';

import angular from './images/angular.jpg';
import react from './images/react.jpg';
import node from './images/node.jpg';
import html from './images/css5.jpg';
import css from './images/css.jpg';
import bootstrap from './images/bootstrap.jpg';

import microservices from './images/microService.jpg';
import springBoot from './images/springBoot.jpg';
import springMVC from './images/springMVC.jpg';
import resilience4j from './images/Resilience4j.png';
import restApis from './images/restAPIS.jpg';
import servlet from './images/jsp.png';
import springCloud from './images/springcloud.png';
import oop from './images/oop.png';
import jdb from './images/java.jpg';
import hibernate from './images/hybernate.jpg';
import aop from './images/springAOP.png';
import springData from './images/springdata.png';
import maven from './images/mavin.jpg';

import kubernetes from './images/Kubernetes.jpg';
import jenkins from './images/jinkins.jpg';
import docker from './images/docker.jpg';
import git from './images/git.jpg';
import selenium from './images/Selenium.jpg';
import prometheus from './images/Prometheus.jpg';
import grafana from './images/Grafana.jpg';
import mockito from './images/Mockito.png';

import AWSRDS from './images/AWS RDS.png';
import AWSIAM from './images/AWS IAM.png';
import AWSVPC from './images/AWS VPC.png';
import AWSEKS from './images/AWS EKS.png';
import AWSS3 from './images/AWS S3.png';
import apiGateway from './images/Api Gateway.jpg';
import cloudFront from './images/cloudFront.jpg';

import gitHub from './images/github.jpg';
import VSCode from './images/vscode.jpg';
import eclipse from './images/eclipse.jpg';
import mySQL from './images/mysql.png';
import sts from './images/sts.png';
import postman from './images/postman.jpg';

import vertex from './images/vertex.png';
import reventure from './images/reventure.png';
import rpclan from './images/rpclan.png';


import cicd from './images/cicd.png';
import monolithic from './images/monolithic.webp';
import microServicesArc from './images/microservicesArchitecture.png';
import designPattern from './images/designPatterns.png';
import debugging from './images/debugging.png';
import sdlc from './images/sdlc.png';
import dbms from './images/dbms.png';
import os from './images/os.jpg';
import dsa from './images/dsa.png';
import agile from './images/agile-icon.jpg';
import aws from './images/aws.png';
import solr from './images/solr.jpg';
import orm from './images/orm.png';
import springSecurity from './images/spring_security.png';
import jsp from './images/jsp.png';
import spring from './images/spring.png';
import velocity from './images/velocity.png';
import swagger from './images/swagger.png';
import auth0 from './images/auth0.png';
import loadBalancer from './images/loadBalancer.png';
import apiGateAway from './images/apiGateAway.png';
import log4j from './images/log4j.png';
import jwt from './images/jwt.png';
import jdbc from './images/jdbc.png';
import systemDesign from './images/systemDesign.jpg';
import nextjs from './images/nextjs.jpg';
import figma from './images/figma.webp';


export const basicDetails = {
    name: "Chiranjiv Kushwah",
    designetion:"Software developer",
    profileImage: null,
    workingRoles: ['Software', 'Web', 'Java Full-Stack'],
    careerObjective:"A passionate Software Developer, I thrive on learning and building innovative solutions. I specialize in infrastructure, containerization, and Serverless/Cloud technologies, driven by a love for programming and community contribution.",
    resume:"https://chiranjiv-personal.s3.ap-south-1.amazonaws.com/Chiranjiv-Kushwah-Resume.pdf",
    mobile:"8962311939",
    email:"kushwahjick@gmail.com",
    github:"https://github.com/chiranjiv09",
    linkedin:"https://www.linkedin.com/in/chiranjiv-kushwah-8333b2201/",
    leetcode:"https://leetcode.com/u/kushwahjick/",
}


const subject = "Hello there!";
const body = "Just wanted to say hi.";

// export const mailtoHref = `mailto:${basicDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const mailtoHref = `mailto:${basicDetails.email}`;

export const watsappToHref = `https://api.whatsapp.com/send?phone=+91${basicDetails.mobile}&text=Hello`;

export const onCallingEmail = (e) => {
    window.location.href = mailtoHref;
};

export const companyDetails = [
    {
        name: "RP CLAN",
        logo: rpclan,
        joinDate: "Jun 2023 - Present",
        role: "SOFTWARE DEVELOPER",
        keyPoints:[
            "Lead the development of two innovative projects, architecting,designing, and implementing robust solutions.",
            "Utilized Reactjs and Next js for front-end development, creating userfriendly interfaces.",
            "Employed Java, Spring boot and Hibernate for back-end development, ensuring application robustness and efficiency.",
            "Leveraged AWS for cloud deployment, optimizing scalability and reliability",
            "Collaborated with cross-functional teams, delivering seamless user experiences and driving business growth and innovation",
        ],
    },
    {
        name: "Revature",
        logo: reventure,
        joinDate: "Dec 2022- May 2023",
        role: "JAVA FULL STACK DEVELOPER",
        keyPoints:[
            "Developed software in an Agile enviornment",
            "Developed frontend dashboards using Angular Material and integrated with backend services",
            "Created microservices leveraging Java, Spring Boot, Spring Cloud, and Hibernate",
            "Implemented Resilience4j for circuit breaker, rate limiter, bulkhead, and timeout functionalities",
            "Deployed applications on AWS using EC2, S3, RDS, IAM, VPC and EKS",
        ],
    },
    {
        name: "Skill Vertex",
        logo: vertex,
        joinDate: "Dec 2022- May 2023",
        role: "WEB DEVELOPER",
        keyPoints:[
            "Engineered applications with Java, Html, Css, React",
            "Learn basics of databases and javascript",
            "Wrap the rest with live project",
        ],
    },
];

export const srollIntoView = (id) => {
    setTimeout(()=>{
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView();
        }
    },100);
};

export const educationDetails = [
    {
        name: "university",
        college: "Madhav Institute of Technology And Science, Gwalior",
        branch: "B.TECH IN COMPUTER SCIENCE AND ENGINEERING",
        passedOut:"July. 2018-July. 2022"
    },
    {
        name: "higher-school",
        college: "Sandipani Academy, Mandleshwar",
        branch: "HIGHER SECONDARY EDUCATION",
        passedOut:"July. 2016-May. 2017"
    },
];

export const skillsDetails = [
    {
        name: "Programming Languages",
        content:"Skilled in multiple programming languages, delivering robust and efficient solutions.",
        technologies:[ 
            {name :"Java", url: java}, 
            {name :"Java 8", url: java8}, 
            {name :"Javascript", url: Javascript}, 
            {name :"HTML", url: html}, 
            {name :"CSS", url: css},  
        ]
    },
    {
        name: "Tools",
        content:"Experienced with various tools and IDEs for efficient development workflows.",
        technologies:[ 
            {name :"GitHub", url: gitHub}, 
            {name :"VS Code", url: VSCode}, 
            {name :"Eclipse", url: eclipse}, 
            {name :"MySQL Workbench", url: mySQL},
            {name :"STS", url: sts}, 
            {name :"Postman", url: postman}, 
            {name :"System Design", url: systemDesign}, 
            {name :"Maven", url: maven}, 
            {name :"JDBC", url: jdbc}, 
            {name :"JWT", url: jwt},  
            {name :"Log4j", url: log4j},  
            {name :"Api Gateway", url: apiGateway},
            {name :"Load Balancer", url: loadBalancer}, 
            {name :"Auth0", url: auth0}, 
            {name :"Swagger", url: swagger}, 
            {name :"Velocity Engine", url: velocity}, 
        ]
    },
    {
        name: "Frameworks",
        content:"Proficient in diverse frameworks, delivering scalable and maintainable software solutions.",
        technologies:[ 
            {name :"Spring Framework", url: spring}, 
            {name :"Spring boot", url: springBoot}, 
            {name :"ReactJS", url: react},  
            {name :"Hibernate", url: hibernate}, 
            {name :"Spring Data JPA", url: springData}, 
            {name :"Spring MVC ", url: springMVC}, 
            {name :"Spring Cloud (Microservices)", url: springCloud}, 
            {name :"Servlet & JSP", url: servlet}, 
            {name :"Angular", url: angular},
            {name :"Spring Security", url: springSecurity },  
            {name :"ORM", url: orm},  
        ]
    },
    {
        name: "Database",
        content:"Skilled in Database technologies.",
        technologies:[ 
            {name :"MySQL", url: mySQL},
            {name :"Solar Search Engine", url: solr }, 
        ]
    },
    {
        name: "DevOps",
        content:"Proficient in DevOps and Testing, optimizing deployments and ensuring quality.",
        technologies:[ 
            {name :"Git", url: git},
            {name :"Jenkins", url: jenkins}, 
            {name :"Docker", url:docker}, 
            {name :"AWS (RDS, S3, EC2, IAM, VPC, CloudFront)", url: aws}, // ====

            // {name :"Selenium", url: selenium}, 
            // {name :"Prometheus", url: prometheus}, 
            // {name :"Grafana", url: grafana}, 
            // {name :"Mockito", url: mockito}
            // {name :"Kubernetes", url: kubernetes}, 
        ]
    },
    {
        name: "Methodologies & Concepts",
        content:"Skilled in Methodologies & Concepts.",
        technologies:[ 
            {name :"Agile Methodologies", url: agile }, 
            {name :"Data Structures and Algorithms (DSA)", url: dsa}, 
            {name :"Operating Systems (OS)", url: os}, 
            {name :"Database Management Systems (DBMS)", url: dbms}, 
            {name :"Software Development Life Cycle (SDLC)", url: sdlc}, 
            {name :"Debugging", url: debugging}, 
            {name :"Design Patterns", url: designPattern}, 
            {name :"Microservices Architecture", url: microServicesArc }, 
            {name :"Monolithic Architecture", url: monolithic}, 
            {name :"CI/CD", url: cicd}, 
            {name :"REST APIs", url: restApis},  

        ]
    },

    // {
    //     name: "Cloud",
    //     content:"Skilled in cloud technologies, optimizing deployments and enhancing infrastructure reliability.",
    //     technologies:[ 
    //         {name :"AWS RDS", url: AWSRDS}, 
    //         {name :"AWS IAM", url: AWSIAM},  
    //         {name :"AWS VPC", url: AWSVPC},  
    //         {name :"AWS EKS", url: AWSEKS}, 
    //         {name :"AWS S3", url: AWSS3},
    //         {name :"Api Gateway", url: apiGateway},
    //         {name :"Cloud front", url: cloudFront},
    //     ]
    // },
    // {
    //     name: "Frontend Language",
    //     content:"Skilled in frontend languages, creating engaging and responsive user interfaces.",
    //     technologies:[ 
    //         {name :"Angular Material", url: angular}, 
    //         {name :"React", url: react},  
    //         {name :"Nodejs", url: node},  
    //         {name :"HTML", url: html},
    //         {name :"CSS", url: css}, 
    //         {name :"Bootstrap", url: bootstrap}, 
    //     ]
    // },
    // {
    //     name: "Backend Language",
    //     content:"Skilled in backend languages, ensuring efficient, reliable server-side solutions.",
    //     technologies:[ 
    //         {name :"Microservices", url: microservices}, 
    //         {name :"Spring boot", url: springBoot}, 
    //         {name :"Spring MVC ", url: springMVC}, 
    //         {name :"Resilience4j", url: resilience4j},
    //         {name :"Log4", url: log4},
    //         {name :"Rest APIs", url: restApis}, 
    //         {name :"Servlet", url: servlet}, 
    //         {name :"Spring Cloud", url: springCloud}, 
    //         {name :"OOP", url: oop},
    //         {name :"JDB", url: jdb},
    //         {name :"Hibernate", url: hibernate}, 
    //         {name :"AOP", url: aop}, 
    //         {name :"Spring Data", url: springData}, 
    //         {name :"Maven", url: maven}, 
    //     ]
    // },
];

export const projectDetails = [
    {
        name:"Get Right Property",
        technologiesUsed: [
            {name: "Java", url: java},
            {name: "Spring Boot", url: springBoot},
            {name: "ReactJS", url: react},
            {name: "Javascript", url: Javascript},
            {name: "Spring Data JPA", url: springData},
            {name: "MYSQL", url: mySQL},
            {name: "Hibernate", url: hibernate},
            {name: "Solr search Engine", url: solr},
            {name: "NextJs", url: nextjs},
            {name: "Spring MVC", url: springMVC},
            {name: "AWS(RDS,EC2,S3,IAM,CDN", url: aws},
            {name: "Jenkins", url: jenkins},
            {name: "JWT", url: jwt},
            {name: "Spring Security", url: springSecurity},
            {name: "GitHub", url: gitHub},
            {name: "CI/CD", url: cicd},
            {name: "Maven", url: maven},
            {name: "DSA", url: dsa},
            {name: "html", url: html},
            {name: "CSS", url:css},
        ],
        description:"Developed secure real estate site with Java, Spring Boot, React, AWS.",
        link: "http://getrightproperty.com",
        contant: "Developed a real estate website with Java, Spring Boot, ReactJs, and NextJs. Integrated security using Spring Security and JWT, and efficient search with Solr. Hosted on AWS EC2 with S3 and RDS storage. Implemented CI/CD pipelines using Jenkins and Maven.",
        images: [],
        videos: [],
    },
    {
        name:"Rp Clan Internal Application",
        technologiesUsed: [
            {name: "Java", url: java},
            {name: "Spring Boot", url: springBoot},
            {name: "ReactJS", url: react},
            {name: "Javascript", url: Javascript},
            {name: "Spring Data JPA", url: springData},
            {name: "MYSQL", url: mySQL},
            {name: "Hibernate", url: hibernate},
            {name: "Solr search Engine", url: solr},
            {name: "NextJs", url: nextjs},
            {name: "Spring MVC", url: springMVC},
            {name: "AWS(RDS,EC2,S3,IAM,CDN", url: aws},
            {name: "Jenkins", url: jenkins},
            {name: "JWT", url: jwt},
            {name: "Spring Security", url: springSecurity},
            {name: "GitHub", url: gitHub},
            {name: "CI/CD", url: cicd},
            {name: "Maven", url: maven},
            {name: "DSA", url: dsa},
            {name: "CSS", url:css},
            {name: "html", url: html},
        ],        
        description:"Streamlined property listings with efficient data approval system.",
        link:"http://internal.getrightproperty.com",
        contant: "Developed and implemented an internal data approval system for Get Right Property, streamlining workflows for property listings review and approval. Ensured data accuracy, security, and compliance with protection standards. Utilized modern technologies to automate processes, enhancing efficiency and overall data management.",
        images: [],
        videos: [],
    },
    {
        name:"Expense Tracker",
        technologiesUsed: [
            {name: "Java", url: java},
            {name :"Java8", url: java8}, 
            {name: "Spring Security", url: springSecurity},
            {name: "Javascript", url:Javascript},
            {name :"Spring Framework", url: spring},
            {name: "ReactJS", url: react},
            {name: "JWT", url: jwt},
            {name: "Spring Data", url: springData},
            {name :"Spring ORM", url: orm},  
            {name: "AWS (RDS, S3, EC2)", url: aws},
            {name: "CI/CD", url: cicd},
            {name: "Maven", url: maven}
        ],        
        description:"Streamlined property listings with efficient data approval system.",
        link:"https://github.com/chiranjiv09/expense-tracker-backend",
        contant: "An efficient expense tracking application enabling users to monitor spending and split expenses into groups for simplified management and collaboration. Users can easily categorize expenditures and analyze financial trends, promoting effective budgeting and financial transparency.",
        images: [],
        videos: [],
    },
    {
        name:"Hospital Management System",
        technologiesUsed: [
            {name :"Spring Framework", url: spring},
            {name: "Spring Boot", url: springBoot},
            {name :"Spring Cloud (Microservices)", url: springCloud},
            {name: "AWS (RDS, S3, EC2, IAM, VPC, CloudFront)", url: aws},
            {name: "Jenkins", url: jenkins},
            {name: "Spring Security", url: springSecurity},
            {name: "CI/CD", url: cicd},
            {name: "Maven", url: maven},
            {name: "Docker", url: docker},
            {name: "Angular", url: angular},
            {name: "Javascript", url: Javascript},
            {name: "Auth0", url: auth0},
            {name: "JDBC", url: jdbc},
        ],        
        description:"Built web app for booking, health records, and management.",
        link:"https://github.com/chiranjiv09/g2-spring-api-gateway",
        contant: "Developed a web application for patients to book appointments, access health records, receive notifications and enable physicians and nurses to manage and update diagnosis and medication details efficiently.",
        images: [],
        videos: [],
    },
    {
        name:"PDF to IMAGE Converter",
        technologiesUsed: [
            {name: "ReactJS", url: react},
            {name: "Cascading Style Sheets (CSS)", url:css},
            {name: "Javascript", url:Javascript},
            {name: "html", url:html},
            {name: "Figma", url: figma},
        ],        
        description:"Converts PDFs to customizable images in JPEG, JPG, PNG formats; GitHub code available.",
        link:"https://github.com/chiranjiv09/pdf-converter",
        contant: "This project converts PDFs into customizable named images, supporting JPEG, JPG, and PNG formats. It offers flexibility and personalization, with source code available on GitHub for implementation insights and functionality customization.",
        images: [],
        videos: [],
    },
    {
        name:"Training Feedback Management System",
        technologiesUsed: [
            {name: "Java", url: java},
            {name: "MYSQL", url: mySQL},
            {name: "JDBC", url: jdbc},
            {name: "Maven", url: maven},
            {name :"Eclipse IDE", url: eclipse}, 
            {name :"Servlet & JSP", url: servlet}, 
            {name: "html", url:html},
            {name: "CSS", url:css},
        ],        
        description:"Website for managing trainer and trainee information in facility.",
        link:"https://github.com/chiranjiv09/TFMS-p1-project",
        contant: "Website that allows you to add remove update and get information on trainers and trainees who are present in a facility.",
        images: [],
        videos: ["https://youtu.be/NO9OkYDmCeA?si=Pp5jXZjsYFmPGURZ"],
    },
    {
        name:"Personal Portfolio Project",
        technologiesUsed: [
            {name: "ReactJS", url: react},
            {name: "CSS", url:css},
            {name: "Javascript", url:Javascript},
            {name: "html", url:html},
            {name: "Figma", url: figma},
        ],        
        description:"Highlighting my journey, skills, and expertise in development.",
        link:"https://github.com/chiranjiv09/chiranjiv-portfolio",
        contant: "A showcase of my professional journey, skills, and accomplishments, highlighting projects and experiences in software development and Featuring a collection of works demonstrating expertise skills.",
        images: [],
        videos: [],
    },
];


export const profileDetails = [
    {
        name:"About Me", 
        designetion: "I am a Software Developer",
        description:"A passionate Software Developer, I thrive on learning and building innovative solutions. I specialize in infrastructure, containerization, and Serverless/Cloud technologies, driven by a love for programming and community contribution.",
    },
    {
        name :"Experience"
    },
    {
        name :"Skills",
        skills:[
            {
                heading:"Programming Language",
                skills:"Java, Java8, JavaScript, Typescript, HTML, CSS, Node.js"
            },
            {
                heading:"Tools",
                skills:"Maven, JDBC, Log4j, Kubernetes, Jenkins, Docker, Git, Mockito, Selenium, Prometheus, Grafana, AWS (RDS, S3, EC2, IAM, VPC, EKS, API Gateway, CloudFront), GitHub, VS Code, Eclipse, MySQL Workbench, STS, Postman, Auth0"
            },
            {
                heading:"Frameworks",
                skills:"Angular Material, React, Spring Boot, Spring MVC, Spring Cloud (with modules), Hibernate, JSP, Servlet, Resilience4j, Angular"
            },
        ],
    },
    {
        name :"Projects",
        projects:[
            {
                name:"Get Right Property Real Estate Website",
                techStack:"Tech Stack :-Java,Java8,JavaScript, Spring Boot, ReactJs, NextJs, Spring Security, JWT, Solr Search Engine, Spring Data, Spring ORM, AOP, RDS , EC2,S3,CI/CD, Maven",
                description:"Developed a real estate website with Java, Spring Boot, ReactJs, and NextJs. Integrated security using Spring Security and JWT, and efficient search with Solr. Hosted on AWS EC2 with S3 and RDS storage. Implemented CI/CD pipelines using Jenkins and Maven.",
            },
            {
                name:"Rp Clan Internal Application",
                techStack:"Tech Stack :-Java,Java8,JavaScript, Spring Boot, ReactJs, NextJs, Spring Security, JWT, Solr Search Engine, Spring Data, Spring ORM, AOP, RDS , EC2,S3,CI/CD, Maven",
                description:"Developed and implemented an internal data approval system for Get Right Property, streamlining workflows for property listings review and approval. Ensured data accuracy, security, and compliance with protection standards. Utilized modern technologies to automate processes, enhancing efficiency and overall data management.",
            },
            {
                name:"Hospital Management System",
                techStack:`Tech Used: Spring Boot, Microservices, Spring Data, Spring ORM, AOP, AWS(EKS ,RDS , EC2,
                            S3, IAM ,Cloud-front ,Api-gateway), Docker, Jenkins, Angular Material, Bootstrap, CSS, JavaScript,
                            Mockito, Kubernetes, Auth0, Resilience4J, Spring Security, Message Queues, Spring Cloud, GitLab CI/CD, Maven`,
                description:"Developed a web application for patients to book appointments, access health records, receive notifications and enable physicians and nurses to manage and update diagnosis and medication details efficiently.",
            },
            {
                name:"Expense Tracker with Group Splitting",
                techStack:`Tech Used: Spring Boot, Microservices, Spring Data, Spring ORM, AOP, AWS(EKS ,RDS , EC2,
                            S3, IAM ,Cloud-front ,Api-gateway), Docker, Jenkins, Angular Material, Bootstrap, CSS, JavaScript,
                            Mockito, Kubernetes, Auth0, Resilience4J, Spring Security, Message Queues, Spring Cloud, GitLab CI/CD, Maven`,
                description:"Developed a web application for patients to book appointments, access health records, receive notifications and enable physicians and nurses to manage and update diagnosis and medication details efficiently.",
            },
            {
                name:"PDF to IMAGE Converter",
                techStack:`Tech Stack :-Java,Java8,JavaScript, Spring Boot, ReactJs, NextJs, Spring Security, JWT, Solr Search Engine, Spring Data, Spring ORM, AOP, RDS , EC2,S3,CI/CD, Maven`,
                description:"This project converts PDFs into customizable named images, supporting JPEG, JPG, and PNG formats. It offers flexibility and personalization, with source code available on GitHub for implementation insights and functionality customization.",
            },
            {
                name:"Training Feedback Management System",
                techStack:`Tech Stack :-Java, Mysql, JDBC, JUnit, Maven, Eclipse IDE, Servlet, HTML, CSS, JSP.`,
                description:"Website that allows you to add remove update and get information on trainers and trainees who are present in a facility.",
            },
            {
                name:"Personal Portfolio Project",
                techStack:``,
                description:"A showcase of my professional journey, skills, and accomplishments, highlighting projects and experiences in software development and Featuring a collection of works demonstrating expertise skills.",
            },
        ]
    },
    {
        name :"Education",
    },
];

export const onRedirectTo = (url) => {
    // href=`tel:+91${number}`

    let a= document.createElement('a');
    a.target= '_blank';
    a.href= url;
    a.click();
}

export const isMobile = () => {
    let dropdownEl = document.getElementById("appMainContainer");
    if(dropdownEl){
    let displayWidth = dropdownEl.offsetWidth;
        if(displayWidth !== undefined && displayWidth <= 800){
            return true;
        }else{
            return false;
        }
    }
};

export const onMainConClick = (event, id, setter, arg) => {
    var myElement = document.getElementById(id);

    if (myElement && !myElement.contains(event.target)) {
        console.log('clicked outside');
        setter(arg);
    }
};