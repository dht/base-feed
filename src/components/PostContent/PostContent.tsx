import React from 'react';
import { Image, TextContent, Wrapper } from './PostContent.style';

export type PostContentProps = {
    children: React.ReactNode;
};

export function PostContent(props: PostContentProps) {
    function renderText() {
        return props.children;
    }

    return (
        <Wrapper
            className='PostContent-wrapper'
            data-testid='PostContent-wrapper'
        >
            <TextContent>{renderText()}</TextContent>

            <Image src='https://picsum.photos/id/1/500/306' />
        </Wrapper>
    );
}

export default PostContent;
