import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import axios from 'axios'

// Const
const SET_JOBS = 'SET_JOBS'
const SET_JOB = 'SET_JOB'
const CREATE_JOB = 'CREATE_JOB'
const DELETE_JOB = 'DELETE_JOB'


//action creators
const setJobs = (jobs) => {
    return {
        type : SET_JOBS,
        jobs
    }
}
const setJob = (job) => {
    return {
        type : SET_JOB,
        job
    }
}
const createJob = (job) => {
    return {
        type : CREATE_JOB,
        job
    }
}
const deleteJob = (id) => {
    return {
        type : DELETE_JOB,
        id
    }
}

//thunk creator
const fetchJobs = () => {
    return async(dispatch) => {
        const res = await axios.get('/api/jobs')
        dispatch(setJobs(res.data))
    }
}
const fetchJob = (id) => {
    return async(dispatch) => {
        const res = await axios.get(`/api/jobs/${id}`)
        dispatch(setJob(res.data))
    }
}
const destoryJob = ({id, history}) => {
    return async(dispatch) => {
        console.log('hello ')
        await axios.delete(`/api/jobs/${id}`)
        console.log('world')
        dispatch(deleteJob(id))
        history.push('/jobs')
    }
}
const createJobThunk = ({title, company, description, history}) => {
    return async(dispatch) => {
        const job = await axios.post('/api/jobs',{title, company, description})
        dispatch(createJob(job.data))
        history.push('/jobs')
    }
}

//reducers
const allJobsReducer = (state = [], action) => {
    switch(action.type) {
        case SET_JOBS :
            state = action.jobs
            return state
        case DELETE_JOB :
            state = state.filter(job => job.id !== action.id*1)
            return state
        case CREATE_JOB :
            state = [action.job, ...state]
    
        default : 
            return state
    }
    
}
// const jobReducer = (state = {}, action) => {
//     switch(action.type) {
//         case SET_JOB :
//             state = action.job
//             return state
    
//         default : 
//             return state
//     }
// }

// const deleteReducer = (state = [], action) => {
//     switch(action.type) {
//         case DELETE_JOB :
//             state = state.filter(job => job.id !== action.id*1)
//             return state
    
//         default : 
//             return state
//     }
// }
const reducer = combineReducers({
    jobs : allJobsReducer
})
// create store pass in middleware and export the thunks creator

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger))

export default store
export {fetchJobs, fetchJob, destoryJob, createJobThunk}