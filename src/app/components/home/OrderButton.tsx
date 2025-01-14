import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SlidingPane from "react-sliding-pane"; // Правильный импорт
import "react-sliding-pane/dist/react-sliding-pane.css"; // Подключение стилей
import styles from './orderButton.module.scss'

const OrderButton = () => {
  const router = useRouter();
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  const { travelTime, selectedOption } = useTypedSelector((state) => state.taxi);

  const orderHandler = () => {
    setIsPaneOpen(true);
  };

  return (
    <div style={{width: '100%' }}>
      <Button
        title="Order"
        bgColor="#ffe847"
        color="#111"
        cb={orderHandler}
        isDisabled={!travelTime && !selectedOption} 
      />
      <div  style={{
        margin: '100px'
      }}>

      <SlidingPane
        isOpen={isPaneOpen}
        title="Order Details"
        // width="40%"
        from="right"
        onRequestClose={() => setIsPaneOpen(false)}
        // className= {styles.centered_panel} // Дополнительный класс для тонкой настройки
      >
        <div>
          <h2 className="text-lg font-semibold">Order Details</h2>
          <p>Here you can customize your order details...</p>
        </div>
      </SlidingPane>
      </div>
    </div>
  );
};

export default OrderButton;
