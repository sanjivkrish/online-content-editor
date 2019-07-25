import React from 'react';
import Header from './components/Header/Header'
import Dropdown from './components/Dropdown/Dropdown'
import MarkdownConvertor from './components/MarkdownConvertor'

// Sample templates
let templateList = [{
  id: "template1",
  content : `# This is a header\n\nAnd this is a paragraph`
}, {
  id: "template2",
  content : `# Sample template

  Following is a list component.
  
  * First Point
  * Second Point`
}];

function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [template, setTemplate] = React.useState(templateList[activeIndex]);

  // On template toggle
  const onChange = (value) => {
    setActiveIndex(() => value);
    setTemplate(() => { return { ...templateList[value] }})
  }

  // On content change
  const handleMarkdownChange = event => {
    let newContent = event.target.value

    templateList[activeIndex].content = newContent
 
    setTemplate(() => { return { ...templateList[activeIndex] }})

  }
  
  return (
    <div className="App">
      <Header title="CONTENT EDITOR" />
      <Dropdown label="Select a template" menu={templateList} onChange={onChange} />
      <MarkdownConvertor value={template.content} onChange={handleMarkdownChange} />
    </div>
  );
}

export default App;
