import profilePicture from "./assets/pic.jpeg"

function Card() {
    return(
        <div className="card">
             <img className="card-img" src={profilePicture} alt="profile picture" />
             <h2 className="card-title">Aqua</h2>
             <p className="card-text">I study full stack and watch anime</p>
        </div>
    );
}

export default Card