import { createStore } from 'redux';

const RedduxOne = () => {
  const countModifier = (num = 0) => {
    num++;
    num--;
    return num;
  };
  const countStore = createStore(countModifier);
  let count = document.querySelector('.count');
  let num = 0;
  const handlePlus = () => {
    num++;
    count.innerHTML = num;
  };
  const handleMinus = () => {
    num--;
    count.innerHTML = num;
  };
  return (
    <div>
      <button onClick={handlePlus}>plus</button>
      <span className="count"> 0</span>
      <button onClick={handleMinus}>minus</button>
    </div>
  );
};

export default RedduxOne;
