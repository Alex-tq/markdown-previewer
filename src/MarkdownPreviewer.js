import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import marked from 'marked';

class MarkdownPreviewer extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        input: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
      this.setState({
        input:`
  # This is an h1 tag 
  ## This is an h2 tag 
  **This text will be bold**
  
  \`<h1>\` Inline Code
  
  > This is a blockquote
  > This is a blockquote.
  
  \`\`\`
        if (ThisIsBlockOfCode){
          return true
        }
  \`\`\`
  * Item 1
  * Item 2
  
  [This is a link to FreeCodeCamp](https://www.freecodecamp.org/)
  
  ![happy face image](https://image.shutterstock.com/image-vector/emoticon-dancing-music-260nw-336486941.jpg)
  `
      })
    }
    handleChange(e){
      this.setState({
        input: e.target.value
        })
    }
    render(){
      marked.setOptions({
        breaks: true,
      });
      return(
        <div id='container'>
          <div className="titles" id='editor-title'>Editor</div>
          <div className="titles" id='preview-title'>Preview</div>  
          <Editor onChange={this.handleChange} value={this.state.input}/>
          <Preview input={this.state.input}/>
        </div>
      );
    }
  } 
  
  export default MarkdownPreviewer