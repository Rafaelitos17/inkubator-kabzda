import React, {ChangeEvent, useRef, useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Select} from "./components/Select/Select";
import {Rating} from "./components/Rating/Rating";

function App() {
    // const [value, setValue] = useState<boolean>(true)
    const [value, setValue] = useState('2')
    return (
        <div className="App">
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Week 1*/}
            {/*Week 2*/}
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            {/*<OnOff/>*/}
            {/*Week 3*/}
            {/*<hr/>*/}
            {/*<UncontrolledInput/>*/}
            {/*<TrackValueOfUncontrolledInput/>*/}
            {/*<GetValueOfUncontrolledInputByButtonPress/>*/}
            {/*<hr/>*/}
            {/*<ControlledInput/>*/}
            {/*<ControlledCheckbox/>*/}
            {/*<hr/>*/}
            {/*<ControlledSelect/>*/}
            {/*<hr/>*/}
            {/*<Accordion titleValue={"Menu"}*/}
            {/*           collapsed={value}*/}
            {/*           items={[*/}
            {/*               {title: 'Dima', value: 1},*/}
            {/*               {title: 'Valera', value: 2},*/}
            {/*               {title: 'Artem', value: 3},*/}
            {/*               {title: 'Victor', value: 4}*/}
            {/*           ]*/}
            {/*           }*/}
            {/*           onChange={() => setValue(!value)}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={value}*/}
            {/*           items={[*/}
            {/*               {title: 'Ansu', value: 1},*/}
            {/*               {title: 'Ferran', value: 2},*/}
            {/*               {title: 'Auba', value: 3},*/}
            {/*               {title: 'Pedri', value: 4}*/}
            {/*           ]}*/}
            {/*           onChange={() => setValue(!value)}/>*/}
            {/*<hr/>*/}
            <Select
                onChange={setValue}
                value={value}
                items={
                    [
                        {value: '1', title: 'Moscow'},
                        {value: '2', title: 'Minsk'},
                        {value: '3', title: 'Kyiv'},
                    ]
                }
            />
            <UncontrolledAccordion titleValue={'Hello'}
                                   items={
                                       [
                                           {title: 'Ansu', value: 1},
                                           {title: 'Ferran', value: 2},
                                           {title: 'Auba', value: 3},
                                           {title: 'Pedri', value: 4}
                                       ]
                                   }/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


const UncontrolledInput = () => {
    return <input/>
}
const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('Hey')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue);
    }
    return <div>
        <input onChange={onChangeHandler}/> -- {value}
    </div>
}
const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('Hey')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button
            onClick={save}>save
        </button>
        actual value: {value}
    </>
}

const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
    return <input value={parentValue} onChange={onChange}/>
}
const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}

export default App;
