import React, { Component } from 'react'
import Classes from './Form.module.css'
import Style from './Style';

const Title= "hi sabbir ";

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
          title: "javascript",
          text:"hello",
          isAwesome:true,
        };   
    }


   hanbdler=(e)=>{
    if (e.target.type==="text") {
        this.setState({
          title: e.target.value,
        });
    }else if(e.target.type==="checkbox"){
        this.setState({
         isAwesome: e.target.checked,
        });
    }else if(e.target.type==="textarea"){
        this.setState({
          text: e.target.value,
        });
    }
   };
  render() {
      const {title,isAwesome,text}=this.state;
    return (
      <div>
        <h2 className={Classes.hello}
        
        /* inline css example */
          // style={{
          //   color: "red",
          //   fontFamily: "sans-serif",
          //   textTransform: "capitalize",
          //   backgroundColor:"ActiveCaption"
          // }}
        >
          {/* title upore dicliar kora  */}
          {Title}
        </h2>
        <Style/>
        <input
          type="text"
          placeholder="enter"
          value={title}
          onChange={this.hanbdler}
        />
        <br />
        <br />

        <input
          type="checkbox"
          placeholder="enter"
          checked={isAwesome}
          onChange={this.hanbdler}
        />
        <br />
        <br />
        <textarea name="text" value={text} onChange={this.hanbdler}>
          about your life.
        </textarea>
      </div>
    );
  }
}
