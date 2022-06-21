let AboutMe="I'm an engineering student in Mexico. I love writing code and developing web pages.";

function About(){
    return(
        <div className="about">
            <h2 className="description-header">About</h2>
            <p className="description-paragraph">{AboutMe}</p>
        </div>
    )
}

export default About;