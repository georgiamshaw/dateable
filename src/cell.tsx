interface CellProps {
  placeholder: string;
}

const Cell: React.FC<CellProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      maxLength={1}
      pattern="/^[0-9]*$/"
      className="cell"
      placeholder={placeholder}
    ></input>
  );
};

export default Cell;
