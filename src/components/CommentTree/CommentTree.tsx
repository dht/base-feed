import React from 'react';
import Comment from '../Comment/Comment';
import { Wrapper } from './CommentTree.style';

export type CommentTreeProps = {};

export function CommentTree(_props: CommentTreeProps) {
    return (
        <Wrapper
            className='CommentTree-wrapper'
            data-testid='CommentTree-wrapper'
        >
            <Comment />
        </Wrapper>
    );
}

export default CommentTree;
