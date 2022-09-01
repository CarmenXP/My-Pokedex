import {useState}from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

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
    handleCloseModal()
  }

  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)


  return (
    <div className="home">
        <div className="poke_img">
          <img  src='https://i.pinimg.com/564x/79/d0/e8/79d0e8827e71864c6f78d4820936351f.jpg'/>
        </div>
        <div className={isOpen ? "content_form" : "content_none" } >
          <h1>Welcome to The Pokedex</h1>
          <p>Please! Enter your name to start</p>
          <form className="enter_name" onSubmit={hanledSubmit}>
              <input type="text" placeholder='Enter your name' id='name'/>
              <button className='btn_send'><i className='bx bxs-right-arrow'></i></button>
          </form>
        </div>
        <button className={isOpen? 'content_none':'btn_press'} onClick={handleOpenModal}>Press to enter</button>
    </div>
  )
}

export default Home