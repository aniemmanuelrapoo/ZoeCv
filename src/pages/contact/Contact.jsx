import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header image={HeaderImage} title="Get In Touch">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem et numquam tempore reprehenderit! Ex perferendis sunt ullam quasi.
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:zoeCV@gmail.com" target="_blank" rel='noreferrer noopener'><MdEmail /></a>

            <a href="https://m.me/aniemmanuelrapoo" target="_blank" rel='noreferrer noopener'><BsMessenger /></a>

            <a href="https://wa.me/+2348183225008" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact