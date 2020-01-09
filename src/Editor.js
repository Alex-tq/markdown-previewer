import React from 'react';

function Editor(props){
    return(
      <div id='editorContainer'>
        <textarea id='editor' onChange={props.onChange} value={props.value} />
      </div>
    );
  }

export default Editor