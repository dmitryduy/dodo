import React, {FC} from 'react';
import { Button } from './OrderButton.styles';

interface OrderButtonProps {
    disabled: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const OrderButton:FC<OrderButtonProps> = ({disabled, onClick}) => {
    return (
        <Button onClick={onClick} disabled={disabled}>
            {disabled ? 'Будет позже': 'Выбрать'}
        </Button>
    );
};

export default OrderButton;
