import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className="ui segment" style={{ marginTop: '10px' }}>
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={onInputChange} />
                </div>
            </form>
        </div>
    );
};


export default SearchBar;