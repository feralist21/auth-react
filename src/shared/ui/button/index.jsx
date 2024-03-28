import clsx from "clsx";

const Button = ({ label, view, size, type = "button" }) => {
    return (
        <button
            className={clsx("block", {
                "p-2": size === "small",
                "p-5": size === "medium",
                "p-7": size === "big",
                "bg-green-500 text-white": view === "accent",
            })}
            type={type}
        >
            {label}
        </button>
    );
};

export default Button;
