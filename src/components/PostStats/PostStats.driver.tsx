import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostStats, PostStatsProps } from './PostStats';
import { BaseComponentDriver } from 'testing-base';

export class PostStatsDriver extends BaseComponentDriver {
    private props: Partial<PostStatsProps> = {};

    constructor() {
        super('PostStats');
    }

    when: any = {
        rendered: () => {
            render(<PostStats {...(this.props as PostStatsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PostStats {...(this.props as PostStatsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PostStatsProps>) => {
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
