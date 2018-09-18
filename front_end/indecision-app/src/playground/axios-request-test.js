import axios from 'axios';
import React from 'react';

export default class AxiosTest extends React.Component {

    onClick = (e) => {
        console.log(1);
        var bodyFormData = new FormData();
        bodyFormData.append('eren', 'kaya');
        bodyFormData.append('eren1', 'kaya1');
        let bodyJson = this.toJson(bodyFormData);
        console.log(bodyJson);
        axios({
            method: 'get',
            url: 'component/generate',
            data: bodyJson,
            headers: { 'abc': '1', 'abc1': '2' }
        }).then((success) => {
            console.log(success);
        }).catch((err) => {
            console.log(err);
        })
    }

    toJson = (formData) => {
        let object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        return JSON.stringify(object);
    }
    render() {
        return (
            <div>
                <button onClick={this.onClick}>+</button>
            </div>
        )
    }
}