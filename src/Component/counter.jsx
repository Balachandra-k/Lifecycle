import React, {Component} from "react";
import ReactDOM from 'react-dom'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            view: false
        }
    }

    //props inc
    countHandler(){
        ReactDOM.render(
            <React.StrictMode>
                <Counter num={this.props.num + 1}/>
            </React.StrictMode>, document.getElementById("renderHere")
        )
    }
    /* MOUNT METHODS*/
    componentWillMount(){
        console.log('deprecated-component will mount called');
    }

    componentDidMount(){
        console.log('component did mount called');
    }
    //upadate stage
    //@deprecated -16.3, use static getDerivedstateFromprops instead; will stop working in react 17 
    componentWillReceiveProps(np){
        console.log('deprecated -component Will upadate');
        console.log('newProps=',np);
        if(np.num >= 10){
            this.setState({
                view : true
            })
        }
    } 

    shouldComponentUpdate(np,ns){
        console.log('should component upadate or not?');
        console.log('newprops=',np);
        console.log('newstate=',ns);
        return true;
    }
    //@deprecated -16.3, use getSnapshotBeforeUpdate insted; will stop working in react 17

    componentwiiUpdate(np,ns){
        console.log('deprecated - component will update');
        console.log('newpops=',np);
        console.log('newstates=',ns);
    }

    

    render() {
        console.log('component render');
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-success">Counter</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-success">Num = { this.props.num}</h1>

                        <div>
                            {
                                this.state.view ?
                                (<h1 className="text-center text-success">welocome to react lifecycle</h1>) :
                                (
                                    <div>
                                        <h1 className="text-center text-warning">Need more counts</h1>
                                        <button onClick = {()=> this.countHandler()}className="btn btn-dark">increment Props</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    componentDidUpdate(op,os){
        console.log('component did upadate');
        console.log('oldProps',op);
        console.log('oldStates',os);
    }
    
    //UNMOUNT
    componentWillUnmount(){
        console.log('component unMounted successfully');
    }
}

export default Counter
