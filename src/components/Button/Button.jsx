const Button = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="px-4 py-2 bg-stone-700 text-stone-400 md:text-base rounded hover:bg-stone-600 hover:text-stone-100">
                {children}
        </button>
    )
}

export default Button;