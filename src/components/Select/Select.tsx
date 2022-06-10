import React, {useState} from 'react';
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

export const Select: React.FC<SelectType> = (props) => {
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const toggleItems = () => setActive(!active)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const onItemClick = (value: string) => {
        props.onChange(value);
        toggleItems()
    }
    return (
        <div className={styles.select}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
                <div className={styles.items}>
                    {props.items.map(i =>
                        <div
                            onMouseEnter={()=> {setHoveredElementValue(i.value)}}
                            className={`${styles.item} ${hoveredItem === i? styles.selected: ''} `}
                            key={i.value}
                            onClick={()=> onItemClick(i.value)}
                        >
                            {i.title}
                        </div>)}
                </div>}
        </div>
    );
};
