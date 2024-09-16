import { Link, useNavigate } from "react-router-dom";
import '../../style/projects.css';
import '../../style/link.css';
import Maze from '../../images/maze.png'
import FlappyDuck from '../../images/Flapy-Duck-Screenshot.png';
import Login from '../../images/login-picture.png';

function Projects(){
    const navigate = useNavigate();
    const goHome = () =>{
        navigate('/');
    }
    const goResume = () =>{
        window.open('https://1drv.ms/w/s!AtKoeaQlCzlQgtdaRXtyp3QlhUuY8w?e=Ve8Jpa', '_blank');
    }
    const goContact = () =>{
        navigate('/contact');
    }
    const visitFlappyDuck = () =>{
        window.open('https://haydenclark-flappy-duck.netlify.app');
    }
    const visitMaze = () =>{
        window.open('https://github.com/HaydenClark1/Maze');
    }
    const visitLogin = () =>{
        window.open('https://loginsub.netlify.app');
    }
    return(
        <>
        <div className="project-container">
            <h1 className="projects">Previous Projects</h1>
                <div className="flappy-duck-container">
                <img className="flappy-duck-picture"  src={FlappyDuck} alt="Flappy Duck Picture"/>
                <button className="flappy-duck-button" onClick={visitFlappyDuck}>Visit</button>
                </div>
                <div className="maze-container">
                    <img className="maze-picture" src={Maze} alt="maze-picture" />
                    <button className="maze-button" onClick={visitMaze}>Visit</button>
                </div>
                <div className="login-container">
                    <img className = "login-picture" src= {Login} alt="Login Picture" />
                    <button className="login-button" onClick={visitLogin}>Visit</button>
                </div>
            </div>
            <div className="link-container">
                <Link className='home-button' to="/" onClick={goHome}>Home</Link> 
                <Link className='resume-link' to= {window.location.pathname} onClick={goResume}>Resume</Link>
                <Link className='contact-link' to="/contact" onClick={goContact}>Contact Me</Link>
            </div>
        </>
    )
}
export default Projects;