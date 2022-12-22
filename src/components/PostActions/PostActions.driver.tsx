import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostActions, PostActionsProps } from './PostActions';
import { BaseComponentDriver } from 'testing-base';

export class PostActionsDriver extends BaseComponentDriver {
    private props: Partial<PostActionsProps> = {};

    constructor() {
        super('PostActions');
    }

    when: any = {
        rendered: () => {
            render(<PostActions {...(this.props as PostActionsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PostActions {...(this.props as PostActionsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PostActionsProps>) => {
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
