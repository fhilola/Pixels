'use client'
import { log } from "console"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import { ImageData, ImageReponse } from "@/app/types"
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image"
import './Reel.css'
import { LuDownload } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";

const Reel = () => {
    // const data = useSelector((state:RootState) => state.search)
    // console.log(data);
    const [reel, setReel] = useState<ImageData[]>([])
    useEffect(()=>{
      const loadData = async ()=>{
        try {
          const response : Response = await fetch('https://api.pexels.com/v1/curated?per_page=80', {
            headers: {'Authorization': 'AqsBxrwPelYXH5ChI7Zggn27HstDO25dagXygojc5Ho7Ve2jTaWlxXc0'}
          })
          const data: ImageReponse = await response.json()
          setReel(
            data.photos.map((i: ImageData)=>{
              i.src.original = i.src.original + "?auto=compress&cs=tinysrgb&w=600&lazy=load"
              return i
            })
          );
          
        } catch (error) {
          console.log(error);
          
        }
      }
      loadData()
    },[])
  return (
    <div className="reel">
      <Container>
        <ImageList variant="masonry" cols={3} gap={8}>
            {reel.map((i: ImageData) => (
              <ImageListItem key={i.id} className="image-list-item">
                <>
                <Image
                  className="reel__image"
                  src={i.src.original}
                  width={i.width}
                  height={i.height}
                  alt={i.alt}
                  loading="lazy"
                />
                <div className="image-action">
                  <button><LuDownload/></button>
                  <button><IoHeartOutline /></button>
                </div>
                </>
              </ImageListItem>
            ))}
          </ImageList>
      </Container>
    </div>
  )
}

export default Reel