function Button(props) {
    return (
        <button style={styles.button} onClick={function () {
            console.log("Button clicked!")
        }}>
            {props.text}
        </button>
    );

}

const styles = {
    button: {
        backgroundColor: '#000000',
        color: '#ffffff',
        margin: '10px',
        padding: 10,
        borderRadius: 5,
        border: 'none',
        fontSize: 16,
        fontWeight: 'bold',
        cursor: 'pointer',
        outline: 'none',
        ':hover': {
            backgroundColor: '#ffffff',
            color: '#000000',
        },
    },
}

export default Button;