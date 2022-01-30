import React, { useEffect, useState } from 'react';
import Pdf from 'react-to-pdf';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllBugsforProject, getProject } from '../../redux/actions/project';
const ref = React.createRef();

const Summary = () => {
    const { projects, bugs } = useSelector((state) => state.project);
    const dispatch = useDispatch();
    const location = useLocation().pathname.split('/')[2];

    useEffect(() => {
        dispatch(getAllBugsforProject(location));
        dispatch(getProject(location));
    }, [location]);
    return (
        <>
            <div className='container-fluid'>
                <Pdf targetRef={ref} filename='bugDetails.pdf'>
                    {({ toPdf }) => (
                        <button onClick={toPdf}>Generate Pdf</button>
                    )}
                </Pdf>
                <div ref={ref}>
                    <h1>Bug Details</h1>

                    {bugs.map((bug) => {
                        return (
                            <div>
                                <h3>{bug.title}</h3>
                                <p>{bug.descriptions}</p>
                                <br />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* <div style={{height:"550px", width:"550px"}}>
              
                    <Pie data={data} />;
              
            </div> */}
        </>
    );
};

export default Summary;
