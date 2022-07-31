import React, { useState } from 'react';
import "../css/Bookmark.css"
import BookmarkTest from '../components/BookmarkTest';

const Bookmark = () => {
    const [visible, setVisible] = useState(false);
    const [btnVisible, setBtnVisible] = useState(true);
    const testChange = () => {
        setVisible(!visible);
        setBtnVisible(!btnVisible);
    }

    return (
        <div className="bookmark">
            <button className={`bookmarkStart ${ btnVisible ? '' : 'hidden'}`} onClick={ () => { testChange() }} />
            {visible && <BookmarkTest /> }
        </div>
    )
}

export default Bookmark;