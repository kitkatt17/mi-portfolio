import React from 'react'
import { Container } from 'react-bootstrap'
import { Card, Icon, Image } from 'semantic-ui-react'



export const Projects = () => {
  return (
    <Container className="mt-5" id='projects'>
      <h2 className="ui horizontal divider header">
        Projects
      </h2>
      <Container className='mx-auto d-flex justify-content-center mt-5'>
        <Card.Group className="d-flex justify-content-center pb-4">
          <Card className='card'>
            <Image 
              src='/images/ssTravelMate-homepage.png'
              size="big"
              wrapped ui={false}
              rounded
              centered />

            <Card.Content>
              <Card.Header>Travel Mate Project</Card.Header>
              <Card.Description>
              Travelmate is an application designed to help users search for, and save within their personal profile, activities happening in their travel destinations.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href='https://github.com/kitkatt17/TravelMateProject' target='_blank' rel="noopener noreferrer">
                <Icon name='github' />
                Read More
              </a>
            </Card.Content>
          </Card>
          <Card className='card'>
            <Image 
              src='/images/ssThe-Gaming-Spot.PNG'
              size="big"
              wrapped ui={false}
              rounded
              centered />

            <Card.Content>
              <Card.Header>The Gaming Spot Project</Card.Header>
              <Card.Description>
              This application allows users to search games and leave reviews. Users would have to login or signup to use the application.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href='https://github.com/kitkatt17/TheGamingSpotProject' target='_blank' rel="noopener noreferrer">
                <Icon name='github' />
                Read More
              </a>
            </Card.Content>
          </Card>

          <Card className='card'>
            <Image 
              src='/images/ssFashion-Forecast2.PNG'
              size="big"
              wrapped ui={false}
              rounded
              centered />

            <Card.Content>
              <Card.Header>Fashion Forecast Project</Card.Header>
              <Card.Description>
              This project uses the OpenWeatherMap API to find weather, the MapBox API to locate places, and the Amazon Price API to suggest clothing based on the forecast.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href='https://github.com/kitkatt17/FashionForecastProject' target='_blank' rel="noopener noreferrer">
                <Icon name='github' />
                Read More
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </Container>
  )
}
