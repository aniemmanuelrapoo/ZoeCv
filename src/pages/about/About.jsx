import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic blanditiis labore dolorum consectetur placeat magni esse quam tempore?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Img" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, magnam. Dolorem, omnis quo. Omnis asperiores natus blanditiis nostrum iusto laudantium cum nemo, sunt dolorem quaerat aperiam soluta ducimus aliquid autem quis exercitationem dolore porro voluptates, excepturi sapiente debitis inventore hic.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, numquam a! Tempora, culpa, beatae officiis provident in autem asperiores, consequuntur veritatis vitae quisquam magnam dignissimos?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus consequatur magnam.</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, magnam. Dolorem, omnis quo. Omnis asperiores natus blanditiis nostrum iusto laudantium cum nemo, sunt dolorem quaerat aperiam soluta ducimus aliquid autem quis exercitationem dolore porro voluptates, excepturi sapiente debitis inventore hic.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, numquam a! Tempora, culpa, beatae officiis provident in autem asperiores, consequuntur veritatis vitae quisquam magnam dignissimos?</p>
          </div>

          <div className="about__section-image">
            <img src={VisionImage} alt="Our vision Img" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission Img" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, magnam. Dolorem, omnis quo. Omnis asperiores natus blanditiis nostrum iusto laudantium cum nemo, sunt dolorem quaerat aperiam soluta ducimus aliquid autem quis exercitationem dolore porro voluptates, excepturi sapiente debitis inventore hic.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, numquam a! Tempora, culpa, beatae officiis provident in autem asperiores, consequuntur veritatis vitae quisquam magnam dignissimos?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus consequatur magnam.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About