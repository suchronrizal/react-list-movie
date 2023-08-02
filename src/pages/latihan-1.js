import { useState } from 'react';
import Input from '../components/input';
import './latihan-1.css';

const Latihan1 = () => {
  const [color, setColor] = useState();
  const [isExist, setIsExist] = useState(false)
  const [colors, setColors] = useState(['blue', 'orange', 'green', 'magenta', 'brown', 'red']);

  const getColor = (value) =>{
    const isExist = colors.includes(value);
    setColor(value)
    setIsExist(isExist)
  }

  const RenderingBg = () => isExist ? <div className="bg" style={{backgroundColor:`${color}`}}>&nbsp;</div> : <p>No Match Color</p> 

  return (
    <div className="wrap">
      <RenderingBg />
      <Input onChangeColor={getColor} />
    </div>
  )
}

export default Latihan1