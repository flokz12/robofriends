import React from 'react';
import Card from './Card';
const CardList = ({robots}) => {

    /*Trying with error
    if(true){
        throw new Error('ERRROOOORRR!');
    }
    */
    return(
        <div>
            {
                robots.map((user,i) => { //.map is alternative to for each loop
                    return (
                        <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        />
                    );
                })
            }
        </div>
    );
}
export default CardList;