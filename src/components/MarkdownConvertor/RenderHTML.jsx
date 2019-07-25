import React from "react"
import ReactMarkdown from "react-markdown"
import PropTypes from "prop-types"

const RenderHTML = props => (
    <ReactMarkdown source={props.value} />
);

RenderHTML.propTypes = {
    value: PropTypes.string
}

export default RenderHTML