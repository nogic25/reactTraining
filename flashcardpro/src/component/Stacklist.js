import React, {Component} from 'react';
//import {bindActionCreators} from 'redux';
//takes to parameters and those parameters are functions as well
//first param connects to the store and gets the data
//second handels actions and sends it to reducers to update the store
import {connect} from 'react-redux';
import stacks from '../data/stacks.json';
import {Link} from 'react-router-dom';
import { setStack,loadStack } from '../actions';


class Stacklist extends Component {
    componentDidMount(){
        if (this.props.stacks.length ===0)this.props.loadStack(stacks);
    }
 
    render (){
        //console.log('stackListProps',this.props)
        return(
            <div>
                {
                   this.props.stacks.map(stack=>{
                        return(
                            <Link 
                to='/stack' 
                key={stack.id}
                onClick={()=>this.props.setStack(stack)}
                 >

                <h4>{stack.title}</h4>
              </Link>
                           
                        )
                    })
                }
            </div>
        )
    }
}

function mapsStateToProps(state){
    return {stacks: state.stacks}
}

//function describes what function creators are avalible in the component inorderto to dispatch
//actions to the redux store. Dispatching the action is setting the action to the reducer,
//so reducer knows how to update the state of the component
//setStack is object creator

/*function mapsDispatchToProps(dispatch){
return bindActionCreators({setStack}, dispatch)

};
*/

export default connect(mapsStateToProps,{setStack,loadStack})(Stacklist);