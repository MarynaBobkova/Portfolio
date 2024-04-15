import "./style.css"
import Resume from "./Maryna_Bobkova.pdf"

const Header = () => {
    return ( 
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Maryna</em></strong><br/>
                a Full Stack/ Frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href={Resume} className="btn">Download CV</a>
        </div>
    </header>
     );
}
 
export default Header;