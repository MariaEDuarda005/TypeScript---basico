import React from 'react';

function App() {

  // importaçao de componentes

  // 1 - variaveis
  const name: string = "Maria"
  const age: number = 19
  const isWorking:boolean = true

  // && funciona como um AND

  //2 - funções 
  //tipando o parametro e o retorno
  const userGreeting = (name:string): string => {
    return `Olá, ${name}`
  }

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <p>Está trabalhando!</p>
      )}
      <h3>{userGreeting(name)}</h3>
    </div>
  );
}

export default App;
