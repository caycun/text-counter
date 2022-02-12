import logo from './logo.svg';
import counter from './components/counter.js'
import './App.css';
import React, { useState, useEffect } from 'react'

class App extends React.Component {
   constructor(props){
		super(props)
    this.state = {
     letterCount: 0,
     wordCount: 0,
     spaceCount: 0,
     sentenceCount: 0
    }
   }

      handleChange = (e) => {
        e.preventDefault()
        this.setState({
          letterCount: e.target.value?.length || 0, 
          wordCount: e.target.value.match(/(\w+)/g)?.length || 0, 
          spaceCount: (e.target.value.split(" ")?.length - 1) || 0,
          sentenceCount: e.target.value.split(/[.!?]/)?.length - 1
        })
      } 
     


  render(){
    return (
  <>
    <div className="container">
   <table class="rwd-table">
  <tr>
    <th>Characters</th>
    <th>Words</th>
    <th>Spaces</th>
    <th>Sentences</th>
  </tr>
  <tr>
    <td data-th="Characters">{this.state.letterCount}</td>
    <td data-th="Words">{this.state.wordCount}</td>
    <td data-th="Spaces">{this.state.spaceCount}</td>
    <td data-th="Sentences">{this.state.sentenceCount}</td>
  </tr>
</table>
   <div class="textarea_style">
      <textarea onInput={this.handleChange}></textarea>
      </div> 
      </div>  
   <div class="footer">
        © 2022 <a href="https://github.com/yle-l2c">Yle</a>
        <a href="https://github.com/yle-l2c"><i class="fab fa-github"></i></a>
      </div>
      
      </>

    );
  }
}

export default App;
