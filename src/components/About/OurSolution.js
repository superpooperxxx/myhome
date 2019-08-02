import React from 'react';

const OurSolution = () => {
        const drops = [
                {
                        header: 'Accordion Heading Text Item # 1',
                        p: 'Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'
                },
                {
                        header: 'Accordion Heading Text Item # 2',
                        p: 'Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'
                },
                {
                        header: 'Accordion Heading Text Item # 3',
                        p: 'Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'
                },
                {
                        header: 'Accordion Heading Text Item # 4',
                        p: 'Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'
                }
        ]
        const openDropDown = (e) => {
                console.log(e.target.parentNode.children[1].classList.toggle('p-closed'));
        }
        return (  
                <article className="our-solution">
                        <h3>Our Solution</h3>
                        {
                                drops.map(( drop, id) => {
                                        return <div className="solution__drop-down" key={id}>
                                                <div className="drop-down__heading" onClick={(e) => openDropDown(e)}><i className="fas fa-chevron-right"></i>{ drop.header }</div>
                                                <p className="p-closed">{ drop.p }</p>
                                        </div>
                                })
                        }
                </article>
        );
}
 
export default OurSolution;