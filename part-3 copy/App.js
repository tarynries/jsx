function App() {
    return (
        <div>
            <Person
                name="Tim"
                hobbies={["Running", "Biking", "Hiking"]}
                age={15} />

            <Person
                name="EmilyAnne"
                hobbies={["Cooking", "Soccer", "Running"]}
                age={22} />

            <Person
                name="JoJo"
                hobbies={["Golfing", "Baking", "Sewing"]}
                age={18} />
        </div>
    );
}