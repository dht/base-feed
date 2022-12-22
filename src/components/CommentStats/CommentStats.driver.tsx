import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CommentStats, CommentStatsProps } from './CommentStats';
import { BaseComponentDriver } from 'testing-base';

export class CommentStatsDriver extends BaseComponentDriver {
    private props: Partial<CommentStatsProps> = {};

    constructor() {
        super('CommentStats');
    }

    when: any = {
        rendered: () => {
            render(<CommentStats {...(this.props as CommentStatsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CommentStats {...(this.props as CommentStatsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CommentStatsProps>) => {
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
