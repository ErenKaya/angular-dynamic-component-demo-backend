import React, {
    Component
} from 'react'

import configureStore from './configureStore'
import { httpGetRequest, httpPostRequest } from './actions/HttpOperation';


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    
    render() {
        const data = {"dataId":101};
        const store = configureStore();
      return (
        <div>
            <button onClick={(e) => {
                store.dispatch(httpPostRequest({url:"http://localhost:8080/api/component/context/",data:data}));
            }}>Submit</button> 
            <div>
                <p>{this.state.response}</p>
            </div>         
        </div>
      )
    }

}
