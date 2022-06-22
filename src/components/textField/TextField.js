const TextField = ({ label, caller, value }) => {
  return (
    <div class="mb-3">
      <label for={`form-${label}`} class="form-label">
        {label}
      </label>
      <input
        type="text"
        class="form-control"
        id={`form-${label}`}
        value={value}
        onChange={(e) => caller(e.target.value)}
      />
    </div>
  );
};

export default TextField;
