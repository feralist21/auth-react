const Input = ({ label, inputName, type, id, onChange, value }) => {
    return (
        <div className="flex flex-col gap-y-2">
            <label className="block" htmlFor={inputName}>
                {label}
            </label>
            <input
                className="block outline-none border-2 border-slate-400 p-2 text-black"
                type={type}
                name={inputName}
                id={id}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default Input;
