import React from "react";
import PropTypes from "prop-types";
import "./footer.scss";

const AboutusFooter = props => (
  <div className="content-container">
    <h3>{props.title}</h3>
    <p>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using Content here, content here
    </p>
  </div>
);
AboutusFooter.propTypes = {
  title: PropTypes.string
};

export default AboutusFooter;
