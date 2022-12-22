import React from 'react';
import IconFeedback from '../IconFeedback/IconFeedback';
import { Comments, Flex, Row, Shares, Wrapper } from './PostStats.style';

export type PostStatsProps = {};

export function PostStats(_props: PostStatsProps) {
    return (
        <Wrapper className='PostStats-wrapper' data-testid='PostStats-wrapper'>
            <Row>
                <IconFeedback />
                <Flex />
                <Comments>2.1K comments</Comments>
                <Shares>876 Shares</Shares>
            </Row>
        </Wrapper>
    );
}

export default PostStats;
