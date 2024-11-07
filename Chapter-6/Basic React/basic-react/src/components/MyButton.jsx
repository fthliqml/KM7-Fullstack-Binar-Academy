/* eslint-disable react/prop-types */
const MyButton = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default MyButton;
