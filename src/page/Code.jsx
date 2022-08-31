import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia,
    solarizedlight,
    tomorrow,
    twilight,
    prism,
    a11yDark,
    atomDark,
    cb,
    coldarkCold,
    coldarkDark,
    coyWithoutShadows,
    darcula,
    dracula,
    duotoneDark,
    duotoneEarth,
    duotoneForest,
    duotoneLight,
    duotoneSea,
    duotoneSpace,
    ghcolors,
    hopscotch,
    materialDark,
    materialLight,
    materialOceanic,
    nord,
    pojoaque,
    shadesOfPurple,
    synthwave84,
    vs,
    vscDarkPlus,
    xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default (props) => {
    return (
        <SyntaxHighlighter
            // showLineNumbers={true}
            // startingLineNumber = {0}
            language={props.lang} 
            style={darcula} 
            lineNumberStyle={{color: '#ddd', fontSize: 20}}
            // wrapLines={true}
            // lineProps={(num) => {console.log(num)} }
        >
                {props.children.replace(/^\s+|\s+$/g, '')}
        </SyntaxHighlighter>
    )
}