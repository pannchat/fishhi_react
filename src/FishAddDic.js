import React,{useCallback, useState,useMemo,useEffect} from 'react';
import NavBar from './NavBar';
import {darken} from 'polished';
import styled from 'styled-components';

import {Form,Row,Col,Container,Button,FloatingLabel,Tabs,Tab,Sonnet } from 'react-bootstrap';
import {useDropzone} from 'react-dropzone';
const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


function Previews(props) {

  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: "image/gif, image/jpg, image/jpeg",
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      console.log(acceptedFiles)
    },
    maxFiles:5,
    maxSize:15728640,
    onDropRejected: () => {
        alert("에러");
    }
  });
//   (function test(){
//     setFiles([{
//         name:'test',
//         preview:'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F24611E4853FDAE0B148760'
//       }]);

//   })();
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  const {

    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*'});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);
  const containerStyle = {
      width:'100%',
      margin:'15px'
  };




  return (
    <section style={{padding:'10px'}}>
      <div {...getRootProps({style})} >
        <input {...getInputProps()} />
        <p>여기에 파일을 끌어놓거나 클릭해주세요.</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}
const FormField = ({subject,type}) =>{

    return(
        <div>
            {subject} : <input></input>
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
const palette = {
    gray : '#ced4da',
    pink : '#ffc9c9',
};
const Alert = styled.div`
    width:auto;
    box-sizing : border-box;
    margin:10px;
    padding:10px;
    background-color: ${props => props.variant};
    border : 1px solid ${props => darken(0.1, props.variant)};
    border-radius:4px;
    
`;
const FishAddDic = () => {
    

    const SubstitutionText = () =>{
    
    }
    return(
        <>
            <NavBar/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      
            <Container>
            <Alert variant={palette.gray}>
                fish_info
            </Alert>
            <Previews />
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
                <Row className="mb-3">
                <Form.Label column sm="11">
                    </Form.Label>
                    <Col sm="1">
                    <Button variant="outline-secondary" onClick={()=>test()}>제출</Button>
                    </Col>
                        

                </Row>
                
                
            </Form>
            
            
            </Container>
            
        </>
    )
}

export default React.memo(FishAddDic);