// This component recieves 2 params name and options array
// Ecah el of options array has 2 sub-els : value and label

function DropdownComponent({ options, name }) {
  return (
    <div className="dropdown">
      <select name={name}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownComponent;
