import { useTypedSelector } from "@/app/hooks/useTypedSelector"
import Button from "../ui/Button"

const OrderButton = () => {
    const {travelTime,selectedOption} = useTypedSelector(state => state.taxi)
    const orderHandler = () => {
        alert(`Ordering ${selectedOption} for ${travelTime} minutes`)
    }
  return (
    <Button title="Order" bgColor="#ffe847"  color="#111" cb={orderHandler} isDisabled={!travelTime && !selectedOption}/>
  )
}

export default OrderButton