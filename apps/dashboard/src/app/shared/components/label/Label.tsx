import { FC, PropsWithChildren } from 'react';

import { StyledLabel } from './styles';
import { LabelColor } from './types';

type Props = {
    color: LabelColor;
    dataCy?: string;
};

const Label: FC<PropsWithChildren<Props>> = ({ color, children, dataCy }) => {
    return (
        <StyledLabel color={color} data-cy={dataCy}>
            {children}
        </StyledLabel>
    );
};

export default Label;
