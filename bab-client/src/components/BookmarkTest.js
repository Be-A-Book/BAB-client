import React, { useState } from 'react';
import "../css/BookmarkTest.css"
import BookmarkTestResult from './BookmarkTestResult';

const BookmarkTest = () => {

    const [tstVisible, setTstVisible] = useState(true);
    const [rstVisible, setRstVisible] = useState(false);
    const testChange = () => {
        setTstVisible(!tstVisible);
        setRstVisible(!rstVisible);
    }

    return (
        <>
        <div className={`bookmarkSelect ${ tstVisible ? '' : 'hidden'}`}>
            <button className="bookmarkChoice1" onClick={ () => { testChange() }} /> 
            <button className="bookmarkChoice2" onClick={ () => { testChange() }} /> 
            <button className="bookmarkChoice3" onClick={ () => { testChange() }} /> 
            <button className="bookmarkChoice4" onClick={ () => { testChange() }} /> 
            <button className="bookmarkChoice5" onClick={ () => { testChange() }} /> 
            <button className="bookmarkChoice6" onClick={ () => { testChange() }} /> 
        </div>
        <div>
            {rstVisible && <BookmarkTestResult /> } 
        </div>
        </>
    )
}

export default BookmarkTest;