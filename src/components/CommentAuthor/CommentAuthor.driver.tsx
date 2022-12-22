import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CommentAuthor, CommentAuthorProps } from './CommentAuthor';
import { BaseComponentDriver } from 'testing-base';

export class CommentAuthorDriver extends BaseComponentDriver {
    private props: Partial<CommentAuthorProps> = {};

    constructor() {
        super('CommentAuthor');
    }

    when: any = {
        rendered: () => {
            render(<CommentAuthor {...(this.props as CommentAuthorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CommentAuthor {...(this.props as CommentAuthorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CommentAuthorProps>) => {
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
