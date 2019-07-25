import React from 'react'
import Editor from './editor'
import RenderHTML from './RenderHTML'

import './styles.css'

const MarkdownConvertor = props => (
    <div className="markdown-container">
        <div className="markdown-section editor">
            <Editor value={props.value} onChange={props.onChange} />
        </div>
        <div className="markdown-section">
            <RenderHTML value={props.value} />
        </div>
    </div>
)

export default MarkdownConvertor