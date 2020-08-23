import React from "react";

const Title = ({ title }) => {
  return (
    <div className='section-title'>
      <h4>
        {title}
        <div></div>
      </h4>
    </div>
  );
};

export default Title;
