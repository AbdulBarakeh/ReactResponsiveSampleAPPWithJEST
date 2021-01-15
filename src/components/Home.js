import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from "react-bootstrap/Jumbotron";

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }
    Increment = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    Decrement = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }
    render(){
        return (
          <div className="home ">

            <Container className="p-5 ">
                <Jumbotron  >
                <p className="title" >Welcome to this React SPA</p>
                  <p className="subtitle">This is a test sample of routing</p>
                  <p className="subsubtitle">Look at this counter</p>
                  <p className="subsubsubtitle">count: {this.state.count}</p>

                  <Button 
                    className="col-lg-6 col-sm-12 col-md-12"
                    onClick={this.Increment}
                  >
                    Increment
                  </Button>
                  <Button
                    className="col-lg-6 col-sm-12 col-md-12"
                    onClick={this.Decrement}
                  >
                    Decrement
                  </Button>
                </Jumbotron>

            </Container>
          </div>
        );
    }
}
