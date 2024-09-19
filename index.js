"use strict";
//definir interfaces de entrenador y cliente (Typescript)
// Lista de entrenadores
const entrenadores = [
    { nombre: 'A', reputacion: 4.5, plazasDisponibles: 1 },
    { nombre: 'B', reputacion: 3.2, plazasDisponibles: 4 },
    { nombre: 'C', reputacion: 1.2, plazasDisponibles: 3 },
    { nombre: 'D', reputacion: 3.4, plazasDisponibles: 2 },
];
// Lista de clientes
const clientes = [
    { nombre: 'q', importanciaReputacion: 2.6 },
    { nombre: 'r', importanciaReputacion: 3.7 },
    { nombre: 's', importanciaReputacion: 8.5 },
    { nombre: 't', importanciaReputacion: 9.7 },
    { nombre: 'u', importanciaReputacion: 2.6 },
    { nombre: 'v', importanciaReputacion: 4.7 },
    { nombre: 'w', importanciaReputacion: 5.6 },
    { nombre: 'x', importanciaReputacion: 3.7 },
    { nombre: 'y', importanciaReputacion: 8.1 },
    { nombre: 'z', importanciaReputacion: 2.5 },
];
// Función para calcular la satisfacción del cliente
function calcularSatisfaccion(cliente, entrenador) {
    return cliente.importanciaReputacion * entrenador.reputacion;
}
//función para asignar los clientes a los entrenadores 
function asignacionClienteEntrenador(clientes, entrenadores) {
    let asignaciones = [];
    clientes.forEach(cliente => {
        let satisfaccionMasAlta = -1;
        let mejorEntrenador = null;
        entrenadores.forEach(entrenador => {
            if (entrenador.plazasDisponibles > 0) {
                let resultadoSatisfaccion = calcularSatisfaccion(cliente, entrenador);
                if (resultadoSatisfaccion > satisfaccionMasAlta) {
                    satisfaccionMasAlta = resultadoSatisfaccion;
                    mejorEntrenador = entrenador;
                }
            }
        });
        if (mejorEntrenador !== null) {
            asignaciones.push({ cliente: cliente.nombre, entrenador: mejorEntrenador.nombre });
            mejorEntrenador.plazasDisponibles--;
        }
    });
    return asignaciones;
}
const asignacionFinal = asignacionClienteEntrenador(clientes, entrenadores);
console.log(asignacionFinal);
