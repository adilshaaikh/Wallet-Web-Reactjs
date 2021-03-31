import axios from 'axios'
import {DELETE_WALLET, GET_ERROR, GET_WALLET, GET_WALLETS} from '../actions/types'

export const createWallet = (newWallet, history) => async dispatch => {

   await axios.post('http://localhost:8000/wallet', newWallet).then((res) => {
        history.push("/dashboard")
        alert("success");
    }).catch((err) => {
        dispatch({type:GET_ERROR,payload:err.response.data})
    })
}

export const getwallet = () => async dispatch => {

    await axios.get('http://localhost:8000/wallet').then((res) => {
        
        dispatch({type:GET_WALLET,payload:res.data})

     })
 }

 export const getwallets = (id) => async dispatch => {

    await axios.get('http://localhost:8000/wallet/'+id).then((res) => {
        
        dispatch({type:GET_WALLETS,payload:res.data})

     })
 }

 export const deleteWallet = (id) => async dispatch => {

    await axios.delete('http://localhost:8000/wallet/'+id).then((res) => {
        
        dispatch({type:DELETE_WALLET,payload:id})

     })
 }

 export const updateWallet = (id,updateWallet, history) => async dispatch => {

    await axios.put(`http://localhost:8000/wallet/${id}`,updateWallet).then((res) => {
         history.push("/dashboard")
         alert("Update");
     }).catch((err) => {
         dispatch({type:GET_ERROR,payload:err.response.data})
     })
 }
 
 export const createTransaction = (newTransaction, history,walletid) => async dispath => {
    await axios.post(`http://localhost:8000/transactions/${walletid}`, newTransaction)
        .then((res) => {
            history.push(`/transactions/${walletid}`)
        }).catch((err) => {
            console.log(err);
            dispath({type:GET_ERROR,payload:err.response.data})
        })
}

export const gettransactions = (newTransaction) => async dispatch => {

    await axios.get(`http://localhost:8000/transactions/${walletid}`,newTransaction).then((res) => {
        
        dispatch({type:GET_WALLET,payload:res.data})

     })
 }