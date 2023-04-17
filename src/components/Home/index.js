import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Slides from '../Slides'
import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class Home extends Component {
  state = {
    currentSlide: initialSlidesList[0],
    slideList: initialSlidesList,
    heading: false,
    description: false,
  }

  addNewSlide = () => {
    const {slideList, currentSlide} = this.state
    const index = slideList.indexOf(currentSlide)
    console.log(index)
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    const {id} = newSlide
    this.setState({
      slideList: [
        ...slideList.slice(0, index + 1),
        newSlide,
        ...slideList.slice(index + 1),
      ],
      currentSlide: newSlide,
    })
  }

  changeCurrentSlide = id => {
    const {slideList} = this.state
    const newSlide = slideList.find(eachSlide => eachSlide.id === id)
    this.setState({currentSlide: newSlide})
  }

  editData = () => {
    const {currentSlide} = this.state
    this.setState({hValue: currentSlide.heading, heading: true})
  }

  editDescription = () => {
    console.log('Called')
    const {currentSlide} = this.state
    this.setState({dValue: currentSlide.description, description: true})
  }

  changeHeading = event => {
    const {currentSlide, slideList} = this.state
    const index = slideList.indexOf(currentSlide)
    console.log(index)
    const {id, description} = currentSlide
    const newSlide = {
      id,
      heading: event.target.value,
      description,
    }
    this.setState({
      currentSlide: newSlide,
      slideList: [
        ...slideList.slice(0, index),
        newSlide,
        ...slideList.slice(index + 1),
      ],
    })
  }

  changeDescription = event => {
    const {currentSlide, slideList} = this.state
    const index = slideList.indexOf(currentSlide)
    const {id, heading} = currentSlide
    const newSlide = {
      id,
      heading,
      description: event.target.value,
    }
    this.setState({
      currentSlide: newSlide,
      slideList: [
        ...slideList.slice(0, index),
        newSlide,
        ...slideList.slice(index + 1),
      ],
    })
  }

  descriptionFocus = () => {
    this.setState({description: false})
  }

  headingFocus = () => {
    this.setState({heading: false})
  }

  render() {
    const {currentSlide, slideList, heading, description} = this.state
    return (
      <div className="nxt-slides-container">
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="logo"
          />
          <h1 className="heading">Nxt Slides</h1>
        </nav>
        <button type="button" className="new-button" onClick={this.addNewSlide}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="plus-icon"
          />
          <p className="new-name">New</p>
        </button>
        <div className="slides">
          <ol className="ul-items">
            {slideList.map((eachSlide, index) => (
              <Slides
                slides={eachSlide}
                index={index}
                key={eachSlide.id}
                changeCurrentSlide={this.changeCurrentSlide}
              />
            ))}
          </ol>
          <div className="current-slide">
            {heading ? (
              <input
                type="text"
                value={currentSlide.heading}
                onChange={this.changeHeading}
                onBlur={this.headingFocus}
              />
            ) : (
              <button type="button" onClick={this.editData}>
                <h1>{currentSlide.heading}</h1>
              </button>
            )}
            {description ? (
              <input
                type="text"
                value={currentSlide.description}
                onChange={this.changeDescription}
                onBlur={this.descriptionFocus}
              />
            ) : (
              <button type="button" onClick={this.editDescription}>
                <p>{currentSlide.description}</p>
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
