import React, { Component } from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Tooltip, Typography } from "antd";
import "../../style/menu/MessageCard.css";

const {Paragraph} = Typography;
class MessageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getColor() {
    return `rgba(${Math.ceil(Math.random() * 100)},${Math.ceil(
      Math.random() * 255
    )}, ${Math.ceil(Math.random() * 100)}, 0.9)`;
  }
  render() {
    const info = this.props.info;
    return (
      <div className="message-card">
        <div className="card-header">
          <div className="compeny">
            <a href={info.url} target="_blank" rel="noopener noreferrer">
              {info.name}
            </a>
          </div>
          <EnvironmentOutlined style={{ color: "#eb2f96" }} />
        </div>
        <div className="card-content">
        <Tooltip title={info.message} color={this.getColor()}>
          <Paragraph ellipsis={{ rows: 5}}>{info.message}</Paragraph>
        </Tooltip>
        </div>
      </div>
    );
  }
}

export default MessageCard;
