import React from 'react';
import NavBar from './NavBar';
import { FlexContainer } from './Layout'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form,Row,Col,Container,Alert,Breadcrumb } from 'react-bootstrap';
const FormField = ({subject,type}) =>{

    return(
        <div>
            {subject} : <input></input>
        </div>
    )
}
const FishAddDic = () => {
    return(
        <>
            <NavBar/>
            {/* <FlexContainer direction={'column'}>
                <FormField subject={'species'}></FormField>
                <FormField subject={'standard_length'}></FormField>
            </FlexContainer> */}
            <Container>
            <Alert variant={'dark'}>
                fish_info
            </Alert>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control defaultValue="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Multiple files input example</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>

            </Form>
            </Container>
        </>
    )
}

export default FishAddDic;