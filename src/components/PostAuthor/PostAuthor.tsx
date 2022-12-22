import React from 'react';
import {
    Avatar,
    Details,
    Divider,
    Icon,
    Name,
    Row,
    Scope,
    Time,
    Wrapper,
} from './PostAuthor.style';

export type PostAuthorProps = {};

export function PostAuthor(_props: PostAuthorProps) {
    return (
        <Wrapper
            className='PostAuthor-wrapper'
            data-testid='PostAuthor-wrapper'
        >
            <Avatar />
            <Details>
                <Row>
                    <Name>President Joe Biden</Name>
                </Row>
                <Scope>
                    <Time>22h</Time>
                    <Divider>·</Divider>
                    <Icon>
                        <i className='material-icons'>public</i>
                    </Icon>
                </Scope>
            </Details>
        </Wrapper>
    );
}

export default PostAuthor;
