import React, {KeyboardEvent, useEffect, useState} from 'react';
import styles from './Select.module.css'

export type SelectItemsType = {
    value: string
    title: string
}

export type SelectType = {
    onChange: any
    value?: string
    items: Array<SelectItemsType>
}

const SelectSecret: React.FC<SelectType> = (props) => {
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const toggleItems = () => setActive(!active)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const onItemClick = (value: string) => {
        props.onChange(value);
        toggleItems()
    }
    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false);
        }

    }

    return (
        <div className={styles.select} onKeyDown={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
                <div className={styles.items}>
                    {props.items.map(i =>
                        <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={`${styles.item} ${hoveredItem === i ? styles.selected : ''} `}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        >
                            {i.title}
                        </div>)}
                </div>}
        </div>
    );
};
export const Select = React.memo(SelectSecret)