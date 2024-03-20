import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

ContenedorFicha:{

    backgroundColor: '#fce4ae',
    display: 'flex', 
    flexDirection: 'row',
    marginBottom: 10,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#341257',
    borderRadius: 15,
},

contenedordatosgenerales:{
    display: 'flex',
    flexDirection: 'column'

},

NombreEnFicha: {
    padding: 5,
    fontSize: 16,
    color: '#332811', 
    fontWeight: 'bold',
},

foroPersonajeEnFicha: {
    height: 100,
    width: 100,
}

});

export default styles;