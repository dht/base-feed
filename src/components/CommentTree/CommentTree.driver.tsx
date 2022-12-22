import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CommentTree, CommentTreeProps } from './CommentTree';
import { BaseComponentDriver } from 'testing-base';

export class CommentTreeDriver extends BaseComponentDriver {
    private props: Partial<CommentTreeProps> = {};

    constructor() {
        super('CommentTree');
    }

    when: any = {
        rendered: () => {
            render(<CommentTree {...(this.props as CommentTreeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CommentTree {...(this.props as CommentTreeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CommentTreeProps>) => {
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
