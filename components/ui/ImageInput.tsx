'use client'
import Image from "next/image"
import { useRef,useState } from "react"

const ImageInput = ({defaultImage,className,onChange,imageRatio = "4/3"}:InputImage) => {
  let aspectRatio;
  if(imageRatio === "4/3"){
    aspectRatio = "aspect-[4/3]";
  }else if(imageRatio == "video"){
    aspectRatio = "aspect-video"
  }else if(imageRatio == "square"){
    aspectRatio = "aspect-square"
  }
  const fileInput = useRef<HTMLInputElement>(null)
  const [imagePreview,setImagePreview] = useState<string>(defaultImage)
  const changeImage = (e:React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      const selectedFile = fileInput.current!.files![0];
      if (selectedFile) {
          const blob = URL.createObjectURL(selectedFile);
          if(onChange){
            onChange(selectedFile)
          }
          setImagePreview(blob)
      }
  }
  const openFile = (e:React.MouseEvent) => {
      e.preventDefault()
      fileInput.current?.click()
  }
  return (
    <div className={`relative flexCenter rounded-xl overflow-hidden ${aspectRatio} ${className}`}>
        <Image 
        src={imagePreview}
        fill
        objectFit="cover"
        alt="cover photo"/>
        <input ref={fileInput} type="file" accept="image/*"  onChange={changeImage} className="hidden" />
        <button onClick={openFile} className="absolute bg-black/50 font-bold text-sm text-light py-[6px] px-3 rounded-[10px]">
            Change
        </button>
    </div>
  )
}

export default ImageInput
