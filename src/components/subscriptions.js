import React, {Component} from 'react'

class Subscription extends Component {
    constructor(props) {

        super(props);
        this.state = {
            email: '',
            error:false,
            success:false
        }
    }
    onChangeInput = (event)=>{
        this.setState({
            email:event.target.value
        })
    }
    clearMessages = () => {
        setTimeout(function(){
            this.setState({
                error:false,
                success:false
            })
        }.bind(this) 
        ,1000)
    }    
    saveSubscription = (email)=> {
        const URL_EMAIL = `http://localhost:3010/subcriptions`
        fetch(URL_EMAIL,{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email})
        }).then(res=>res.json())
        .then(()=>{
            this.setState({
                email:'',
                success:true
            })
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if(regex.test(email)){
                this.saveSubscription(email);
        }
        else{
            this.setState({error:true})

        }
        this.clearMessages();

    }
    render() {

        return (

            <div className="subscribe_panel">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Enter Your Email Address?" value={this.state.email} onChange={this.onChangeInput} type="text"/>
                        <div className={this.state.error ? "error show" : "error"} >Check Your email</div>
                        <div className={this.state.success ? "success show" : "success"}>Thank You!</div>
                    </form>
                </div>
                <small> 
                    Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                    ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                    ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                    ipsum
                </small>
            </div>
        )
    }
}

export default Subscription;