import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Inicio({ titulo }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#E3F2FD' }]}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

function Perfil({ titulo }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#FCE4EC' }]}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

function Configuracion({ titulo }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#E8F5E9' }]}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

export default function App() {
  const [pantalla, setPantalla] = useState("Inicio");

  const renderPantalla = () => {
    switch (pantalla) {
      case "Inicio":
        return <Inicio titulo="Pantalla de Inicio" />;
      case "Perfil":
        return <Perfil titulo="Pantalla de Perfil" />;
      case "Configuración":
        return <Configuracion titulo="Pantalla de Configuración" />;
      default:
        return <Inicio titulo="Pantalla de Inicio" />;
    }
  };

  return (
    <View style={styles.container}>

      {/* Vista principal */}
      <View style={{ flex: 1 }}>
        {renderPantalla()}
      </View>

      {/* Barra de navegación */}
      <View style={styles.tabBar}>

        <TouchableOpacity
          style={[
            styles.tabButton,
            pantalla === "Inicio" && styles.tabActivo
          ]}
          onPress={() => setPantalla("Inicio")}
        >
          <Text style={styles.textoBoton}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            pantalla === "Perfil" && styles.tabActivo
          ]}
          onPress={() => setPantalla("Perfil")}
        >
          <Text style={styles.textoBoton}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            pantalla === "Configuración" && styles.tabActivo
          ]}
          onPress={() => setPantalla("Configuración")}
        >
          <Text style={styles.textoBoton}>Config.</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  tabBar: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#1E88E5',
  },
  tabButton: {
    flex: 1, // mismo ancho
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActivo: {
    backgroundColor: '#1565C0',
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
