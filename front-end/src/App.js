import React from 'react';
import axios from 'axios';

export class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{height: 90 + '%', width: 100 + '%'}}>
                <div>
                <textarea id="code" rows="40" style={{height: 90 + '%', width: 50 + '%'}} defaultValue={
                    "public class Temp {\n" +
                        "   public static void main(String[] args) {\n      System.out.println(\"Hello, World\"); \n    } \n"
                    + "}"
                }/>
                    <textarea id="result" rows="40" style={{height: 90 + '%', width: 50 + '%'}}/>
                </div>
                <div>
                    <button onClick={() => this.pushCode()}>
                        Push Code
                    </button>
                </div>
            </div>
        )
    }

    pushCode() {
        let code = document.getElementById("code").value;
        axios.post("/v1/compile", {"code": code}).then(result => {
            console.log(result);
            document.getElementById("result").value = result.data;
        }).catch(error => {
            console.error("There was an issue sending the compiler request.");
        })
    }
}