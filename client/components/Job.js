import React from 'react'
import {connect} from 'react-redux'
import {fetchJob, destoryJob} from '../store'


class Job extends React.Component {
    constructor() {
        super()
        this.state = {
            title : '',
            company : '',
            description : ''

        }
    }
    componentDidMount() {
        // console.log(this.props)
        // this.props.load(this.props.match.params.id)
        const job = this.props.jobs.find(job => job.id === this.props.match.params.id*1);
        if(job){
          this.setState({ title: job.title, company : job.company, description : job.description });
        }
      }
      componentDidUpdate(prevProps){
        //   console.log(prevProps)
        if(this.props.jobs.length && prevProps.jobs.length === 0){
            const job = this.props.jobs.find(job => job.id === this.props.match.params.id*1);
            if(job){
                this.setState({ title: job.title, company : job.company, description : job.description });
              }
        }
      }
    
    render() {
        // const {job} = this.props
            return(
                <>
                <h1>{this.state.title}</h1>
                <h3>{this.state.company}</h3>
                <p>{this.state.description}</p>
                <button onClick = { ()=> this.props.destory({id: this.props.match.params.id, history: this.props.history})}>Delete Job Post</button>
                </>
            )
        }

}

export default connect(
    ({jobs}) => {
        return {
            jobs
        }
    },
    (dispatch) => {
        return {
            // load : (id) => dispatch(fetchJob(id)),
            destory : (obj) => dispatch(destoryJob(obj))
        }
    }
)(Job)

