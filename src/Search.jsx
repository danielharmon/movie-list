import React from 'react'

const Search = function(props) {
    return (
      <form onSubmit={props.onSubmit}>
        <input type="textarea" placeholder={props.placeholder}></input>
        <input type="submit" value="Go"></input>
      </form>
    )
}



export default Search;