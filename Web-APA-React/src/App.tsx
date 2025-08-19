import React, { useState } from 'react';

// Definimos los tipos de las props si el componente las tuviera, aunque aquí no es necesario
// interface CounterProps {}

const Counter = () => {
  // Aquí, TypeScript infiere que 'count' es un número porque lo inicializamos con 0.
  // También infiere que 'setCount' es una función para actualizar ese número.
  const [count, setCount] = useState(0);

  // Esta función no necesita que le especifiquemos los tipos,
  // TypeScript ya sabe que no recibe argumentos.
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-900 text-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-4">Contador Simple</h2>
      <p className="text-6xl font-extrabold text-red-600 mb-6">{count}</p>
      <button 
        onClick={increment}
        className="px-6 py-3 rounded-full font-semibold bg-red-600 hover:bg-red-700 transition-colors"
      >
        Incrementar
      </button>
    </div>
  );
};

export default Counter;
