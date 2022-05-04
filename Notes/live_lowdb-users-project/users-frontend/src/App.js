import React, {useState} from "react";

const App = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
    const updateName = event => {
        const newName = event.target.value;
        setName(newName);
    }
    
    const updateAge = event => {
        const newAge = event.target.value;
        setAge(newAge);
    }

    const submitData = event => {
        event.preventDefault();

        const user = {
            name: name,
            age: age
        }

        const settings = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch("http://localhost:3001", settings)
        .then(response => response.json())
        .then(data => {
            console.log("Response data =", data);
            setName("");
            setAge("");
        })
    }

    return (
        <div>
            <form onSubmit={submitData}>
                <div>
                    <label>Name</label>
                    <input onChange={updateName} value={name} />
                </div>
                <div>
                    <label>Age</label>
                    <input onChange={updateAge} value={age} />
                </div>
                <button>Click me!</button>
            </form>
        </div>
    )
}

export default App;