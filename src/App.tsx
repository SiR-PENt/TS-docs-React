import Greeting  from './components/tsc-react-learning-curve/Greeting'
import Person from './components/tsc-react-learning-curve/Person'
import PersonList from './components/tsc-react-learning-curve/PersonList'
import Status from './components/tsc-react-learning-curve/Status'
import Header from './components/tsc-react-learning-curve/Header'
import Oscar from './components/tsc-react-learning-curve/Oscar'
import ButtonComponent from './components/tsc-react-learning-curve/Button'
import Input from './components/tsc-react-learning-curve/Input'
import Container from './components/tsc-react-learning-curve/Container'
import User from './components/tsc-react-learning-curve/State/useState/User'
import ThemeContextProvider from './components/tsc-react-learning-curve/State/Context/ThemeContext'
import Box from './components/tsc-react-learning-curve/State/Context/Box'

function App() {
  //  passing objects
  const person = {
    firstName: 'Olasunkanmi',
    lastName: 'Balogun'
  }
  //  passing arrays
  const personList = [
     {
      firstName: 'Jibowu',
      lastName:'yktv'
     },
     {
      firstName: 'kele',
      lastName:'chi'
     },
     {
      firstName: 'whatcan',
      lastName:'fa'
     }
  ]
  return (
    <div>

    {/* strings, numbers and boolean Props */}
    <Greeting name='Olasunkanmi' message={10}/>
    <Person name={person}/>
    <PersonList names={personList} />

    {/*  union type Props */}
    <Status status='loading'/>

    {/* passing children as strings */}
    <Header>
      Hello
    </Header>
    
    {/* passing children as node */}
    <Oscar>
      <Header>
      Hello
      </Header>
    </Oscar>

    {/* passing events as props */}
    <ButtonComponent handleClick={(event, id) => {
       console.log('Button Clicked', event, id)
    }}/>

    <Input value='' handleChange={(event) => console.log(event)}/>
    {/*  passing styles as props */}
    <Container style={{ padding: '1rem', margin: '2px'}}/>
    {/*  useState scenarios */}
    <User/>
    {/* useContext scenarios */}
    <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider>
    </div>
  )
}

export default App
