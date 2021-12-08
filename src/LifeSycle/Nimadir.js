import React from 'react';
 
class Nimadir extends React.Component {
    constructor() {
        super();
        console.log("Constructor is working ...");
       
    }
    componentDidMount(){
        console.log("componentDid munt  is working");

    }   
    
    componentWillMount(){
        console.log("componentwillmount is working here");
    }
    

    render() {
        console.log("render is working ...");
        return (
            <div>
                
            </div>
        );
    }
}

Nimadir.propTypes = {};

export default Nimadir;
