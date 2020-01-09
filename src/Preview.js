import React from 'react'
import marked from 'marked'

function Preview(props){
    return(
      <div id='preview' dangerouslySetInnerHTML ={{__html:marked(props.input)}}></div>
    );
  }

export default Preview