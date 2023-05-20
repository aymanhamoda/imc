import React from 'react'
import { Image, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const homeCalcPart = () => {
  return (
    <div >
      <Container>
        <Row>
          <div className="col-md-6 py-5 align-self-center">
            <h3>Learn on the way ..</h3>
            <p className="lead">
              Now, you can see a little course in clinical pharmacy application.
            </p>
            <div>
              <Link className="btn btn-primary" to="/courses/0">
                Learn now
              </Link>
            </div>
          </div>
          <div className="col-md-6 text-center py-5">
            <Image
              className="img-fluid rounded-circle"
              src="/images/app.jpg"
              fluid
            />
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default homeCalcPart
