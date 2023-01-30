/*
import GrandChild from "./price";

const Age = ({ value }) => (
  <div>
    <h3>子コンポーネント</h3>
    <GrandChild value={value} />
  </div>
);

export default Age;
*/
import Age from "./gender";

const Sample = () => {
  const value = '孫コンポーネントで使いたい値'
  return <Age value={value}/>;
};

export default Sample;