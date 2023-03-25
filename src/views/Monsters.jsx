import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyContext from '../MyContext';

function Monsters() {
  const { roData, monsterSelected, setMonsterSelected } = useContext(MyContext)
  const navigate = useNavigate()

  const searchMonster = () => {
    navigate(`/monsters/${monsterSelected}`)
  }

  const handleChange = (event) => {
    setMonsterSelected(event.target.value.toLowerCase())
  }

  function orderPlease(a, b) {
    if (a.name.en < b.name.en) {
      return -1;
    } else if (a.name.en > b.name.en) {
      return 1;
    } else {
      return 0;
    }
  }


  return (
    <div>
      <h1 className='text-center mt-3'>Search Monster</h1>
      <Form className='form-search'>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="Select">Monsters</Form.Label>
            <Form.Select id="Select" onChange={handleChange}>
              <option disabled={true}>Monsters List</option>
              {roData.sort(orderPlease).map((item) => {
                return <option key={item.id} value={item.name.en}>{item.name.en}</option>
              })}
            </Form.Select>
          </Form.Group>
          <Button variant='dark' onClick={searchMonster} type="button">Search</Button>
        </fieldset>
      </Form>
    </div>
  )
}

export default Monsters