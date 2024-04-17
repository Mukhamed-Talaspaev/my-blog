import './App.css'
import Button from './ui-components/Button/Button'

function App() {

  return (
   <> 
   <Button variant={'primary'}  disabled={true} handler={()=>console.log('s')}>CLicll</Button>
    <Button bookmark={true} variant={'secondary-1'}  disabled={false} handler={()=>console.log('s')}>CLicll</Button>
    <Button variant={'secondary-2'}  disabled={false} handler={()=>console.log('s')}>CLicll</Button>
    <Button like={'down'} disabled={false} handler={() => console.log('s')}/>
    <Button like={'up'} disabled={false} handler={() => console.log('s')}/>
    </>
  )
}

export default App
