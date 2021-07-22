import React, {FC} from 'react';
import { Button } from './OrderButton.styles';

interface OrderButtonProps {
    disabled: boolean;
}

const OrderButton:FC<OrderButtonProps> = ({disabled}) => {
    return (
        <Button disabled={disabled}>
            {disabled ? 'Будет позже': 'Выбрать'}
        </Button>
    );
};

export default OrderButton;
