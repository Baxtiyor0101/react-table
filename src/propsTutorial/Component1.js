import React from 'react';

const Component1 = (props) => {
    return (
        <div>
             <h1>hello, {props.name}</h1>
             <h1>he is,  {props.age} years old</h1>
        </div>
    );
};

export default Component1;