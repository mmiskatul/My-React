import profilePicture from './assets/image.png' 
function Card(){
    return (
        <div className="Card">
            <img className='card-image' src={profilePicture} alt="Profile Picture" />
            <h2 className='title'>Miskatul Masabi</h2>
            <p className='card-description'>I'm a Student of SWE at Daffodil international University</p>
        </div>
    );
}
export default Card