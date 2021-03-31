  
import React, { Component } from 'react'
import {createWallet} from '../../../actions/projectActions'
import {connect} from 'react-redux'
import classnames from 'classnames'

class CreateWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            accountNumber: '',
            description: '',
            priority: '',
            error:''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.error){
            this.setState({error:nextProps.error})
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        
        const newWallet = {
            name: this.state.name,
            accountNumber: this.state.accountNumber,
            description: this.state.description,
            priority: this.state.priority
        }
        this.props.createWallet(newWallet,this.props.history)
        event.preventDefault()
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Wallet</h5>
                            <hr />
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.error.name})} placeholder="Account Name"  />
                                    <p className="text-danger">{this.state.error.name}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "accountNumber")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.error.accountNumber})} placeholder="Account No" />
                                    <p className="text-danger">{this.state.error.accountNumber}</p>
                                </div>
                                <div className="form-group">
                                    <textarea onChange={(event) => this.changeHandler(event, "description")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.error.description})} placeholder="Description"></textarea>
                                    <p className="text-danger">{this.state.error.description}</p>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" onChange={(event) => this.changeHandler(event, "priority")}>
                                        <option value={3}>Display Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    error:state.error
})

export default connect(mapStateToProps,{createWallet})(CreateWallet)