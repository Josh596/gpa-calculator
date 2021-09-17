(this["webpackJsonpgpa-calculator"]=this["webpackJsonpgpa-calculator"]||[]).push([[0],{48:function(e,t,s){},49:function(e,t,s){},57:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),i=s(15),r=s.n(i),c=(s(48),s(33)),l=s(34),o=s(39),d=s(37),u=s.p+"static/media/logo.6ce24c58.svg",j=(s(49),s(50),s(36)),h=s(21),b=s(30),O=s(35),m=s(20),p=s(12),x=s(43),v=s(38),g=s(26),f=s(41),_=s(1);function C(e){return Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:e.id+1}),Object(_.jsx)("td",{children:Object(_.jsx)("input",{className:"course-title",placeholder:"Click to input course title",defaultValue:e.title})}),Object(_.jsx)("td",{children:Object(_.jsxs)(x.a.Select,{onChange:function(t){return e.onGradeChange(e.id,t.target.value)},bg:"none",value:e.grade,variant:"none",title:"Grade",children:[Object(_.jsx)("option",{value:5,children:"A"}),Object(_.jsx)("option",{value:4,children:"B"}),Object(_.jsx)("option",{value:3,children:"C"}),Object(_.jsx)("option",{value:2,children:"D"}),Object(_.jsx)("option",{value:1,children:"E"}),Object(_.jsx)("option",{value:0,children:"F"})]})}),Object(_.jsx)("td",{children:Object(_.jsx)("input",{step:1,min:0,onInput:function(t){return e.onUnitChange(e.id,t.target.value)},value:e.unit,id:"course-credit",type:"number"})})]},e.id)}var y=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.courses;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"semester_name col-header",children:["SEMESTER ",this.props.id+1]}),Object(_.jsx)(m.a,{children:Object(_.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(_.jsx)("thead",{children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"#"}),Object(_.jsx)("th",{children:"Course Name or Code"}),Object(_.jsx)("th",{children:"Grade"}),Object(_.jsx)("th",{children:"Credits/Units"})]})}),Object(_.jsxs)("tbody",{children:[t.map((function(t,s){return Object(_.jsx)(C,{id:s,title:t.title,unit:t.unit,grade:t.grade,onGradeChange:function(t,s){return e.props.onGradeChange(e.props.id,t,s)},onUnitChange:function(t,s){return e.props.onUnitChange(e.props.id,t,s)}},s)})),Object(_.jsxs)("tr",{className:"button-parent",children:[Object(_.jsx)("td",{}),Object(_.jsx)("td",{}),Object(_.jsx)("td",{}),Object(_.jsx)("td",{className:"button-parent",children:Object(_.jsx)(b.a,{variant:"light",className:"add-course-btn",onClick:function(){return e.props.addCourse(e.props.id)},children:"Add New Course"})})]})]})]})})," "]})}}]),s}(a.a.Component),S=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;Object(c.a)(this,s);return(n=t.call(this,e)).state={semesters:[{courses:[{title:"",unit:0,grade:5}],gpa:0,total_credit_unit:0,total_quality_point:0}],active_semester_key:0},n}return Object(l.a)(s,[{key:"addCourse",value:function(e){var t=this.state.semesters.slice(),s=t[e],n=s.courses.concat([{title:"",unit:0,grade:5}]);s.courses=n,this.setState({semesters:t})}},{key:"handleUnitChange",value:function(e,t,s){var n=this.state.semesters.slice(),a=n[e],i=a.courses;i[t].unit=s;var r=this.getSemesterGpa(i);a.gpa=r.result||0,a.total_credit_unit=r.total_credit_unit,a.total_quality_point=r.total_quality_point,this.setState({semesters:n})}},{key:"handleGradeChange",value:function(e,t,s){var n=this.state.semesters.slice(),a=n[e],i=a.courses;i[t].grade=s;var r=this.getSemesterGpa(i);a.gpa=r.result||0,a.total_credit_unit=r.total_credit_unit.toString(),a.total_quality_point=r.total_quality_point.toString(),this.setState({semesters:n})}},{key:"createNewSemester",value:function(){var e=this.state.semesters.length,t=this.state.semesters.slice();this.setState({semesters:t.concat([{courses:[{title:"",unit:0,grade:5}],gpa:0,total_credit_unit:0,total_quality_point:0}]),active_semester_key:e})}},{key:"setActiveSemester",value:function(e){var t=e.target.value;this.setState({active_semester_key:t})}},{key:"getSemesterGpa",value:function(e){var t=0,s=0;return e.forEach((function(e){var n=parseInt(e.grade),a=parseFloat(e.unit);s+=n*a,t+=a})),{result:s/t,total_quality_point:s,total_credit_unit:t}}},{key:"getCumulativeGpa",value:function(){var e=0,t=0;return this.state.semesters.forEach((function(s){t+=s.total_credit_unit,e+=s.total_quality_point})),e/t||0}},{key:"render",value:function(){var e=this;return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(j.a,{bg:"light",variant:"blue",children:Object(_.jsxs)(O.a,{children:[Object(_.jsxs)(j.a.Brand,{href:"#home",children:[Object(_.jsx)("img",{alt:"",src:u,width:"30",height:"30",className:"d-inline-block align-top"}),"React Bootstrap"]}),Object(_.jsx)(h.a,{bg:"bg-cyan",className:"align-right",children:Object(_.jsx)(b.a,{href:"#deets",children:"Login"})})]})}),Object(_.jsxs)("div",{className:"title-div d-flex justify-content-center flex-column align-items-center",children:[Object(_.jsx)("h2",{children:"GPA CALCULATOR"}),Object(_.jsx)("h5",{children:"Calculate Semester GPA and Cumulative GPA"}),Object(_.jsx)("div",{className:"gpa-card-div",children:Object(_.jsxs)(g.a,{activeKey:this.state.active_semester_key,defaultActiveKey:1,children:[Object(_.jsxs)(m.a,{children:[Object(_.jsxs)(p.a,{sm:9,className:"border-right",children:[" ",this.state.semesters.map((function(t,s){return Object(_.jsx)(v.a.Content,{children:Object(_.jsx)(v.a.Pane,{eventKey:s,children:Object(_.jsx)(y,{id:s,courses:t.courses,addCourse:function(t){e.addCourse(t)},onGradeChange:function(t,s,n){return e.handleGradeChange(t,s,n)},onUnitChange:function(t,s,n){return e.handleUnitChange(t,s,n)}})})},s)}))]}),Object(_.jsxs)(p.a,{children:[Object(_.jsx)("div",{className:"col-header"}),Object(_.jsx)(m.a,{children:"Cumulative GPA"}),Object(_.jsxs)(m.a,{children:[Object(_.jsx)(p.a,{sm:9,children:"Cumulative"}),this.getCumulativeGpa().toFixed(2),"/5",Object(_.jsx)(p.a,{})]}),this.state.semesters.map((function(e,t){return Object(_.jsxs)(m.a,{children:[Object(_.jsx)(p.a,{sm:9,children:"Semester "+(t+1)}),Object(_.jsxs)(p.a,{children:[e.gpa.toFixed(2),"/5"]})]})}))]})," "]}),Object(_.jsx)("div",{className:"card-header-div",children:Object(_.jsx)(O.a,{children:Object(_.jsxs)(h.a,{className:"justify-content-start p-2",children:[this.state.semesters.map((function(t,s){return Object(_.jsx)(h.a.Item,{children:Object(_.jsxs)(h.a.Link,{onClick:function(t){return e.setActiveSemester(t)},value:s,eventKey:s,className:"semester_btn",children:["Semester ",s+1]})},s)})),Object(_.jsx)(h.a.Item,{children:Object(_.jsx)(b.a,{onClick:function(){e.createNewSemester()},className:"add_semester",children:"+"})})]})})})]})})]})]})}}]),s}(a.a.Component),k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,60)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(S,{})}),document.getElementById("root")),k()}},[[57,1,2]]]);
//# sourceMappingURL=main.3881d9dd.chunk.js.map