
const ProgressBar = ({progress,className}:{progress:number,className?:string}) => {
  return (
  <div className="w-full bg-semiLight rounded-[12px] overflow-hidden">
    <div
    className={`py-[5px] bg-primary ${className}`}
    style={{
    width: `${progress}%`,
    transition: 'width 0.5s ease',
    }}
    ></div>
  </div>
  )
}

export default ProgressBar
