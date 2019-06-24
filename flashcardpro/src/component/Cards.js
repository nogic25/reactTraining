import React, {Component} from 'react';

class Cards extends Component {

    //constructor will help to set up a state
    // attach state to the sthis object of the component

    constructor(){
        super();
        this.state={
            reveal: false
        };
    }

    render(){
        const {answer,prompt}=this.props.card;
        return (
            <div className='card'onClick={()=>this.setState({reveal:true})}>
               <div className='card-prompt'>
                   <h4>{prompt}</h4>
                   </div> 
               <div className='card-answer'>
                   <h4 className={this.state.reveal===true ? 'text-revealed':'text-hidden'}>
                   {answer}
                   </h4>
                   </div>  
             </div>


        )
    }
}

export default Cards;