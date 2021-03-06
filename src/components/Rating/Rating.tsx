import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function RatingSecret(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

export const Rating = React.memo(RatingSecret)

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return <span>{props.selected ? <b>star</b> : "star"}</span>
}