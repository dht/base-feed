import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostAuthor, PostAuthorProps } from './PostAuthor';
import { BaseComponentDriver } from 'testing-base';

export class PostAuthorDriver extends BaseComponentDriver {
    private props: Partial<PostAuthorProps> = {};

    constructor() {
        super('PostAuthor');
    }

    when: any = {
        rendered: () => {
            render(<PostAuthor {...(this.props as PostAuthorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PostAuthor {...(this.props as PostAuthorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PostAuthorProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
