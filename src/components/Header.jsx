const Header = ({title, image1, children}) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-bg">
          <img src={image1} alt="Header Background image1" />
        </div>
        <div className="header__content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  )
}

export default Header