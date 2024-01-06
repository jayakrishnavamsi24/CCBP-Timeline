import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {eachTimelineItem} = props
  const {courseTitle, duration, description, tagsList} = eachTimelineItem

  return (
    <>
      <div className="card-header-container">
        <h1>{courseTitle}</h1>
        <p>
          <AiFillClockCircle style={{marginRight: '3'}} /> {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <div className="tags-list-container">
        {tagsList.map(eachTagItem => (
          <p>{eachTagItem.name}</p>
        ))}
      </div>
    </>
  )
}

export default CourseTimelineCard
