import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({ setMove }) => {
    const [userInput, setUserInput] = useState('');
    const [pokemon, setPokemon] = useState('');
    const [loading, setLoading] = useState('');
  
    const navigate = useNavigate();

    const getPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
      console.log('res: ', response.data)
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

  const handleClick = () => {
    setMove(pokemon?.moves?.[0]?.move?.name);
    navigate('/animation');
  };

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
      <a href="/animation" onClick={setMove(pokemon?.moves?.[0]?.move?.name)}>{pokemon?.moves?.[0]?.move?.name}</a>
      <div>{pokemon?.moves?.[1]?.move?.name}</div>
      <div>{pokemon?.moves?.[2]?.move?.name}</div>
    </div>
  );
};

export default HomePage;
