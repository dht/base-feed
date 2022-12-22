import React from 'react';
import { Body, Name, Wrapper } from './CommentContent.style';

export type CommentContentProps = {};

export function CommentContent(_props: CommentContentProps) {
    return (
        <Wrapper
            className='CommentContent-wrapper'
            data-testid='CommentContent-wrapper'
        >
            <Name>Bienvenue Mohotognon</Name>
            <Body>
                It's fantastic ! This is how a humane and compassionate
                government should treat its own citizens. It is a morale booster
                for middle class and low income people.
            </Body>
        </Wrapper>
    );
}

export default CommentContent;
