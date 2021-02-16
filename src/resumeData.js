import headerImage from "./assets/headerimage-min.jpg";

import profileImage from "./assets/profile.png";

//Work and Education Logos/Icons 
import instagramIcon from "./assets/instagram.png";
import linkedinIcon from "./assets/linkedin.png";
import githubIcon from "./assets/github.png";
import uibIcon from "./assets/uib-ugle_transparent.png";
import hvlIcon from "./assets/hvl-logo_transparent.png";
import deliIcon from "./assets/delideluca_transparent.png";
import vardafjellIcon from "./assets/vardafjell-logo_transparent.png";
import mailIcon from "./assets/mail_icon.png";

//Skill Logos/Icons
import pythonLogo from "./assets/Skill-logos/python_logo.png";
import javaLogo from "./assets/Skill-logos/java_logo.png";
import jsLogo from "./assets/Skill-logos/javascript_logo.png";
import htmlLogo from "./assets/Skill-logos/html5_logo.png";
import cssLogo from "./assets/Skill-logos/css3_logo.png";
import reactLogo from "./assets/Skill-logos/reactjs_logo.png";
import sqlLogo from "./assets/Skill-logos/sql_logo.png";


let resumeData = {
    "headerImage": headerImage,
    "imagebaseurl":"https://github.com/philiphoang",
    "name": "Philip",
    "role": "Developer",
    "roleDescription": "I like to learn and create applications in various parts of software development and like to learn about new technologies!",
    "profileImage":profileImage,
    "socialLinks": [
        {
            "name":"linkedin",
            "url":"https://www.linkedin.com/in/philip-hoang-7a50b2181/",
            "className":"linkedin",
            "imgsrc": linkedinIcon
        },
        {
            "name":"github",
            "url":"https://github.com/philiphoang",
            "className":"github",
            "imgsrc":githubIcon
        },
        {
            "name":"instagram",
            "url":"https://instagram.com/philipoth",
            "className":"instagram",
            "imgsrc":instagramIcon
        }
        ,
        {
            "name":"mail",
            "url":"mailto: philip.t.hoang",
            "className":"mail",
            "imgsrc": mailIcon
        }
    ],
    "aboutMe":"I am currently a Masters student at University of Bergen and pursuing my master in Media and Interaction Design. I have knowledge in backend-developing from my bachelordegree, currently diving into the frontend-developing world.",
    "address": "Bergen, Norway",
    "age": "24",
    "website": "https://github.com/philiphoang",
    "education": [
        {
            "EducationIcon": uibIcon,
            "UniversityName": "University in Bergen",
            "specialization": "Media and Interaction Design",
            "MonthOfPassing": "June",
            "YearOfPassing": "Currently studying",
        },
        {
            "EducationIcon": uibIcon,
            "UniversityName": "University in Bergen",
            "specialization": "Computer Technology",
            "MonthOfPassing": "June",
            "YearOfPassing": "2018",
        },
        {
            "EducationIcon": vardafjellIcon,
            "UniversityName": "Vardafjell Videregåendeskole",
            "specialization": "Studiespesialiserende",
            "MonthOfPassing": "June",
            "YearOfPassing": "2015",
        }
    ],
    "work": [
        {
            "WorkIcon": uibIcon,
            "CompanyName":"University in Bergen",
            "specialization":"Teaching Assistent",
            "MonthOfStarting":"January",
            "YearOfStarting":"2021",
            "MonthOfLeaving":"",
            "YearOfLeaving":"Currently working"
        },
        {
            "WorkIcon": hvlIcon,
            "CompanyName":"Høgskolen på Vestlandet",
            "specialization":"Lab Assistent",
            "MonthOfStarting":"August",
            "YearOfStarting":"2019",
            "MonthOfLeaving":"December",
            "YearOfLeaving":"2019"
        },
        {
            "WorkIcon": uibIcon,
            "CompanyName":"University in Bergen",
            "specialization":"Teaching Assistent",
            "MonthOfStarting":"January",
            "YearOfStarting":"2019",
            "MonthOfLeaving":"June",
            "YearOfLeaving":"2019"
        },
        
        {
            "WorkIcon": deliIcon,
            "CompanyName":"Deli de Luca",
            "specialization":"Shop employee",
            "MonthOfStarting":"July",
            "YearOfStarting":"2017",
            "MonthOfLeaving":"July",
            "YearOfLeaving":"2018"
        }
    ],
    "skillsDescription":"",
    "skills":[
        {
            "skillogo": pythonLogo,
            "skillname":"Python",
            "level": 3
        },
        {
            "skillogo": javaLogo,
            "skillname":"Java",
            "level": 4
        },
        {
            "skillogo": jsLogo,
            "skillname":"Javascript",
            "level": 3
        },
        {
            "skillogo": htmlLogo,
            "skillname":"HTML5",
            "level": 3
        },
        {
            "skillogo": cssLogo,
            "skillname":"CSS",
            "level": 3

        },
        {
            "skillogo": reactLogo,
            "skillname":"Reactjs",
            "level": 1
        }, 
        {
            "skillogo": sqlLogo,
            "skillname":"SQL",
            "level": 1
        },
    ],
    "project1": 
    {
        "name":"Talkie",
        "subtitle":"A social child interviewing robot",
        "keywords": ["UiB", "MIX301", "Prototype", "Social", "Robot", "AI", "Android", "Python", "Java"]
    },
    "project2":
    {
        "name":"Tangy",
        "subtitle":"A persistent wellbeing coach",
    },
    "project3":
    {
        "name":"Visualization of algorithms and datastructures",
        "subtitle":"A visualization tool for different algorithms",
    }
        
}

export default resumeData;