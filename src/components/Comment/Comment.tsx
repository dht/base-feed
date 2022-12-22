import React from 'react';
import CommentAuthor from '../CommentAuthor/CommentAuthor';
import CommentContent from '../CommentContent/CommentContent';
import CommentStats from '../CommentStats/CommentStats';
import { Column, Row, Wrapper } from './Comment.style';

export type CommentProps = {};

export function Comment(_props: CommentProps) {
    return (
        <Wrapper className='Comment-wrapper' data-testid='Comment-wrapper'>
            <Row>
                <Column>
                    <CommentAuthor />
                </Column>
                <Column>
                    <CommentContent />
                    <CommentStats />
                </Column>
            </Row>
        </Wrapper>
    );
}

export default Comment;
