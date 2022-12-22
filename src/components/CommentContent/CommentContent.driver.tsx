import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CommentContent, CommentContentProps } from './CommentContent';
import { BaseComponentDriver } from 'testing-base';

export class CommentContentDriver extends BaseComponentDriver {
    private props: Partial<CommentContentProps> = {};

    constructor() {
        super('CommentContent');
    }

    when: any = {
        rendered: () => {
            render(<CommentContent {...(this.props as CommentContentProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CommentContent {...(this.props as CommentContentProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CommentContentProps>) => {
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
