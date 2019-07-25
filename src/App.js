import React from 'react';
import Header from './components/Header/Header'
import Dropdown from './components/Dropdown/Dropdown'

function App() {
  const [template, setTemplate] = React.useState();

  const templateList = [{
    "id": "template1",
    "content" : ""
  }, {
    "id": "template2",
    "content" : ""
  }];

  const onChange = (value) => {
    setTemplate(() => templateList[value])
  }
  
  return (
    <div className="App">
      <Header title="CONTENT EDITOR" />
      <Dropdown label="Select a template" menu={templateList} onChange={onChange} />
    </div>
  );
}

export default App;
