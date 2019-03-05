import C from './constants';
import appReducer from './store/reducers';
import initialState from './initialState.json';

let state = initialState;

console.log(`
    Initial state
    ----------------
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`);

state = appReducer(state, {
    type: C.SET_GOAL,
    payload: 2
});

state = appReducer(state, {
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-12-10",
        "powder": false,
        "backcountry": true
    }
});

state = appReducer(state, {
    type: C.CHANGE_SUGGESTIONS,
    payload: [
        "Mt Shasta", "Squaw Valley", "Stowe"
    ]
})

console.log(`
    Next state
    ----------------
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`);