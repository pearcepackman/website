import './projects.css';
import library from './pics/library.jpg';
import abtest from './pics/ab-testing.png';

export function Projects() {
    return(
        <>

        <div className = "first">
            <h2>Personal Projects</h2>
        </div>
        <div className = "libman">
            <a href = "https://github.com/pearcepackman/Library_Management_System" target = "_blank" rel = "noreferrer">
                <img src = {library} className = "libpic" alt = "logo" />
            </a>
            <h5 className = "libtitle">Library Management System</h5>
            <p className = "libdesc">Utilized C++ to create a library management system for <br /> a computer science class.<br />
            Click the picture to learn more!
            </p>
        </div>

        <div>
            <a href = "https://github.com/pearcepackman/DS_Project_1" target = "_blank" rel = "noreferrer">
                <img src = {abtest} className = "abtestpic" alt = "logo" />
            </a>
            <h5 className = "abtitle">A/B Test Using Sample Data</h5>
            <p className = "abdesc">Utilized Python and Jupyter Notebooks along with
            several Python <br/>libraries to analyze sample data for an A/B Test.<br/>
            Click the picture to learn more!</p>
        </div>
        </>


    );
}