import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

function Editor(props) {
  return (
    <form className="markup-textarea-container">
      <textarea value={props.value} onChange={props.onChange} />
    </form>
  )
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default Editor