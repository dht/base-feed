import React from 'react';
import Post from '../Post/Post';
import { Wrapper } from './Feed.style';

export type FeedProps = {
    data: Json[];
};

export function Feed(props: FeedProps) {
    const { data } = props;

    console.log('data ->', data);

    function renderPost(post: Json) {
        return <Post key={post.id} />;
    }

    function renderPosts() {
        return data.map((post: Json) => renderPost(post));
    }

    return (
        <Wrapper className='Feed-wrapper' data-testid='Feed-wrapper'>
            {renderPosts()}
        </Wrapper>
    );
}

export default Feed;
