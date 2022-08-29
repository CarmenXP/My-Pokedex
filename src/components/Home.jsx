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
          <img  src='https://i.pinimg.com/564x/79/d0/e8/79d0e8827e71864c6f78d4820936351f.jpg'/>
        </div>
        <div className="content_form">
          <h1>Welcome to The Pokedex</h1>
          <p>Please! Enter your name to start</p>
          <form className="enter_name" onSubmit={hanledSubmit}>
              <input type="text" placeholder='Enter your name' id='name'/>
              <button><i className='bx bxs-right-arrow'></i></button>
          </form>
        </div>
      
    </div>
  )
}

export default Home