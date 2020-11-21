import React from 'react'

const AddTitle = function(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="textarea" placeholder="Add your titles here"></input>
      <input type="submit" value="Add"></input>
    </form>
  )
}

export default AddTitle;