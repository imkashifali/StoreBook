import React from 'react'
import Counter from '../components/counter'

export default {
    title: "Counter",
    component: Counter

}

export const DefaultCounter = () => (
        <Counter />
)
export const counterStartWith10 = () => (
    <Counter initialValue={10}/>
)