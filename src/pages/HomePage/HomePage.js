import React, {useRef, useState , } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TopNavBar from '../../components/TopNavbar/TopNavBar'
import homeImage from '../../images/Rectangle 133.png'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './HomePage.css'

const HomePage = () => {

  const [type, setType] = useState('');
  const [type2, setType2] = useState('');
  const [type3, setType3] = useState('');
  const [type4, setType4] = useState('');
  const [type5, setType5] = useState('');
  const [type6, setType6] = useState('');
  
  const [advance, setAdvance] = useState(false)

  const advanceRef = useRef();

  const closeAdvance = () => {
    if (advanceRef.current === advance(true)) {
      setAdvance(false)
    }
  }
 

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleChange2 = (event) => {
    setType2(event.target.value);
  };

  const handleChange3 = (event) => {
    setType3(event.target.value);
  };

  const handleChange4 = (event) => {
    setType4(event.target.value);
  };

  const handleChange5 = (event) => {
    setType5(event.target.value);
  };

  const handleChange6 = (event) => {
    setType6(event.target.value);
  };

  return (
    <>
      <TopNavBar ref={advanceRef} onClick={closeAdvance}/>
      <Navbar ref={advanceRef} onClick={closeAdvance}/>
      <div  className='home-container'ref={advanceRef} onClick={closeAdvance} >
        <div className="home-page-image">
          <img src={homeImage} alt='building' height={355} width={1804} />
        </div>
        <div className="homepage-header">
          <h1>WELCOME TO AUCKLAND PROPERTY MANAGEMENT </h1>
          <p>Auckland’s home of reduced risk residential, commercial and body corporate property management</p>
        </div>
        <div className="future-rent-container">
          <h1>Let’s find your future rent together : </h1>
        </div>
        <div className="search-container">
          <div className="search-first-row">
            <label htmlFor="property" className='label-input-class'>Property Type :
            <Box className='input-box1' sx={{ minWidth: 120,
                    }}>
              <FormControl fullWidth>
                <InputLabel id="property">Select</InputLabel>
                <Select className='selection-input'
                  labelId="property"
                  id="property"
                  value={type}
                  label="property"
                  onChange={handleChange}
                  >
                  <MenuItem value={"All Auckland"}>All Auckland</MenuItem>
                  <MenuItem value={"Central Auckland"}>Central Auckland</MenuItem>
                  <MenuItem value={"South Auckland"}>South Auckland</MenuItem>
                  <MenuItem value={"North Shore"}>North Shore</MenuItem>
                </Select>
              </FormControl>
            </Box>
            </label>
            <label htmlFor="suburb" className='label-input-class2'  > Suburb(s):
            <Box className='input-box' sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select className='selection-input'
                  labelId="suburb"
                  id="suburb"
                  value={type2}
                  label="suburb"
                  onChange={handleChange2}>
                  <MenuItem value={"House"}>House</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Unit"}>Unit</MenuItem>
                  <MenuItem value={"Lifestyle"}>Lifestyle</MenuItem>
                </Select>
              </FormControl>
            </Box></label>
          </div>
          <div className="search-second-row">
            <label htmlFor="property" className='label-input-second-row'>Price from :
            <Box className='input-box-second-row' sx={{ minWidth: 10,
                    }}>
              <FormControl fullWidth>
                <InputLabel id="property">Select</InputLabel>
                <Select className='selection-input-second-row'
                  labelId="property"
                  id="property"
                  value={type3}
                  label="property"
                  onChange={handleChange3}
                  >
                  <MenuItem value={"300"}>$300</MenuItem>
                  <MenuItem value={"350"}>$350</MenuItem>
                  <MenuItem value={"400"}>$400</MenuItem>
                  <MenuItem value={"450"}>$450</MenuItem>
                  <MenuItem value={"600"}>$600</MenuItem>
                </Select>
              </FormControl>
            </Box>
            </label>
            <label htmlFor="suburb" className='label-input-second-row2'  > To :
            <Box className='input-box-second-row2' sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select className='selection-input-second-row'
                  labelId="suburb"
                  id="suburb"
                  value={type4}
                  label="suburb"
                  onChange={handleChange4}>
                  <MenuItem value={"300"}>$300</MenuItem>
                  <MenuItem value={"350"}>$350</MenuItem>
                  <MenuItem value={"400"}>$400</MenuItem>
                  <MenuItem value={"450"}>$450</MenuItem>
                  <MenuItem value={"600"}>$600</MenuItem>
                </Select>
              </FormControl>
            </Box></label>
            <label htmlFor="suburb" className='label-input-second-row3'  > Bedroom(s) :
            <Box className='input-box-second-row3' sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select className='selection-input-second-row2'
                  labelId="Bedroom"
                  id="Bedroom"
                  value={type5}
                  label="Bedroom"
                  onChange={handleChange5}>
                  <MenuItem value={"1"}>1</MenuItem>
                  <MenuItem value={"2"}>2</MenuItem>
                  <MenuItem value={"3"}>3</MenuItem>
                  <MenuItem value={"4"}>4</MenuItem>
                </Select>
              </FormControl>
            </Box></label><label htmlFor="suburb" className='label-input-second-row3'  > Bath(s) :
            <Box className='input-box-second-row3' sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select className='selection-input-second-row3'
                  labelId="Bath"
                  id="Bath"
                  value={type6}
                  label="Bath"
                  onChange={handleChange6}>
                  <MenuItem value={"1"}>1</MenuItem>
                  <MenuItem value={"2"}>2</MenuItem>
                  <MenuItem value={"3"}>3</MenuItem>
                  <MenuItem value={"4"}>4</MenuItem>
                </Select>
              </FormControl>
            </Box></label> 
          </div>
          
          { advance && (

          
          <div className="advance-checkbox">
            <form className='form' action="">
              <input type="checkbox" className='input-type-advance' id='Supermarket'/>
              <label className='labels-advance-search' htmlFor="Supermarket">Include Supermarkets Nearby (+/- 10 km) </label>
              <input type="checkbox" id='Parks'/>
              <label className='labels-advance-search' htmlFor="Parks">Include Parks & Forests nearby (+/- 50km) </label>
              <input type="checkbox" id='Pet'/>
              <label className='labels-advance-search1' htmlFor="Pet">Pet-Friendly</label>
              </form>
              <br />
              <div className="second-checkbox">
                <input  type="checkbox" id='Smoking'/>
                <label className='labels-advance-search1' htmlFor="Smoking">Smoking OK</label>
                <input type="checkbox" id='Availablenow'/>
                <label className='labels-advance-search1' htmlFor="Availablenow">Available now</label>
                <label className='labels-advance-keyword' htmlFor="keyword">Keyword(s)</label>
                <input type="text" className='input-text-key-word'id='keyword' placeholder='Keyword or Property ID'/>
              </div>
          </div>
          )
          
          }


          <div className="button-container-homepage">
            <button className='advance-search-button' onClick={() => setAdvance(!advance
              )}>
                    Advanced Search
            </button>
            <button className='search-property-button'>Search Properties</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage