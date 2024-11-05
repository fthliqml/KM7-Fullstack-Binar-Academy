/* eslint-disable react/prop-types */
const MyButton = ({ children, handlerClick }) => {
  return <button onClick={handlerClick}>{children}</button>;
};

export default MyButton;
