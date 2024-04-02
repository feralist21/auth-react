import clsx from "clsx";

const Button = ({ className, label, view, size, type = "button", handleClick }) => {
    return (
        <button
            className={clsx("block", className, {
                "p-2": size === "small",
                "p-5": size === "medium",
                "p-7": size === "big",
                "bg-green-500 text-white": view === "accent",
            })}
            type={type}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default Button;
