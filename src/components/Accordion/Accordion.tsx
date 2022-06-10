import React from "react";

type AccordionItemsPropsType = {
    title: string
    value: number
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: AccordionItemsPropsType[]
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {props.collapsed && <AccordionBody items={props.items} />}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
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

export default Accordion;