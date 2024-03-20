import React from "react";
import Pokemon from "../types/Pokemon";
import { Text, View, Image } from "react-native";
import styles from "../Styles";
//https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/0.png

type FichaListaPersonajeProps = {
    codigo: number ;
    personaje: Pokemon;
};

const FichaListaPersonaje = (props: FichaListaPersonajeProps )=>{

    return (
    <View style={styles.ContenedorFicha}>
        <Image 
        style = {styles.foroPersonajeEnFicha}
        source = {{ 
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${props.codigo}.png`,
        }}
        />
        <View style={styles.contenedordatosgenerales}> 
        <Text style = {styles.NombreEnFicha}>Id:{props.codigo}</Text>
        <Text style = {styles.NombreEnFicha}>{props.personaje.name}</Text>
        </View>
    </View>
    );
};


export default FichaListaPersonaje;