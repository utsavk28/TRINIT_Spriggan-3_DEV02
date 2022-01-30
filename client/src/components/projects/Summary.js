import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import { Button, Card, Col, Form, Row } from 'react-bootstrap';
// import {data} from "./SummaryData";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();


// ChartJS.register(ArcElement, Tooltip, Legend);


const Summary = () => {
  return (
    <>
    <div className='container-fluid'>
    <Pdf targetRef={ref} filename="bugDetails.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Bug Details</h1>
        <h2>Bug 1</h2>
        <h4>Title: Bug Test 1</h4>
        <h5>Description: Bug 1 Description</h5>
        <br />
        <h2>Bug 2</h2>
        <h4>Title: Bug Test 2</h4>
        <h5>Description: Bug 2 Description</h5>
        <h2>Bug 3</h2>
        <h4>Title: Bug Test 3</h4>
        <h5>Description: Bug 3 Description</h5>
      </div>

    </div>
  
    {/* <div style={{height:"550px", width:"550px"}}>
              
                    <Pie data={data} />;
              
            </div> */}
    </>
  );
};

export default Summary;
