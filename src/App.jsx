import { useEffect } from "react"
import getPlaylist from "./api"


function App() {

  useEffect(()=>{
    getPlaylist('PL_XxuZqN0xVBPhR5bjBIKyBjTo8pK99gN').then((res)=> console.log(res))
  },[])

  return (
   <div>
    <h1>Hello world</h1>
   </div>
  )
}

export default App
