const MAX_NAME_LENGTH_TO_SHOW = 6;

function Person({ name, age, hobbies }) {
    const voteText = age >= 18
        ? "Go vote!"
        : "Go study!";
    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>{voteText}</li>
            </ul>
            <ul>
                Hobbies:
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    );
}