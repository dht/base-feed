import React from 'react';
import { Button, Icon, IconWrapper, Text, Wrapper } from './PostActions.style';

export type PostActionsProps = {};

export function PostActions(_props: PostActionsProps) {
    return (
        <Wrapper
            className='PostActions-wrapper'
            data-testid='PostActions-wrapper'
        >
            <Button>
                <IconWrapper>
                    <Icon className='material-icons'>thumb_up</Icon>
                </IconWrapper>
                <Text>Like</Text>
            </Button>
            <Button>
                <IconWrapper>
                    <Icon className='material-icons'>comment</Icon>
                </IconWrapper>
                <Text>Comment</Text>
            </Button>
        </Wrapper>
    );
}

export default PostActions;
