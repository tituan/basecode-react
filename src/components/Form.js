import React, { useState } from 'react';
import axios from 'axios';


const Form = () => {

    const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = { name, description };
      await axios.post('http://localhost:5000/items', newItem);
      setName('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <div>
            <h1>Add Item</h1>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default Form;