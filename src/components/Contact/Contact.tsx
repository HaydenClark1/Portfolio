import { Link, useNavigate} from 'react-router-dom';
import '../../style/contact.css'
import '../../style/link.css';
function Contact(){
    const navigate = useNavigate();
    const goHome = () =>{
        navigate('/');
    }
    const goResume = () =>{
        window.open('https://1drv.ms/w/s!AtKoeaQlCzlQgtdaRXtyp3QlhUuY8w?e=Ve8Jpa', '_blank');
    }

    const goProjects = () =>{
        navigate('/projects');
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
        <Link className='resume-link' to= {window.location.pathname} onClick={goResume}>Resume</Link>
        <Link className='project-link' to="/projects" onClick={goProjects}>Projects</Link>
    </div>
    </>
  
);
}

export default Contact;