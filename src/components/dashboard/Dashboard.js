import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboradItem from './DashboradItem';
import { getwallet } from '../../actions/projectActions';
import { connect } from 'react-redux';

class Dashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             totalBalance:0.0
        }
    }
    componentDidMount() {
        this.props.getwallet()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.wallets){
            let totalBal = 0
            for(let i=0;i<nextProps.wallets.length;i++){
                totalBal=totalBal+nextProps.wallets[i].currentBalance
            }
            this.setState({totalBalance:totalBal})
        }
    }
    render() {
        const wallets = this.props.wallets;
        const walletComponent = wallets.map(wallet =>(<DashboradItem key={wallet.id} wallet={wallet} />));
        
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">My Wallets</h1>
                            <br />
                            <div className="btn-group">
                                <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Create new
                        </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/createwallet">Wallet</Link>
                                    <button disabled className="dropdown-item">Transaction</button>
                                </div>
                            </div>
                            <br />
                            <div className="card text-center">
                                <div className="card-header bg-success text-white">
                                    <h4>Current Balance (Total)</h4>
                                    <h1>{this.state.totalBalance}</h1>
                                </div>
                            </div>
                            <hr />

                            {walletComponent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    wallets: state.wallet.wallets
})
export default connect(mapStateToProps, { getwallet })(Dashboard)