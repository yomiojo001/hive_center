import React from 'react'

const Testimonial = (props) => {
    return (
        <div>
            <section className="mw5 mw7-ns center  pa3 ph5-ns">
              <div className="carousel-of-quotes items-center">
                        <div className="flex justify-center ">
                            <div className="pa4">
                                <div className="gray f4 w-  50"> 
                                {props.quote}
                                </div>
                                      <p className="content-center f6 pt3">{props.author}</p>
                                      <p className="content-center f7">{props.job}</p>

                                </div>
                                <img className="fr br-100" src={props.avatar} alt="Kolade "/>
                            </div>
                        
                       
                 </div>
                </section>
        </div>
    )
}

export default Testimonial;
