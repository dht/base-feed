import React from 'react';
import { Avatar, Wrapper } from './CommentAuthor.style';

export type CommentAuthorProps = {};

export function CommentAuthor(_props: CommentAuthorProps) {
    return (
        <Wrapper
            className='CommentAuthor-wrapper'
            data-testid='CommentAuthor-wrapper'
        >
            <Avatar />
        </Wrapper>
    );
}

export default CommentAuthor;
