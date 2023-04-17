const Slides = props => {
  const {slides, index, changeCurrentSlide} = props
  const {id, heading, description} = slides

  const changeSlide = () => {
    changeCurrentSlide(id)
  }

  return (
    <li>
      <p>{index + 1}</p>
      <button
        type="button"
        onClick={changeSlide}
        testid={`slideTab${index + 1}`}
      >
        <h1>{heading}</h1>
        <p>{description}</p>
      </button>
    </li>
  )
}

export default Slides
