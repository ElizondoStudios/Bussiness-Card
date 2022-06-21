import Face from './img/My photo.jpg';

function Info(){
    return(
        <div className="info">
            <img src={Face} alt="Me" className='info-photo'></img>
            <div className='info-text'>
                <h1 className="info-text-name">José Luis Elizondo Figueroa</h1>
                <p className="info-text-paragraph">Frontend Developer</p>
                <a className="info-text-website" href="https://www.youtube.com">website</a>
            </div>
            <div className='info-buttons'>
                <a href='mailto:elizondostudios@gmail.com'>
                    <button className="info-buttons-email">
                        <p>Email</p>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/jos%C3%A9-luis-elizondo-562398231">
                    <button className="info-buttons-linkedin">
                        <p>Linkedin</p>
                    </button>
                </a>
                
            </div>
        </div>
    )
}

export default Info;