import React, { Component } from 'react';
import MessageCard from "./MessageCard";

import '../../style/menu/Work.css'

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {infos} = this.props.infos;
    return ( <div className="work">
      <ul className="work-list">
          {infos.map((info, index) => {
            return (
              <li className="work-card" key={index}>
                <MessageCard info={info}></MessageCard>
              </li>
            );
          })}
        </ul>
    </div> );
  }
}
 
export default Work;