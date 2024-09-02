import { FC, PropsWithChildren } from 'react';

import { StyledLabel } from './styles';
import { LabelColor } from './types';

type Props = {
    color: LabelColor;
};

const Label: FC<PropsWithChildren<Props>> = ({ color, children }) => {
    return <StyledLabel color={color}>{children}</StyledLabel>;
};

export default Label;
