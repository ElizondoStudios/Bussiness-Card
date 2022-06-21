let MyInterests="I love coding, videogames, working out, spending time with my grilfriend and friends, and enjoying a good meal.";

function Interests(){
    return(
        <div className="interests">
            <h2 className="description-header">Interests</h2>
            <p className="description-paragraph">{MyInterests}</p>
        </div>
    )
}

export default Interests;