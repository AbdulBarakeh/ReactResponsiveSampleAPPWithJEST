import React from 'react';
import  Jumbotron  from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default class ViewTwo extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="viewTwo">
        <Container className="p-4">
        <Jumbotron>

        <div className="center">

          {this.props.text}
      </div>
        </Jumbotron>
        </Container>
      </div>
    );
  }
}
