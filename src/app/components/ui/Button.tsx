import { ButtonHTMLAttributes, FC } from "react"
import cn from "classnames"
interface IButton  extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    color: string
    bgColor: string
    cb: () => void
    isDisabled?: boolean
}
const Button: FC<IButton> = (props) => {
    const {title,color,bgColor,isDisabled,cb,...left} = props

  return (
    <button
    {...left}
     className={cn('rounded-2xl block  p-3 text-lg font-medium mx-auto shadow-md transition-colors duration-300 ease-in-out ',{
        'cursor-not-allowed':isDisabled,
    })}
    style= {{backgroundColor: isDisabled? 'rgb(229, 231, 235' : bgColor,color,width: '240px'}}
    onClick={cb}
    disabled={isDisabled}>
        {title}
    </button>
  )
}

export default Button