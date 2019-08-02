import React from 'react';

import SectionHeader from '../SectionHeader';
import SuccessBtn from '../SuccessBtn';
class Contact extends React.Component {
        state = {
                name: '',
                email: '',
                text: ''
        }
        setName = (value) => {
                this.setState({name: value})
        }
        setEmail = (e, value) => {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let res = re.test(String(value).toLowerCase());
                if(res === false){
                        e.target.classList.add('input--red');
                }else{
                        e.target.classList.remove('input--red');
                        e.target.classList.add('input--success');
                        this.setState({email: value});
                }
        }
        setText = (value) => {
                this.setState({text: value})
        }
        sendEmail = (e) => {
                let inputs = e.target.parentNode.parentNode.children;
                if(this.state.name !== '' && this.state.email !== '' && this.state.text !== ''){
                        alert('Message sent');
                }else{
                        Array.from(inputs).forEach(el => {
                                if(el.value === ''){
                                        el.classList.remove('input--success');
                                        el.classList.add('input--red');
                                }else{
                                        el.classList.remove('input--red');
                                        el.classList.add('input--success');
                                }
                        });
                }
        }
        render(){
                return (  
                        <section className="container page-section">
                                <SectionHeader 
                                        classes="section-header section-header--left"
                                        success="Get"
                                        header="in touch">Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                        <br/><br/>
                                        Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</SectionHeader>
                                        <div className="contact">
                                                <h3>Contact me</h3>
                                                <form>
                                                        <input type="text" placeholder="Full Name" onChange={(e) => this.setName(e.target.value)}/>
                                                        <input type="email" placeholder="Email" onChange={(e) => this.setEmail(e, e.target.value)}/>
                                                        <textarea placeholder="Message" onChange={(e) => this.setText(e.target.value)}></textarea>
                                                        <div onClick={(e) => this.sendEmail(e)}><SuccessBtn>Send</SuccessBtn></div>
                                                </form>
                                        </div>
                        </section>
                );
        }
}
 
export default Contact;