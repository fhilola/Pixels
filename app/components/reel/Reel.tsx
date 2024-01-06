'use client'

import { log } from "console"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"

const Reel = () => {
    const data = useSelector((state:RootState) => state.search)
    console.log(data);
    
  return (
    <div>Reel</div>
  )
}

export default Reel