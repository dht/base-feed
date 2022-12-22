import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Comment, CommentProps } from './Comment';
import { BaseComponentDriver } from 'testing-base';

export class CommentDriver extends BaseComponentDriver {
    private props: Partial<CommentProps> = {};

    constructor() {
        super('Comment');
    }

    when: any = {
        rendered: () => {
            render(<Comment {...(this.props as CommentProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Comment {...(this.props as CommentProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CommentProps>) => {
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
