import React, {useState} from 'react'

const SearchForm = ({onSubmit}) => {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    //Navegar a otra ruta
    onSubmit({keyword})
  }

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <form className='form-container--home' onSubmit={handleSubmit}>
        <input placeholder='Search a gif here..' onChange={handleChange} type='text' value={keyword}></input>
        <button className='button-search'>Buscar</button>
    </form>
  )
}

export default React.memo(SearchForm)
