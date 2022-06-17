import {StateType} from "./UncontrolledAccordion";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

test("collapsed should be true", () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(true)

})

test("collapsed should be false", () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(false)

})


test("collapsed should be crashed", () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
   expect(()=> {
       reducer(state, {type: "FakeType"})}).toThrowError();

})