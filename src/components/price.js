import React from 'react'

const GrandChild = ({ value }) => {
  return (
      <div>
        <h3>孫コンポーネント</h3>
        {value}
      </div>
  );
};
export default GrandChild;