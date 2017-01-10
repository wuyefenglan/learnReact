import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from "../components/Toggle/Toggle.js";

class Main extends React.Component {
    render(){
        return (
            <Toggle/>
        );
    }
}
ReactDOM.render(<Main/>,document.getElementById("container"));