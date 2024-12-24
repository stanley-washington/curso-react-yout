function Input({ type, placeholder, description, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      value={description}
      onChange={onChange}
    ></input>
  );
}

export default Input;
