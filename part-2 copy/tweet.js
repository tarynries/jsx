function Tweet({ username, name, date, message }) {
    return (
        <div className="tweet">
            <p className="username">Username: {username}</p>
            <p>Name: {name}</p>
            <p classname="date">Date: {date}</p>
            <p>Message: {message}</p>
        </div>
    )
}