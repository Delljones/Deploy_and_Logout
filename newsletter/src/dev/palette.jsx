import React from 'react';
import {
    Category,
    Component,
    Variant,
    Palette,
} from '@react-buddy/ide-toolbox';

export const PaletteTree = () => (
    <Palette>
        <Category name="HTML">
            <Component name="a">
                <Variant requiredParams={['href']}>

                </Variant>
            </Component>
            <Component name="button">
                <Variant>
                    <button>Button</button>
                </Variant>
            </Component>
        </Category>
    </Palette>
);
