import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import React from 'react';



function Course(props){
  return(
    <tr>
    <td>{props.id}</td>
    <td>{<span contentEditable class="course-title">{props.title}</span>}</td>
    <td>
      <DropdownButton>
        <Dropdown.Item>A</Dropdown.Item>
        <Dropdown.Item>B</Dropdown.Item>
        <Dropdown.Item>C</Dropdown.Item>
        <Dropdown.Item>D</Dropdown.Item>
        <Dropdown.Item>E</Dropdown.Item>
        <Dropdown.Item>F</Dropdown.Item>
      </DropdownButton>
    </td>
    <td>
      <input step={0.1} id="course-credit" type="number"></input>
    </td>
  </tr>
  )
}

class Semester extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      courses:[<Course id={1} title="GEG 123"/>], //Array of Course Components
    }
  }
  handleClick(){
    const id = this.state.courses.length + 1
    const courses = this.state.courses.concat([<Course id={id} title={'GEG 123'}/>])
    this.setState({
      courses: courses
    })
  }
  render(){
    return(
      <>  
      <div class="semester_name">SEMESTER {this.props.semseter_id}</div>                      
      <Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Course Name or Code</th>
              <th>Grade</th>
              <th>Credits/Units</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((course) =>{
              return course
            })}

            <tr class="button-parent">
              <td></td>
              <td></td>
              <td></td>
              <td class="button-parent"><Button variant='light' className="add-course-btn" onClick={()=>this.handleClick()}>Add New Course</Button></td>
            </tr>
          </tbody>
        </Table>
      </Row> {/* Table */}
      </>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      semesters:[<Semester id={1}/>]
    }
  }
  handleClick(){
    const id = this.state.semesters.length + 1
    this.setState({
      semesters: this.state.semesters.concat([<Semester id={id}/>])
    })
  }
  render(){
    return (
      <div className="App">
        <Navbar bg="light" variant="blue">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src= {logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            React Bootstrap
            </Navbar.Brand>
            <Nav bg="bg-cyan" className="align-right">
              <Button href="#deets">Login</Button>
            </Nav>
          </Container>
        </Navbar>
        <div class="title-div d-flex justify-content-center flex-column align-items-center">
            <h2>GPA CALCULATOR</h2>
            <h5>Calculate Semester GPA and Cumulative GPA</h5>
            <div class="gpa-card-div">

                <Row>
                  <Col sm={9} className="border-right"> {/*GPA CALCULATION */}
                    <Semester/>
                  </Col>

                  <Col></Col> {/* RESULT DISPLAYED */}
                </Row>
                

              <div class="card-header-div">
                <Container>
                  <Nav className="justify-content-end p-2">
                    {
                      this.state.semesters.map((semester)=>{
                        return(
                          <Nav.Item>
                          <Button className="semester_btn">Semester {semester.props.id}</Button>
                          </Nav.Item>
                        )
                      })

                    }
                    <Nav.Item>
                      <Button onClick={()=>{this.handleClick()}} className="add_semester">+</Button>
                    </Nav.Item>
                  </Nav>
                </Container>
              </div>
              
            </div>          
        </div>
      </div>
    );
  }
}

export default App;
