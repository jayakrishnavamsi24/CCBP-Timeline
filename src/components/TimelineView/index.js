import {Component} from 'react'
import {Chrono} from 'react-chrono'
import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

class TimelineView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timelineItemsList: props.timelineItemsList,
    }
  }

  render() {
    const {timelineItemsList} = this.state

    return (
      <div className="bg-container">
        <h1 className="about"> MY JOURNEY OF</h1>
        <h1 className="course-name"> CCBP 4.0</h1>
        <div className="chrono-container">
          <Chrono
            theme={{
              primary: '#0967d2',
              secondary: '#ffffff',
              cardBgColor: '#ffffff',
            }}
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
          >
            {timelineItemsList.map(eachTimelineItem => {
              if (eachTimelineItem.categoryId === 'COURSE') {
                return (
                  <CourseTimelineCard
                    key={eachTimelineItem.id}
                    eachTimelineItem={eachTimelineItem}
                  />
                )
              }
              return (
                <ProjectTimelineCard
                  key={eachTimelineItem.id}
                  eachTimelineItem={eachTimelineItem}
                />
              )
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
