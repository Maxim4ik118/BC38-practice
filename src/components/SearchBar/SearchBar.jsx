const { useState } = require("react");

export const SearchBar = ({onSubmit}) => {
    const [query, setQuery] = useState('');
    const hendleChange = (e) => {
        setQuery(e.target.value)
    }
    const handlerFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
    }
    return (
        <div>
            <form onSubmit={handlerFormSubmit}>
                <input type="text"
                value={query} 
                onChange={hendleChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}