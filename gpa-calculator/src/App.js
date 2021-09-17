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
        <td>{(props.id + 1)}</td>
        <td><input className="course-title" placeholder={"Click to input course title"} defaultValue={props.title}></input></td>
        <td>
          <Form.Select onChange={e=>props.onGradeChange(props.id, e.target.value)} bg="none" value={props.grade} variant="none"  title="Grade">
            <option value={5}>A</option>
            <option value={4}>B</option>
            <option value={3}>C</option>
            <option value={2}>D</option>
            <option value={1}>E</option>
            <option value={0}>F</option>
          </Form.Select>
        </td>
        <td>
          <input step={1} min={0} onInput={e=>props.onUnitChange(props.id, e.target.value)} value={props.unit} id="course-credit" type="number"></input>
        </td>
      </tr>
    
  )
}

class Semester extends React.Component{
   
  render(){
    const courses = this.props.courses;
    return(
      <>  
      <div className="semester_name col-header">SEMESTER {(this.props.id + 1)}</div>                      
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
            {courses.map((course, i) =>{
              return <Course key={i} id={i} title={course.title} 
                      unit={course.unit} grade={course.grade} 
                      onGradeChange={(course_id, grade)=>this.props.onGradeChange(this.props.id,course_id, grade)}
                      onUnitChange={(course_id, unit)=>this.props.onUnitChange(this.props.id,course_id, unit)}/>
            })}

            <tr className="button-parent">
              <td></td>
              <td></td>
              <td></td>
              <td className="button-parent"><Button variant='light' className="add-course-btn" onClick={()=>this.props.addCourse(this.props.id)}>Add New Course</Button></td>
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
    const id = 0
    this.state = {
      semesters:[{
        courses:[{
          title:"",
          unit:0,
          grade:5,
        }],
        gpa: 0,
        total_credit_unit:0,
        total_quality_point:0,
      }],

      active_semester_key: id,
    }
  }
  //When I add the course delete function,
  //When a course is deleted, change the props id to it's current place
  //on the table
  addCourse(sem_id){
    const semesters = this.state.semesters.slice();
    const semester = semesters[sem_id]

    const courses = semester.courses.concat([{
                    title:"",
                    unit:0,
                    grade:5,
                  }]);
    semester.courses = courses;

    this.setState({
      semesters: semesters
    })
  }

  handleUnitChange(semester_id,course_id, unit){
    const semesters = this.state.semesters.slice(); //Returns course
    const semester = semesters[semester_id]
    const courses = semester.courses
    const course = courses[course_id]
    course.unit = unit

    const gpa = this.getSemesterGpa(courses)
    
    semester.gpa = gpa.result || 0
    semester.total_credit_unit = gpa.total_credit_unit
    semester.total_quality_point = gpa.total_quality_point
    this.setState({
      semesters: semesters
    })

  }

  handleGradeChange(semester_id,course_id, grade){
    const semesters = this.state.semesters.slice(); //Returns course
    const semester = semesters[semester_id]
    const courses = semester.courses
    const course = courses[course_id]
    course.grade = grade

    const gpa = this.getSemesterGpa(courses)
    semester.gpa = gpa.result || 0 //Using .toString, incase of NaN Value
    semester.total_credit_unit = gpa.total_credit_unit.toString()
    semester.total_quality_point = gpa.total_quality_point.toString()
    this.setState({
      semesters: semesters
    })

  }



  createNewSemester(){
    const id = this.state.semesters.length
    const semesters = this.state.semesters.slice();      
    this.setState({
      semesters: semesters.concat([{
        courses: [{
          title:"",
          unit:0,
          grade:5,
        }],
        gpa: 0,
        total_credit_unit:0,
        total_quality_point:0,
      }]),
      active_semester_key: id,
    });
  }

  setActiveSemester(event){
    const id = event.target.value;
    this.setState({
      active_semester_key:id,
    })
  }

  getSemesterGpa(courses){
    let total_credit_unit = 0
    let total_quality_point = 0
    courses.forEach((course)=>{
      const grade = parseInt(course.grade);
      const unit = parseFloat(course.unit);
      const quality_point = grade * unit;
      total_quality_point += quality_point;
      total_credit_unit += unit;
    })

    const result_gpa = total_quality_point/total_credit_unit;
    return {result:result_gpa, total_quality_point:total_quality_point, total_credit_unit:total_credit_unit}
  }

  getCumulativeGpa(){
    let total_quality_point = 0;
    let total_credit_unit = 0;
    this.state.semesters.forEach(semester=>{
      total_credit_unit += semester.total_credit_unit;
      total_quality_point += semester.total_quality_point;
    })
    let cgpa = (total_quality_point/total_credit_unit) || 0;
    return (cgpa)
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
              <TabContainer activeKey={this.state.active_semester_key} defaultActiveKey={1}>
                <Row>
                  
                  <Col sm={9} className="border-right"> {/*GPA CALCULATION */}
                    {this.state.semesters.map((semester, i)=>{ 
                      //Index will be preserved, so key=index
                      return(
                        <Tab.Content key={i}>
                          <Tab.Pane eventKey={i}>
                            <Semester id={i} courses={semester.courses} 
                            addCourse={(sem_id)=>{this.addCourse(sem_id)}} 
                            onGradeChange={(sem_id, course_id, grade)=>this.handleGradeChange(sem_id, course_id, grade)}
                            onUnitChange={(sem_id, course_id, unit)=>this.handleUnitChange(sem_id, course_id, unit)}/>
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
                      {this.getCumulativeGpa().toFixed(2)}/5
                      <Col></Col>
                    </Row>
                    {this.state.semesters.map((semester, i)=>{
                      return(
                        <Row>
                          <Col sm={9}>{'Semester ' + (i+1)}</Col>
                          <Col>{semester.gpa.toFixed(2)}/5</Col>
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
                        this.state.semesters.map((semester, i)=>{
                          return(
                            <Nav.Item key={i}>
                              <Nav.Link onClick={(e)=>this.setActiveSemester(e)} value={i} eventKey={i} className="semester_btn">Semester {i+1}</Nav.Link>
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
