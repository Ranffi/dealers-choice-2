import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import CreateJob from './CreateJob'

const Jobs = ({jobs}) => {
    return(
        <>
        <h3><Link to ='/createJob'> Create Job Post</Link></h3>
            <ul>
                {
                    jobs.map(job => {
                        return(
                            <li key = {job.id}>
                                <div>
                                <Link to = {`/jobs/${job.id}`}>
                                {job.title}
                                </Link>
                                {job.company}
                                {/* {job.description} */}

                                </div>
                                
                                
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
    
}
export default connect(
    ({ jobs })=> {
      return {
        jobs
      };
    }
  )(Jobs);