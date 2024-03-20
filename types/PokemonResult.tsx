import Pokemon from './Pokemon';

type PokemonResult = {
    count: number,
    next: string,
    previous: null | string;
    results: Pokemon[];
};

export default PokemonResult; 