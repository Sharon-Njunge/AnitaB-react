


const UserCard = ({image, fullName}) =>{
    return(
        // <div>
        //     <img src={image} alt ={`${fullName} profile`}/>
        //     <h3>{fullName}</h3>
        // </div>
        <div>
        <img src={image} alt={`${fullName} profile`}/>
        <h3>{fullName}</h3>
        <p>{age}</p>
        <p>{gender}</p>
        <p>{email}</p>
    </div>
    )
}

export default UserCard;