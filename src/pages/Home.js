import Header from "./../components/header/Header";


const Home = () => {
    return ( 
        <>
        <Header />

    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, TypeScript, Angular, Redux, HTML5, CSS, NPM, BootStrap, TailwindCSS, ReactJS(Fundamentals, Hooks, Router, Redux)</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>Java, Spring Boot, Spring MVC, NodeJS, Databases: MySQL, MongoDB</p>
                    </li>
                </ul>
        </div>
    </main>
    </>
     );
}
 
export default Home;