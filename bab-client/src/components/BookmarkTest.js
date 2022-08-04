import React, { useState } from 'react';
import "../css/BookmarkTest.css"
import BookmarkTestResult from './BookmarkTestResult';


const BookmarkTest = () => {

    const [tstVisible, setTstVisible] = useState(true);
    const [rstVisible, setRstVisible] = useState(false);
    const [number, setNumber] = useState(0);
    const testChange = (props) => {
        setTstVisible(!tstVisible);
        setRstVisible(!rstVisible);
        setNumber(props)
    }

    return (
        <>

        <div className={`bookmarkSelect ${ tstVisible ? '' : 'hidden'}`}>
            <button className="bookmarkChoice1" onClick={ () => { testChange(0) }} /> 
            <button className="bookmarkChoice2" onClick={ () => { testChange(1) }} /> 
            <button className="bookmarkChoice3" onClick={ () => { testChange(2) }} /> 
            <button className="bookmarkChoice4" onClick={ () => { testChange(3) }} /> 
            <button className="bookmarkChoice5" onClick={ () => { testChange(4) }} /> 
            <button className="bookmarkChoice6" onClick={ () => { testChange(5) }} /> 
        </div>
        <div>
            {rstVisible && <BookmarkTestResult number={number} /> } 
        </div>
        </>
    )
}

export default BookmarkTest;