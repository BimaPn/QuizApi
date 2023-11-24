"use client"

import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteButton = ({children,questionId,onDelete}:{onDelete:()=>void,children:React.ReactNode,questionId:string}) => {
  const router = useRouter();

  const buttonClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isDelete = confirm("Are you sure delete this question ?");
    if(!isDelete) return;
    axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions/${questionId}/delete`)
    .then(() => {
      onDelete();
    })
    .catch((err) => {
      throw Error(err.response.data.message);
      console.log(err.response.data);
    })
  }
  return (
  <button onClick={buttonClick}>
    {children}
  </button>
  )
}

export default DeleteButton
