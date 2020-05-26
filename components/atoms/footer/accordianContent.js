import { Collapse } from "antd";
import "./footer.scss";
import "./accordian.scss";
import React, { Component } from "react";
import AboutusFooter from "./Aboutusfooter";
import QuickLinks from "./quicklinks";
import ContactusFooter from "./contactusfooter";
const Panel = Collapse.Panel;
const customPanelStyle = {
  marginBottom: 24,
  border: 0,
  overflow: "hidden"
};

class Accordian extends Component {
  state = {};
  render() {
    return (
      <Collapse bordered={false} className="accordian-wrapper" accordion>
        <Panel header="About Us" key="1" style={customPanelStyle}>
          <AboutusFooter />
        </Panel>
        <Panel header="Quick Links" key="2" style={customPanelStyle}>
          <QuickLinks />
        </Panel>
        <Panel header="Contact Us" key="3" style={customPanelStyle}>
          <ContactusFooter />
        </Panel>
      </Collapse>
    );
  }
}

export default Accordian;
