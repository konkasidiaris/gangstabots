import React from 'react';

export default function Scroll(props){
    return (
        <div style={{ overflow: 'scroll', border:'none', height:'800px'}}>
            {props.children}
        </div>
    );
}