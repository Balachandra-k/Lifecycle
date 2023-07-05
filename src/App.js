import React,{Component} from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props){
  super(props)
}

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="dispaly-1 text-sucess" > React Lifecycle</h3>
          </div>

        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-outline-sucess">Mount</button>
            <button className="btn btn-outline-danger float-end">Unmount</button>
          </div>
        </div>
      </div>
    )
  }
  }
  export default App
