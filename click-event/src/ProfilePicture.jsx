

function ProfilePicture(){

    const imageUrl = 'https://placehold.co/200x300/png'; 

    const handleClick = (e) => e.target.style.display = "none";
    
    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="Profile Picture" />
    )
}

export default ProfilePicture