import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionItemsPropsType = {
    title: string
    value: number
}

type ItemsType = {
    title: string
    value: number
}

type AccordionPropsType = {
    titleValue: string
    items: Array<ItemsType>
}

export type StateType = {
    collapsed: boolean
}

export function UncontrolledAccordionSecret(props: AccordionPropsType) {
    // let[collapsed, setCollapsed] = useState(false)
    let[state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={ ()=> setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={ ()=> dispatch({type: TOGGLE_COLLAPSED})}/>
            {!state.collapsed && <AccordionBody items={props.items}/>}
        </div>
    );
}
export const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret)

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: AccordionItemsPropsType[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(i => <li key={i.title}>{i.title}</li>)}
        </ul>
    )
}
