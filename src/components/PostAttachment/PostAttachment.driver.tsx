import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostAttachment, PostAttachmentProps } from './PostAttachment';
import { BaseComponentDriver } from 'testing-base';

export class PostAttachmentDriver extends BaseComponentDriver {
    private props: Partial<PostAttachmentProps> = {};

    constructor() {
        super('PostAttachment');
    }

    when: any = {
        rendered: () => {
            render(<PostAttachment {...(this.props as PostAttachmentProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PostAttachment {...(this.props as PostAttachmentProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PostAttachmentProps>) => {
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
