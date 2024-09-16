import '../../style/homepage.css';
import '../../style/link.css'
import pfp from '../../images/profile-pic.png';
import { Link, useNavigate } from 'react-router-dom';

function Homepage(){
   const navigate = useNavigate();
   
   const goContact = () => {
    navigate('/contact');
   }
   const goProjects = () =>{
    navigate('/projects');
}
const getResume = () =>{
    fetch('public/Hayden_Clark_Resume.pdf').then((response) => {
        response.blob().then((blob) => {
        
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "HaydenClarkResume.pdf";
            alink.click();
        });
    });
}
    return(
        <>
        <div className='home-page'>
            <img className= "pfp" src={pfp} alt="Profile-Picture" />
            <div className="Name">
            <h1 className='Hayden-Clark'>Hayden Clark</h1>
            <h3 className='summary'>Computer scientist from UW-Madison <br/> 
                motivated to learn and grow his skills. <br/>
                Excellent with problem solving and <br/> 
                communication. Proficient in Java, with <br/>
                knowledge in HTML, CSS, Javascript, and React.

            </h3>
            </div>
            <div className='link-container'>
                <Link className='project-link' to="/projects" onClick={goProjects}>Projects</Link> 
                <Link className='resume-link' to= {window.location.pathname} onClick={getResume}>Resume</Link>
                <Link className='contact-link' to="/contact" onClick={goContact}>Contact Me</Link>
            </div>
            </div>
        </>

    )
}

export default Homepage;
