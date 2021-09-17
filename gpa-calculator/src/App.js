import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import Table from 'react-bootstrap/Table';
import React from 'react';




function Course(props){
  return(
      <tr key={props.id}>
        <td>{props.id}</td>
        <td><input className="course-title" defaultValue={props.title}></input></td>
        <td>
          <Form.Select onChange={e=>props.onGradeChange(props.id, e.target.value)} bg="none" variant="none"  title="Grade">
            <option value={5}>A</option>
            <option value={4}>B</option>
            <option value={3}>C</option>
            <option value={2}>D</option>
            <option value={1}>E</option>
            <option value={0}>F</option>
          </Form.Select>
        </td>
        <td>
          <input step={0.1} onInput={e=>props.onUnitChange(props.id, e.target.value)} id="course-credit" type="number"></input>
        </td>
      </tr>
    
  )
}

class Semester extends React.Component{
  constructor(props){
    super(props);
    const id = 1
    this.state = {
      courses:[<Course onUnitChange={(val)=>{this.onUnitChange(id,val)}} onGradeChange={(val)=>{this.onGradeChange(id,val)}} key={id} id={id} title="GEG 123"/>], //Array of Course Components
    }
  }
 
  

  handleClick(){
    const id = this.state.courses.length + 1
    const courses = this.state.courses.concat([<Course onUnitChange={(val)=>{this.props.onUnitChange(val)}} onGradeChange={()=>{this.props.onGradeChange()}} key={id} id={id} title={'GEG 123'}/>])
    this.setState({
      courses: courses
    })
  }
  render(){

    return(
      <>  
      <div className="semester_name col-header">SEMESTER {this.props.id}</div>                      
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

            <tr className="button-parent">
              <td></td>
              <td></td>
              <td></td>
              <td className="button-parent"><Button variant='light' className="add-course-btn" onClick={()=>this.handleClick()}>Add New Course</Button></td>
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
    const id = 1
    this.state = {
      semesters:[<Semester onUnitChange={(val)=>{this.onUnitChange(val)}} onGradeChange={(val)=>{this.onGradeChange(val)}} key={id} id={id}/>],
      semester_key: id,
    }
  }

  onUnitChange(val){
    console.log(val)
  }

  onGradeChange(val){
    console.log(val)
  }

  createNewSemester(){
    const id = this.state.semesters.length + 1
    const semester = <Semester onGradeChange={()=>{this.onGradeChange()}} key={id} id={id}/>
    this.setState({
      semesters: this.state.semesters.concat([semester]),
      semester_key:id,
    })
  }

  setActiveSemester(event){
    const id = event.target.value;
    this.setState({
      semester_key:id,
    })
  }

  getSemesterGpa(courses){
    let total_quality_point = 0
    courses.forEach((course)=>{
      const grade = course.state.grade;
      const unit = course.state.unit;
      const quality_point = grade * unit;
      total_quality_point += quality_point ;
    })
    return total_quality_point
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
        <div className="title-div d-flex justify-content-center flex-column align-items-center">
            <h2>GPA CALCULATOR</h2>
            <h5>Calculate Semester GPA and Cumulative GPA</h5>
            <div className="gpa-card-div">
              <TabContainer activeKey={this.state.semester_key} defaultActiveKey={1}>
                <Row>
                  
                  <Col sm={9} className="border-right"> {/*GPA CALCULATION */}
                    {this.state.semesters.map((semester)=>{
                      return(
                        <Tab.Content key={semester.props.id}>
                          <Tab.Pane eventKey={semester.props.id}>
                            {semester}
                          </Tab.Pane>
                        </Tab.Content>
                      )
                    })}
                    
                  </Col>
                    

                  <Col>
                    <div className="col-header"></div>
                    <Row>
                      Cumulative GPA
                    </Row>
                      
                    <Row>
                      <Col sm={9}>Cumulative</Col>
                      <Col>4.95</Col>
                    </Row>
                    {this.state.semesters.map((semester)=>{
                      return(
                        <Row>
                          <Col sm={9}>{'Semester' + semester.props.id}</Col>
                          <Col>4.75</Col>
                        </Row>
                      )
                    })}

                  </Col> {/* RESULT DISPLAYED */}
                </Row>
                

                {/* Add New Semester Button */}
                <div className="card-header-div">
                  <Container>
                    <Nav className="justify-content-start p-2">
                      {
                        this.state.semesters.map((semester)=>{
                          return(
                            <Nav.Item key={semester.props.id}>
                              <Nav.Link onClick={(e)=>this.setActiveSemester(e)} value={semester.props.id} eventKey={semester.props.id} className="semester_btn">Semester {semester.props.id}</Nav.Link>
                            </Nav.Item>
                          )
                        })

                      }
                      <Nav.Item>
                        <Button onClick={()=>{this.createNewSemester()}} className="add_semester">+</Button>
                      </Nav.Item>
                    </Nav>
                  </Container>
                </div>
              </TabContainer>
              
            </div>          
        </div>
      </div>
    );
  }
}

export default App;
