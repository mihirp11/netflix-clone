import React, { useState} from 'react';
import {BsEye, BsEyeSlash} from "react-icons/bs";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
    const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type={isHidden && type=="password" ? type : "text"}
        id={id}
        className="
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-full
        text-md
      text-white
      bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        invalid:border-b-1
        "
        placeholder=" " 
      />
      <label 
        htmlFor={id}
        className="
        absolute 
        text-md
      text-zinc-400
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
      ">{label}</label>
        {type == "password" && <span className="text-zinc-400 absolute top-5 z-10 right-4 cursor-pointer hover:text-zinc-300 hover:underline" onClick={()=>setIsHidden(!isHidden)}> {isHidden ? <BsEye/> : <BsEyeSlash />}</span>}
    </div>
  )
}

export default Input;
