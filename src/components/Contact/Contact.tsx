import { Link, useNavigate} from 'react-router-dom';
import '../../style/contact.css'
import '../../style/link.css';
function Contact(){
    const navigate = useNavigate();
    const goHome = () =>{
        navigate('/');
    }

    const goProjects = () =>{
        navigate('/projects');
    }
    const getResume = () =>{
        fetch("src/components/Projects/Hayden_Clark_Resume.pdf").then((response) => {
            response.blob().then((blob) => {
            
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                    
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Resume.pdf";
                alink.click();
            });
        });
    }
    return(
        <>
        <div className='contact-container'>
            <h1 className="contact-info">Contact Information</h1>
            <div className="contact-details">
                <div className="phone-header">
                 <h2>Phone Number</h2>
                 <h3>715-496-3007</h3>
             </div>
                <div className="email-header">
                   <h2>Email</h2>
                  <h3>haydenclark1@live.com</h3>
             </div>
         </div>
        </div>
    <div className='link-container'>
        <Link className='home-button' to="/" onClick={goHome}>Home</Link>
        <Link className='resume-link' to= {window.location.pathname} onClick={getResume}>Resume</Link>
        <Link className='project-link' to="/projects" onClick={goProjects}>Projects</Link>
    </div>
    </>
  
);
}

export default Contact;