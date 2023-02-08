import { Image, Box,Button, Container, Heading, Input, Select, Text, Center } from '@chakra-ui/react'
import React, { useState } from 'react'

function Weatherapi() {
  const [city, setCity] = useState('')
  const [data, setData] = useState<any>()
  const [img, setimg] = useState<any>()

let string;
console.log(string)
  React.useEffect(() => {
    const currentCity = localStorage.getItem('CurrentCity')
    if (currentCity) {
      setData(JSON.parse(currentCity))
    }
  }, [])

  async function getData(city: string) {
   await fetch(`http://api.weatherapi.com/v1/current.json?key=95e688314dad46da8fc165950230702 &q=${city}&aqi=no`, { mode: 'cors' })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('CurrentCity', JSON.stringify(data))
        setData(data)
        setimg(`https://${(data && data.current && data.current.condition && data.current.condition.icon).substring(2)}`)
      
    })
  }

  return (
    <Container>
     
      <Input mt='190px' bg="blue.100"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder='Search for a City'
        width='15vw'
        size='lg' />
      <p><Button width='7vw' ml='3.5vw' mt='10px' onClick={() => getData(city)} variant='outline' bg='blue.400'>Search</Button></p>
      <Box mt= '50px' textAlign="center" border='2px' width ="250px" bg = "yellow.100">


 
 <Heading> {data && data.location && data.location.name}     
 </Heading>
 
  {data && <Image src = {img} />}
 <p>{data && data.current && data.current.temp_c + " C" }  
 </p>
 <p>{ data && data.current && "Humidity: " + data.current.humidity + "%"  }  
 </p>
 <p>{data && data.current && "Wind Speed: "+  data.current.wind_kph
 +" km/h"}  
 </p>
  <p>{data && data.location && "Local Time: "+ data.location.localtime
 } 
 </p> </Box>


    </Container>
  )
}

export default Weatherapi