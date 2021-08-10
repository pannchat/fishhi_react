import React,{useCallback, useState,useMemo} from 'react';
import NavBar from './NavBar';
import { FlexContainer } from './Layout'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import './css/init.css';

import {Form,Row,Col,Container,Alert,Breadcrumb,FloatingLabel,Tabs,Tab,Sonnet } from 'react-bootstrap';

const FormField = ({subject,type}) =>{

    return(
        <div>
            {subject} : <input></input>
        </div>
    )
}
const test = () =>{
    return(
        <div>
            test
        </div>
    )
}
const Text2Json = React.memo(() =>{
    const TextArea = styled.div`
        word-break:normal;
    `;
    const [text, setText] = useState('');
    const onChange = useCallback((e) =>{
        setText((e.target.value).split("\n").join("\\n"));
    },[text]);
    return(
        <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>description</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={onChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

        <Form.Control as="textarea" rows={3} value={text} readOnly/>
        </Form.Group>
        </>
    )
});

const FishAddDic = () => {
    

    const SubstitutionText = () =>{
    
    }
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
                <Form.Group as={Row} className="mb-3" controlId="species">
                    <Form.Label column sm="3">
                    species
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control placeholder="금붕어" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="species">
                    <Form.Label column sm="3">
                    standard_length(cm)
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="number" placeholder="5" />
                    </Col>
                </Form.Group>

                <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>min_temperature(°C)</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>max_temperature(°C)</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>
       


                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>min_pH</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>max_pH</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>
                <Text2Json />

            </Form>
            

            </Container>
        </>
    )
}

export default React.memo(FishAddDic);