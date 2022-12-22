import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Feed, FeedProps } from './Feed';
import { BaseComponentDriver } from 'testing-base';

export class FeedDriver extends BaseComponentDriver {
    private props: Partial<FeedProps> = {};

    constructor() {
        super('Feed');
    }

    when: any = {
        rendered: () => {
            render(<Feed {...(this.props as FeedProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Feed {...(this.props as FeedProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FeedProps>) => {
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
