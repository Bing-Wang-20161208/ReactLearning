//各单位组件

import React from 'react'

export default function TodoHeader(props) {
    return (
        <>
            <h1>
                {props.dec}
            </h1>
            <p>{props.children}</p>
        </>
    )
}
