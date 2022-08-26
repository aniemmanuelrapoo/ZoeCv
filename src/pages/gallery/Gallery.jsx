import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
  const galleryLength = 15
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  console.log(images)

  return (
    <>
      <Header image={HeaderImage} title="Our Gallery">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore quam dolore enim ad neque nihil quaerat eum!
      </Header>

      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery img ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery