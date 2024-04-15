import "./style.css"
import linkedIn from './../../img/icons/linkedIn.svg'
import gitHub from './../../img/icons/gitHub.svg'

const Footer = () => {
    return (  
    <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item"><a href="https://github.com/MarynaBobkova" target="_blank"><img src={gitHub} alt="Link"/></a></li>
                <li className="social__item"><a href="https://www.linkedin.com/in/maryna-bobkova-a124b82a6/" target="_blank"><img src={linkedIn} alt="Link"/></a></li>
            </ul>
            <div className="copyright">
                <p>© 2022 frontend-dev.com</p>
            </div>
        </div>
    </div>
</footer> 
);
}
 
export default Footer;