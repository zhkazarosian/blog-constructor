import React from 'react';

import {PageConstructor} from '@gravity-ui/page-constructor';
import {Meta, Story} from '@storybook/react/types-6-0';

import {BlockType, BlogPostData} from '../../../models/blog';

import customBlocks from '../../../constructor/blocksMap';
import {BLOCKS} from '../../../demo/constants';
import {PostPageContext} from '../../../contexts/PostPageContext';
import post from '../../../../.mocks/post.json';

import {Meta as MetaBlock, MetaProps} from '../Meta';

export default {
    title: `${BLOCKS}/Meta`,
    component: MetaBlock,
    args: {
        theme: 'light',
    },
} as Meta;

type MetaBlockProps = {
    type: BlockType.Meta;
} & MetaProps;

const DefaultTemplate: Story<MetaBlockProps> = (args) => (
    <PostPageContext.Provider value={{post: post as BlogPostData}}>
        <PageConstructor content={{blocks: [args]}} custom={customBlocks} />
    </PostPageContext.Provider>
);

export const Default = DefaultTemplate.bind({});

Default.args = {
    type: BlockType.Meta,
    paddingBottom: 'l',
    paddingTop: 'l',
};
