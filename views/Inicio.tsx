import React, { useEffect, useState } from "react";
import {SafeAreaView, View, Text, ScrollView, Pressable } from "react-native";
import Pokemon from '../types/Pokemon';
import axios from 'axios';
import PokemonResult from "../types/PokemonResult";
import FichaListaPersonaje from "../Components/Fichalistapersonajes";
import { NavigationContainer } from "@react-navigation/native";


const ArregloPokemonInicial: Pokemon[] = [];
export const urlBase = 'https://pokeapi.co/api/v2/pokemon';
const Inicio = ({navigation}) => {
   // const handlePress = (codigo:number) => {
      //  navigation.navigate ('Detalle', {codigo:codigo});
    
  //  };

    const [Personajes, setPersonajes] = useState(ArregloPokemonInicial);
    const [count, setCount] = useState(0);
    const [next, setNext] = useState('');
    const [previous, setPrevious] = useState('');

    const CargarPersonajes = async () => {
        const resultados = await axios.get(`${urlBase}`);
        if (resultados.data) {
            const datos: PokemonResult = resultados.data;
            setCount(datos.count);
            setNext(datos.next);
            if (datos.previous == null) {
                setPrevious('');
                } else {
                    setPrevious(datos.previous as string);
                }
                setPersonajes(datos.results);
            }
        };


     //   const iscloseToBottom = ({layoutMeasurement, contentOffSet, contentSize}) => {
        //    const PaddingToBottom = 20;
       //     return (
       //         layoutMeasurement.height + contentOffSet.y >=
                                                    // al dejar este procedimiento aparece el siguiente error: TypeError: Cannot read property 'y' of undefined, js engine: hermes por lo que se dejara en comentario
          //      contentSize.height - PaddingToBottom
           // );
      //  };


     //   const handlescroll = ({nativeEvent}) => {
        //    if(iscloseToBottom(nativeEvent)){
        //        console.log('esta cerca del fin')
         //   }
      //  }

    useEffect(() => {
        CargarPersonajes();
    }, []);
    

        const handlePressPersonaje = (codigo:number) => {
            navigation.navigate('Detalle', {codigo:codigo});

        };

    return (
            <SafeAreaView>
                <ScrollView>
            {Personajes.map((p, index) => {
                return  (
                <Pressable onPress={()=>handlePressPersonaje(index+1)}>
                <FichaListaPersonaje codigo={index+1} personaje={p} />
                </Pressable>
                );
                 })}
                 </ScrollView>
        </SafeAreaView>
    );
};

export default Inicio;