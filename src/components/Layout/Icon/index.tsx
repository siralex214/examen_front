import React from "react";
import styled from "styled-components";

interface Props {
  size: number;
  color: string;
  name: string;
  fill?: boolean;
}

interface IIcon {
  size?: number;
  color?: string;
}

const Icon: React.FC<Props> = ({ size, name, color, fill }: Props) => {
  const finalName = `ri-${name}${fill ? "-fill" : "-line"}`;

  return (
    <StyledIcon color={color} size={size} className={finalName}></StyledIcon>
  );
};

const StyledIcon = styled.i<IIcon>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
`;

export default Icon;
