import React from 'react';
import { Wrapper } from './PostAttachment.style';

export type PostAttachmentProps = {};

export function PostAttachment(_props: PostAttachmentProps) {
    return (
        <Wrapper className="PostAttachment-wrapper" data-testid="PostAttachment-wrapper">
            PostAttachment
        </Wrapper>
    );
}

export default PostAttachment;
