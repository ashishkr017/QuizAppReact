import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);
function App(){
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
      
      </div>
  );
}
function Header(){
  return (<h1>Header coomponent</h1>);
}

function GetResult(event){
   let ans1=event.target.q1.value;
   let ans2=event.target.q2.value;
  let marks=0;
  if(ans1==='A. OOPS'){
    marks++;
  }
  if(ans2==='D. All'){
    marks++;
  }




  alert("You got: "+marks);
}


function Content(){
  return (
  <div className='cont'>
    <h1>Answer the question</h1>
    <form onSubmit={GetResult}>
    <Ques
    ques="Q. What is java?"
    op1="A. OOPS"
    op2="B. Functional"
    op3="C. Scripting"
    op4="D. Type-Scripting"
    name="q1"
    />


    <Ques
    ques="Q. What is Python"
    op1="A. OOPS"
    op2="B. Functional"
    op3="C. Scripting"
    op4="D. All"
    name="q2"
    />  
    
    <input type='submit' value="Get Result"/>
  </form>
  </div>);
}
function Footer(){
  return (
    <h1>Footer Component</h1>
  );
}
function Ques(props){
  return(
    <div className='ques' style={{backgroundColor:'grey',padding:'5px'}}>
      <h2>{props.ques}</h2>
      <input type='radio' name={props.name} value={props.op1}/><label>{props.op1}</label>
      <input type='radio' name={props.name} value={props.op2}/><label>{props.op2}</label>

      <input type='radio' name={props.name} value={props.op3}/><label>{props.op3}</label>

      <input type='radio' name={props.name} value={props.op4}/><label>{props.op4}</label>


      {/* <h4>{props.op1}</h4>
      <h4>{props.op2}</h4>
      <h4>{props.op3}</h4>
      <h4>{props.op4}</h4> */}
    </div>
  )
}


