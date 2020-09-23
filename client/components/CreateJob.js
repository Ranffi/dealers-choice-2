import React from 'react'
import { connect } from 'react-redux'
import { createJobThunk } from '../store'

class CreateJob extends React.Component{
    constructor(){
        super()
        this.state = {
            title : '',
            logo : '',
            company : '',
            description : ''
        }
        this.save = this.save.bind(this)
    }
    save(ev){
        ev.preventDefault();
        this.props.createJob({ 
            history: this.props.history,
            title : this.state.title,
            logo : this.state.logo,
            company : this.state.company,
            description : this.state.description 
        });
      }
        render(){
            const {title, company, description} = this.state
            return(
                
            <div>
                
                <form onSubmit={ this.save }>
                    <label> 
                        Job Title : 
                        <input value={ title } onChange={ ev => this.setState({ title: ev.target.value })}/>
                    </label>
                    <label> 
                        Company : 
                        <input value={ company } onChange={ ev => this.setState({ company: ev.target.value })}/>
                    </label>
                    <label>
                        Job Description :
                        <textarea value= {description} cols="30" rows="10" onChange={ ev => this.setState({ description: ev.target.value })}/>
                    </label>
                    <button className ='medium-btn'>Create</button>
                </form>
            </div>
            )
        }
}
export default connect(
    ()=> {
      return {
      };
    },
    (dispatch)=> {
      return {
        createJob: (job)=> { dispatch(createJobThunk(job))},
      };
    })(CreateJob);