import React from 'react';
import CommentTree from '../CommentTree/CommentTree';
import PostActions from '../PostActions/PostActions';
import PostAuthor from '../PostAuthor/PostAuthor';
import PostContent from '../PostContent/PostContent';
import PostStats from '../PostStats/PostStats';
import { Comments, Wrapper } from './Post.style';

export type PostProps = {};

export function Post(_props: PostProps) {
    return (
        <Wrapper className='Post-wrapper' data-testid='Post-wrapper'>
            <PostAuthor />

            <PostContent>
                This morning, I gathered my team for a briefing on the extreme
                cold and storms we’re seeing across America. <br />I urge
                everyone to follow the warnings of local officials – go to
                Weather.gov for more information. I stand ready to help
                communities with whatever they'll need.
            </PostContent>

            <PostStats />

            <PostActions />

            <Comments>
                <CommentTree />
            </Comments>
        </Wrapper>
    );
}

export default Post;
