import React from 'react';
import { Alert, Container, Row, Col } from 'reactstrap';
import './styles.css';

class MyApp extends React.Component{
    render(){
        return(
            <>
                <h1 className="firstText">helllo react</h1>
                <p>loremredd   color iis </p>
                
                <Container>
                    <Row>
                    <Col md="12">
                        <Alert color="success"  class="mb-3">
                            <span>this is </span> 
                            <span>this is </span> 
                            <span>this is </span> 
                            <span>this is </span> 
                        </Alert>
                        <Alert color="danger">
                            this is 
                        </Alert>
                        <Alert color="danger">
                            this is
                        </Alert>
                        <Alert color="danger">
                            this is 
                        </Alert>
                        </Col>
                        
                    </Row>
                </Container>
            </>
        )
    }
}

export default MyApp;