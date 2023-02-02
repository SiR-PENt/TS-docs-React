import Greeting  from './components/tsc-react-learning-curve/Greeting'
import Person from './components/tsc-react-learning-curve/Person'
import PersonList from './components/tsc-react-learning-curve/PersonList'
import Status from './components/tsc-react-learning-curve/Status'
import Header from './components/tsc-react-learning-curve/Header'
import Oscar from './components/tsc-react-learning-curve/Oscar'
function App() {
  //  passing objects
  const person = {
    firstName: 'Olasunkanmi',
    lastName: 'Balogun'
  }
  //  passing arrays
  const personList = [
     {
      first: 'Jibowu',
      last:'yktv'
     },
     {
      first: 'kele',
      last:'chi'
     },
     {
      first: 'whatcan',
      last:'fa'
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
    </div>
  )
}

export default App
