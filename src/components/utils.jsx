const H1 = ({ children, className = "" }) => {
    return (
        <h1 className={`text-7xl font-bold text-black mb-6 p-0 m-0 ${className}`}>
            {children}
        </h1>
    );
};

export default H1;