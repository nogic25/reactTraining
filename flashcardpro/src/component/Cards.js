import React, {Component} from 'react';

class Cards extends Component {
    render(){
        const {answer,prompt}=this.props.card;
        return (
            <div>
               <div><h4>{answer}</h4></div> 
               <div><h4>{prompt}</h4></div>  
             </div>


        )
    }
}

export default Cards;