import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachTimelineItem} = props
  const {
    projectTitle,
    duration,
    description,
    imageUrl,
    projectUrl,
  } = eachTimelineItem

  return (
    <>
      <img src={imageUrl} alt="project" />
      <div className="card-header-container">
        <h1>{projectTitle}</h1>
        <p>
          <AiFillCalendar style={{marginRight: '3'}} /> {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <div className="project-link-container">
        <a href={projectUrl} rel="noopener noreferrer" target="_blank">
          Visit
        </a>
      </div>
    </>
  )
}

export default ProjectTimelineCard
