import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IconFeedback, IconFeedbackProps } from './IconFeedback';
import { BaseComponentDriver } from 'testing-base';

export class IconFeedbackDriver extends BaseComponentDriver {
    private props: Partial<IconFeedbackProps> = {};

    constructor() {
        super('IconFeedback');
    }

    when: any = {
        rendered: () => {
            render(<IconFeedback {...(this.props as IconFeedbackProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<IconFeedback {...(this.props as IconFeedbackProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<IconFeedbackProps>) => {
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
