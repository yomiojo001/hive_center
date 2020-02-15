import React from 'react';



const Facility = (props)  => {
    return (
        <div className="ma3 ">
            <article className="br2 ba  shadow-5 dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center ">
               <img src={props.Image} className="db w-100 br2 br--top" alt={props.Location}/>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                                 <h6 className="f6 f4-ns tc mv0">{props.Location}</h6>
                            </div>  
                        </div>
                    </div>
            </article>

        </div>
    )
}
 export default Facility; 