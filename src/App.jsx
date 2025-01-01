import Bottles from "./assets/components/Bottles/Bottles"
import { Header } from "./assets/components/Header/Header"

function App() {
  

  return (
    <>
    <div className='w-11/12 mx-auto mt-4 flex justify-center items-center flex-col'>
        <Header></Header>
        <Bottles></Bottles>
    </div>
      
    </>
  )
}

export default App
