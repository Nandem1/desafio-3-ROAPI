import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Monsters() {
  const [id, setId] = useState("")
  const navigate = useNavigate()
  
  const irAMonster = () => {
    navigate(`/monster/${id}`)
  }

  const { idSelected } = useParams()

  return (
    <div>
      <h1>React Router II</h1>
      <input type='number' value={id} onChange={(e) => setId(e.target.value)}/>
      <button onClick={irAMonster}>buscar</button>
    </div>
  )
}

export default Monsters