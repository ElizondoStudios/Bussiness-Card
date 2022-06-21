import TwitterIcon from "./img/Twitter Icon.png";
import GithubIcon from "./img/GitHub Icon.png";
import FacebookIcon from "./img/Facebook Icon.png";
import InstagramIcon from "./img/Instagram Icon.png";

function Footer(){
    return(
        <div className="footer">
            <a href="https://twitter.com">
                <img src={TwitterIcon} alt="Anchor to Twitter"></img>
            </a>
            <a href="https://github.com/ElizondoStudios">
                <img src={GithubIcon} alt="Anchor to GitHub"></img>
            </a>
            <a href="https://facebook.com">
                <img src={FacebookIcon} alt="Anchor to GitHub"></img>
            </a>
            <a href="https://instagram.com">
                <img src={InstagramIcon} alt="Anchor to GitHub"></img>
            </a>
        </div>
    )
}

export default Footer;