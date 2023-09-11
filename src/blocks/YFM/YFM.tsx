import React from 'react';

import {YFMWrapper} from '@gravity-ui/page-constructor';

import {Wrapper} from '../../components/Wrapper/Wrapper';
import {YFMProps} from '../../models/blocks';
import {PaddingsDirections} from '../../models/paddings';
import {cn} from '../../utils/cn';

const b = cn('yfm');

export const YFM: React.FC<YFMProps> = (props) => {
    const {text, paddingTop, paddingBottom} = props;

    return (
        <Wrapper
            paddings={{
                [PaddingsDirections.top]: paddingTop,
                [PaddingsDirections.bottom]: paddingBottom,
            }}
        >
            <YFMWrapper
                content={text}
                modifiers={{
                    blog: true,
                    resetPaddings: true,
                }}
                className={b({'no-list-reset': true})}
            />
        </Wrapper>
    );
};
