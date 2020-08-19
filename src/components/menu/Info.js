import React, { Component } from "react";
import { Avatar, Tag } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "../../style/menu/Info.css";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: "吴谦",
        age: 26,
        workAge: 4,
        phone: 18408248654,
        location: "成都",
        title: ["gis", "webgis开发"],
        skills: [
          "arcgis js",
          "openlayer",
          "cesium",
          "vue",
          "react",
          "java",
          "c#",
          "geoserver",
          "oracle",
          "sqlserver",
        ],
        stetment:`做过GIS项目,也参与过GIS框架开发。对Gis开发流程及前后台涉及语言及软件都有了解和使用。对openlayer和arcgis js api较为熟悉。cesium在逐渐深入使用中。
        后台java比c#更熟悉。geoserver、arcgis server轻度用户。vue、react尚可。`
      },
    };
  }
  getColor(){
    return `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
  }
  render() {
    const info = this.state.info;
    return (
      <div className="info">
        <Avatar size={86} icon={<UserOutlined />} />
        <div>
          <p className="info-detail">{info.name}</p>
          <div>
            <div className="info-detail">
            <span className="info-age" >{info.age}岁</span>
            <span className="info-age" >工作{info.workAge}年</span>
            </div>
            <div className="info-detail">{info.location}</div>
            <div className="info-detail">
              {
                info.title.map((item, index)=>{
                  return (
                    <span key={index}>{item}</span>
                  )
                })
              }
            </div>
            <div className="info-detail">
              {
                info.skills.map((item, index)=>{
                    return (
                      <Tag  key={index} color={this.getColor()}>{item}</Tag>
                    )
                })
              }
            </div>
            <div className="info-detail info-stetmen">
                <h3>{info.stetment}</h3>
            </div>
            <div className="info-detail slogan">
              <h5>每一个GISer最终都会是全栈</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
