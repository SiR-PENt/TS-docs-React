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
import { UserContextProvider } from './components/tsc-react-learning-curve/State/Context/UserContext'
import ContextUser from './components/tsc-react-learning-curve/State/Context/User'
import Private from './components/tsc-react-learning-curve/State/auth/Private'
import Profile from './components/tsc-react-learning-curve/State/auth/Profile'
import Lists from './components/tsc-react-learning-curve/Generics/Lists'
import { RandomNumber } from './components/tsc-react-learning-curve/Restriction/RandomNumber'
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
    {/*  useContext future value */}
     <UserContextProvider>
      <ContextUser/>
     </UserContextProvider>
     {/* component prop */}
     <Private isLoggedIn={true} component={Profile}/>
     {/* generic props */}
     {/* <Lists items={['Batman', 'Superman', 'Wonder Woman']} 
      onClick={(item) => console.log(item)}/>
     <Lists items={[1, 2, 3]} 
      onClick={(item) => console.log(item)}/> */}

     <Lists items={[
      { 
      id: 1,
      first: 'Bruce',
      second: 'Wayna',
      },
      { 
      id: 2,
      first: 'Bruce',
      second: 'Wayn4',
      },
      { 
      id: 3,
      first: 'Bruc2',
      second: 'Wayna6',
      },
       ]} 
      onClick={(item) => console.log(item)}/>
     {/* Restricting Props */}
     <RandomNumber value={10} isPositive/>
    </div>
  )
}

export default App
