import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'

const Home = () => {

  const dispatch =useDispatch()
  const navigate = useNavigate()

  const hanledSubmit = (e) => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()

    if(inputValue !== 0){
      dispatch(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value =''
  }


  return (
    <div className="home">
      <div className="poke_img">
          <img src="https://e.rpp-noticias.io/normal/2016/07/22/151715_200529.jpg"/>
      </div>
      <h2>Hola entrenador</h2>
      <p>Para poder comenzar, dame tu nombre</p>
      <form className="enter_name" onSubmit={hanledSubmit}>
          <input type="text" placeholder='Enter name' id='name'/>
          <button>Comenzar</button>
      </form>
    </div>
  )
}

export default Home