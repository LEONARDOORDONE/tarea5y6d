import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';
import Pokemon from "../types/Pokemon";
import styles from "../Styles";
import { urlBase } from "./Inicio";

const urlhabilidades = 'https://pokeapi.co/api/v2/ability' 

const Detalle = ({navigation, route}) => {
    const [personaje, setPersonajes] = useState<Pokemon>();
    const [habilidades, setHabilidades] = useState<string[]>([]);

    const cargarPersonaje = async () => {
        const codigo = route.params.codigo;
        const resultados = await axios.get(`${urlBase}/${codigo}/`);
        const resultadosHabilidades = await axios.get(`${urlhabilidades}/${codigo}/`);
        
        if (resultados.data) {
            setPersonajes(resultados.data);
        }
        if (resultadosHabilidades.data) {
            const habilidades = resultadosHabilidades.data.abilities.map((ability: any) => ability.ability.name);
            setHabilidades(habilidades);
        }
    };

    useEffect(() => {
       cargarPersonaje();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#AF7AC5' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <Image 
                        style={{ width: 250, height: 250, resizeMode: 'contain' }} // Ajusta el tamaño de la imagen
                        source={{ 
                            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${route.params.codigo}.png`,
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text>Nombre: {personaje?.name}</Text>
                    <Text>Experiencia base: {personaje?.base_experience}</Text>
                    <Text>Altura: {personaje?.height}</Text>
                    <Text>Orden: {personaje?.order}</Text>
                    <Text>Peso: {personaje?.weight}</Text>
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Habilidades:</Text>
                    <Text> habilidades: {personaje?.abilities.map((ability: any) => ability.ability.name).join(", ")} </Text>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Detalle;
