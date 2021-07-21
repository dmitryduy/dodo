import React, {FC} from "react";

import dodoImg from "../../assets/images/dodo-icon.svg";

interface DodoIconProps {
    width: number;
    height: number;
}

const DodoIcon: FC<DodoIconProps> = ({width, height}) => {
    return (
        <img width={width} height={height} src={dodoImg} alt="dodo icon"/>
    )
}

export default DodoIcon;