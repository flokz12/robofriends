import React from 'react';
// Undestructuring the props to make it clean
const Card = ({ name, email, id}) =>{
    return (
        <div className ='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img alt='robots' src={`https://robohash.org/set_set3/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;


// Using Props - Undestructure
/* const Card = (props) =>{
    return (
        <div className ='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

*/