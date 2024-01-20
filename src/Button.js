function Button({ text, fontSize = 16, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                fontSize: fontSize,
                backgroundColor: "powderblue",
                padding: "0.5rem 1rem",
                borderRadius: "15%",
            }}
        >
            {text}
        </button>
    );
}

export default Button;
