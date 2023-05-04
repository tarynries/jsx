function App() {
    return (
        <div>
            <Tweet
                username="soccerstar"
                name="Mia"
                date={new Date().toDateString()}
                message="I can't wait for the world cup" />

            <Tweet
                username="chicken"
                name="Little"
                date={new Date().toDateString()}
                message="I am hungry" />

            <Tweet
                username="tommyb"
                name="T"
                date={new Date().toDateString()}
                message="I am tired" />
        </div>
    );
}
