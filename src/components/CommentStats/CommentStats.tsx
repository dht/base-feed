import React from 'react';
import IconFeedback from '../IconFeedback/IconFeedback';
import { Stats, Time, Wrapper } from './CommentStats.style';

export type CommentStatsProps = {};

export function CommentStats(_props: CommentStatsProps) {
    return (
        <Wrapper
            className='CommentStats-wrapper'
            data-testid='CommentStats-wrapper'
        >
            <Time>9h</Time>

            <Stats>
                <IconFeedback />
            </Stats>
        </Wrapper>
    );
}

export default CommentStats;
