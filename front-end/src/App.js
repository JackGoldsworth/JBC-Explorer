import React from 'react';
import axios from 'axios';

export class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item">
                            JBC-Explorer
                        </a>
                    </div>
                </nav>
                <div style={{height: 90 + '%', width: 100 + '%'}}>
                    <div>
                    <textarea id="code" rows="35" style={{height: 90 + '%', width: 50 + '%'}} defaultValue={
                        "public class Temp {\n" +
                            "   public static void main(String[] args) {\n      System.out.println(\"Hello, World\"); \n    } \n"
                        + "}"
                    }/>
                        <textarea id="result" rows="35" style={{height: 90 + '%', width: 50 + '%'}}/>
                    </div>
                    <div>
                        <button onClick={() => this.pushCode()} class={"button is-success"} style={{marginLeft: 0.1 + 'vw'}}>
                            Compile
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    pushCode() {
        document.getElementById("result").value = ""
        let code = document.getElementById("code").value;
        axios.post("/v1/compile", {"code": code}).then(result => {
            document.getElementById("result").value = result.data;
        }).catch(() => {
            console.error("There was an issue sending the compiler request.");
        })
    }
}