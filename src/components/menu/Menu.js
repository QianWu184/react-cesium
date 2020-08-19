import React, { Component } from "react"
import { Tabs }  from "antd"
import infos from '../../utils/infos.json'
import "../../style/menu/Menu.css"

import menus from "../../router/index";
import Info from "./Info";
import Work from "./Work";
import Other from "./Other";

const { TabPane } = Tabs;
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.changeTabs = this.changeTabs.bind(this);
  }
  changeTabs(key){
    if(key == 1){
      this.props.viewFlyto();
    }
  }
  render() {
    return (
      <div id="menu">
        <Tabs defaultActiveKey="1" className="menu-tab" centered  onChange={this.changeTabs}>
          {menus.map((item, i) => (
            <TabPane tab={item.name} key={i}>
              {i === 0 && <Info></Info>}
              {i === 1 && <Work infos={infos}></Work>}
              {i === 2 && <Other></Other>}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default Menu;
