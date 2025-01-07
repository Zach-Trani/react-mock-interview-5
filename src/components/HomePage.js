import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
    const [userInput, setUserInput] = useState('');
    const [pokemon, setPokemon] = useState('');
    const [loading, setLoading] = useState('');
  
    const getPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
      console.log(response.data.results)
      setPokemon(response.data);
      setLoading('')
    //   const filteredResponse = response.data.map(({ species, moves, weight }) => ({ species, moves, weight }));
    } catch (error) {
      console.log(error);
      setLoading('Loading pokemon data...')
    }
  };


  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    getPokemon();
  },[userInput])

  console.log(userInput);
  return (
    <div>
      <div>Homepage</div>
      <div>
        <form onSubmit={handleSubmit}>
            <input value={userInput} onChange={handleChange}/>
        </form>
      </div>
      <div>{loading}</div>
      <div>{pokemon?.species?.name}</div>
      <div>{pokemon?.height}</div>
      <div>{pokemon?.weight}</div>
      <div>{pokemon?.moves?.[0]?.move?.name}</div>
      <div>{pokemon?.moves?.[1]?.move?.name}</div>
      <div>{pokemon?.moves?.[2]?.move?.name}</div>
    </div>
  );
};

export default HomePage;
