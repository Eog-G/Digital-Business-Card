import './App.css';

function About(){
    return(
        <div className='about'>
            <h2>About</h2>
            <h5>I am a full stack developer who enjoys learning and implementing new technologies to solve challenging problems. I am currently developing a commercial uncertainty calculation engine for the Oil and Gas industry which calculates the uncertainty involved in a custody-transfer stream</h5>
            <h2>Skills</h2>
            <h5 className='skills'>
                <u className='csharp'>C#</u>
                <u className='python'>Python</u>
                <u className='xaml'>XAML</u>
                <u className='net'>.NET</u>
                <u className='html'>HTML</u>
                <u className='css'>CSS</u>
                <u className='js'>JS</u>
                <u className='react'>React</u> 
                <u className='sql'>SQL</u> </h5>
        </div>
    )
}

export default About;