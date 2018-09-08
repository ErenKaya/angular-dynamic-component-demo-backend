import axios from 'axios';
import React from 'react';

export default class AxiosTest extends React.Component{

    onClick =(e)=>{
        var bodyFormData = new FormData();
        bodyFormData.set('','');
        axios({
            method:'get',
            url:'component/generate'
        }).then((success)=>{
            console.log(success);
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.onClick}>+</button>
            </div>
        )
    }
}