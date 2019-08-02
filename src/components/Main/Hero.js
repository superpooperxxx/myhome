import React from 'react';
import hero1 from '../../assets/img/slides/1.jpg';
import hero2 from '../../assets/img/slides/2.jpg';
class Hero extends React.Component{
        state = {
                currentImg: hero1,
                titles: ['Trendy Home', 'Gated Villas'],
                currentTitle: 'Trendy Home',
        }
        componentDidMount = () => {
                let i = 1;
                let slider = setInterval(() => {
                        if(i === 0){
                                this.setState(
                                        {
                                                currentImg: hero1,
                                                currentTitle: this.state.titles[0]
                                        }
                                        
                                )
                                i++;
                        }else if(i === 1){
                                this.setState(
                                        {
                                                currentImg: hero2,
                                                currentTitle: this.state.titles[1]
                                        }
                                        
                                )
                                i--
                        }
                }, 4000)
                this.componentWillUnmount = () => {
                        clearInterval(slider);
                }
        }
        render(){
                return (  
                        <section className="hero" style={{backgroundImage: `url(${this.state.currentImg})`}}>
                                <h1>{this.state.currentTitle}</h1>
                        </section>
                );
        }
}
 
export default Hero;