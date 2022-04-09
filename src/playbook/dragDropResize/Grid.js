import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import _ from 'lodash';
import {Responsive, WidthProvider} from 'react-grid-layout';

const layout = [
    { i: "blue-eyes-dragon", x: 0, y:0, w: 1, h: 1},
    { i: "dark-magician", x: 1, y:0, w: 1, h: 1},
    { i: "kuriboh", x: 2, y:0, w: 1, h: 1},
    { i: "spell-caster", x: 3, y:0, w: 1, h: 1},
    { i: "summoned-skull", x: 4, y:0, w: 5, h: 1},
]

const GridItemWrapper = styled.div`
    background: green;
`;

const GridItemContent = styled.div`
    padding: 8px;
`;

const Root = styled.div`
    padding: 16px;
`

const ResponsiveGridLayout = WidthProvider(Responsive);

const getLayouts = () => {
    const savedLayouts = localStorage.getItem('grid-layout');

    return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout};
}


export const Grid = () => {
    const handleLayoutChange = (layout, layouts) => {
        localStorage.setItem('grid-layout', JSON.stringify(layouts))
    }

    return (
        <Root>
            <ResponsiveGridLayout 
                layouts={getLayouts()} 
                onLayoutChange={handleLayoutChange}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }} 
                rowHeight={300} 
                // width={1300}
                isDraggable
                isRearrangeable
                isResizable
            >
                <GridItemWrapper key='blue-eyes-dragon'>
                    <GridItemContent>Blue Eyes Dragon</GridItemContent>
                </GridItemWrapper>
                <GridItemWrapper key='dark-magician'>
                    <GridItemContent>Dark Magician</GridItemContent>
                </GridItemWrapper>
                <GridItemWrapper key='kuriboh'>
                    <GridItemContent>Kuriboh</GridItemContent>
                </GridItemWrapper>
                <GridItemWrapper key='spell-caster'>
                    <GridItemContent>Spell Caster</GridItemContent>
                </GridItemWrapper>
                <GridItemWrapper key='summoned-skull'>
                    <GridItemContent>Summoned Skull</GridItemContent>
                </GridItemWrapper>
            </ResponsiveGridLayout>
        </Root>
    )
}