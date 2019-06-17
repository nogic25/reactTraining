import React, {Component} from 'react';
import stacks from '../data/stacks.json';
import {Link} from 'react-router-dom';

class Stacklist extends Component {
    render (){
        return(
            <div>
                {
                    stacks.map(stacks=>{
                        return(
                            <Link to='/stack'> 
                             <h4 key={stacks.id}>{stacks.title}</h4>
                            </Link>
                           
                        )
                    })
                }
            </div>
        )
    }
}
export default Stacklist;