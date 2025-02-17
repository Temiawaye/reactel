import PropTypes from 'prop-types'
function UserGreeting(props){
    /*if(props.isLoggedIn){
        return <h1>Welcome, {props.username}!</h1>
    } else {
        return <h1>Please log in to see the greeting.</h1>
    }*/

    // or

    const welcomeMessage = <h1 className="welcome-message">Welcome, {props.username}!</h1>;
    const loginprompt = <h1 className="login-prompt">Please log in to see the greeting.</h1>;

    return(props.isLoggedIn? welcomeMessage : loginprompt )

}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting