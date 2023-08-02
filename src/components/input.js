const Input = ({onChangeColor}) => {

  const handleChange = (val) =>{
    onChangeColor(val)
  }

  return (
    <>
      <input type="text" placeholder="Change Color : blue, green ..." onChange={({target}) => handleChange(target.value)} />
    </>
  )
}

export default Input