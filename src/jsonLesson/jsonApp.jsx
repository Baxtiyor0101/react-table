import React from 'react';
import Users from './users.json';

export const JsonApp = () => {
    return (
        <div>
            {Users.map((post)=>{
                return(
                    <div className='insof'>
                        <h1>ism:{post.name}</h1>
                        <h2>yoshi:{post.age}</h2>
                        <h3>talabami:{post.isStudent}</h3>
                        <h4>mamlakat:{post.country}</h4>
                        <h5>raqami:{post.phone}</h5>
                    </div>
                );
            })}
        </div>
    )
}
export default JsonApp