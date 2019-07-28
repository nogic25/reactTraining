import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';
import Cards from './Cards'

class Stack extends Component {

    render(){
        //console.log ('stack props',this.props)
        const {title,cards}=this.props.stack
        return(
            <div>
                <Link className='link-home' to='/'>
                   <h4>Home</h4> 
                    </Link>
                <h3>{title} </h3>
                <br/>
                {
                   cards.map(card=>{
                        return(
                            <Cards key={card.id}card={card}/>
                           /* <div key={card.id}>
                                {card.prompt}
                                </div> */
                        )
                      
                    }

                    )
                }
            </div>
        )
    }
}
// state represents the redux store and state represents the props. We need to map state to stack
function mapsStateToProps(state){
    return {stack: state.stack}
}

export default connect(mapsStateToProps,null)(Stack);
