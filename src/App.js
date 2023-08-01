// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Homepage from './pages/Homepage';


// const App = () => {

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newItem = { name, description };
//       await axios.post('http://localhost:5000/items', newItem);
//       setName('');
//       setDescription('');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homepage />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


// import React from "react";
// import { useForm, Controller } from "react-hook-form";

// const App = () => {
//   const { control, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data); // Les données du formulaire seront affichées dans la console
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* Contrôlez chaque champ avec le composant `Controller` */}
//       <div>
//         <label>Nom :</label>
//         <Controller
//           name="nom"
//           control={control}
//           defaultValue=""
//           rules={{ required: "Ce champ est requis." }}
//           render={({ field }) => <input {...field} />}
//         />
//         {errors.nom && <p>{errors.nom.message}</p>}
//       </div>

//       <div>
//         <label>Email :</label>
//         <Controller
//           name="email"
//           control={control}
//           defaultValue=""
//           rules={{ required: "Ce champ est requis.", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Adresse email invalide." } }}
//           render={({ field }) => <input {...field} />}
//         />
//         {errors.email && <p>{errors.email.message}</p>}
//       </div>

//       {/* Ajoutez d'autres champs ici avec la même approche */}

//       <button type="submit">Envoyer</button>
//     </form>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';

const App = () => {

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // axios.post('http://localhost:4500/saveFormData.php', formData)
  // .then(function (response) {
  //   // en cas de réussite de la requête
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // en cas d’échec de la requête
  //   console.log(error);
  // })
  // .finally(function () {
  //   // dans tous les cas
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:4500/saveFormData.php', formData)
      .then((response) => {
        // Handle the response from the server if needed
        console.log('Response from server:', response.data);
      })
      .catch((error) => {
        // Handle errors if any
        console.error('Error sending data:', error);
      })
        .finally(() => {
        console.log('lol')
      });
  };

  return (
    <div className="App">
      <h1>Formulaire de Contact</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Nom :</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required // Champ requis
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required // Champ requis
          />
        </div>
        <div>
          <label>Sujet :</label>
          <input
            type="text"
            name="sujet"
            value={formData.sujet}
            onChange={handleChange}
            required // Champ requis
          />
        </div>
        {/* <div>
          <label>Message :</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required // Champ requis
          />
        </div> */}
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default App;
