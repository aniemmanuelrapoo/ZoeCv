import { useState } from "react"
import SectionHead from "./SectionHead"
import{ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import {testimonials} from '../data'


function Testimonials() {
  const [index, setIndex] = useState(0)
  const {avatar, name, quote, job} = testimonials[index]


  const prevTestimonialHandler = () => {
    setIndex(prev => prev - 1)

    if(index <= 0 ){
      setIndex(testimonials.length - 1)
    }
  }

  const nextTestimonialHandler = () => {
    setIndex(prev => prev + 1)

    if(index >= testimonials.length - 1){
      setIndex(0)
    }
  }

  
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials_head" />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt="avatar img" />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button className="testimonial__btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle/></button>
          <button className="testimonial__btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/></button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials