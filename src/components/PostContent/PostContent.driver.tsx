import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostContent, PostContentProps } from './PostContent';
import { BaseComponentDriver } from 'testing-base';

export class PostContentDriver extends BaseComponentDriver {
    private props: Partial<PostContentProps> = {};

    constructor() {
        super('PostContent');
    }

    when: any = {
        rendered: () => {
            render(<PostContent {...(this.props as PostContentProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PostContent {...(this.props as PostContentProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PostContentProps>) => {
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
