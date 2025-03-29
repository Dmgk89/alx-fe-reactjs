const UserProfile = (props) =>{
    return(
    <div style={styles.card}>
        <h2>{props.name}</h2>
        <p><strong>Age:</strong> {props.age}</p>
        <p><strong>Bio:</strong> {props.bio}</p>
    </div>
    );
}
// Inline styling for better appearance
const styles = {
    card: {
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
        textAlign: "center",
        margin: "20px auto",
    }
};

export default UserProfile;