import React from 'react';

import {PageConstructor} from '@gravity-ui/page-constructor';
import {Meta, Story} from '@storybook/react/types-6-0';

import {BlockType, BlogPostData} from '../../../models/blog';

import customBlocks from '../../../constructor/blocksMap';
import {BLOCKS} from '../../../demo/constants';
import {PostPageContext} from '../../../contexts/PostPageContext';
import post from '../../../../.mocks/post.json';

import {ColoredText, ColoredTextProps} from '../ColoredText';

export default {
    title: `${BLOCKS}/ColoredText`,
    component: ColoredText,
    args: {
        theme: 'light',
    },
} as Meta;

type ColoredTextStoryProps = {
    type: BlockType.ColoredText;
} & ColoredTextProps;

const DefaultTemplate: Story<ColoredTextStoryProps> = (args) => (
    <PostPageContext.Provider value={{post: post as BlogPostData}}>
        <PageConstructor content={{blocks: [args]}} custom={customBlocks} />
    </PostPageContext.Provider>
);

export const Default = DefaultTemplate.bind({});

Default.args = {
    type: BlockType.ColoredText,
    background: {
        color: '#000',
        image: 'https://storage.yandexcloud.net/cloud-www-assets/blog-assets/ru/posts/2022/07/cover-digest-june.png',
        altText: 'test',
    },
    paddingBottom: 'l',
    paddingTop: 'l',
};
