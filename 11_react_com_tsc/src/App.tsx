import React, {createContext} from 'react';

// 4 - importação de componentes - sempre é feita no topo do codigo
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props 
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';

//6 - useState
import State from './components/State';

// 10 - utlizando contexto
import Context from './components/Context';

//9 - Type
type textOrNull = string | null
type fixed = "Isso" | "Ou" | "Aquilo";

//10 - content
interface IAppContext{
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)


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

  //9 - type
  const myText: textOrNull = "Tem texto aqui"
  let mySecondText: textOrNull = null

  //mySecondText = "opa"
  const testandoFixed:fixed = "Aquilo"

  //10 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <p>Está trabalhando!</p>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SecondComponent name="Segundo"/>
        <Destructuring title='Primeiro post' content='Algum conteudo' commentsQty={10} tags={['ts', 'js']} category={Category.TS}/>
        <Destructuring title='Segundo post' content='Outro conteudo' commentsQty={12} tags={['python', 'java']} category={Category.P}/>
        <State/>
        {myText && <p>Tem texto no variavel</p>}
        {mySecondText && <p>Tem texto na variavel</p>}
        <Context/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
