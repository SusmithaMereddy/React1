import { useState } from 'react'
// import Student from './Student'
// import List from './List'
import Input from './Input'
// import CarDetails from './CarDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navigation from './components/Navigation'
import Contact from './components/Contact'
function App() {
  const [studentName, setStudentName] = useState('Susmitha')
  const [age, setAge] = useState(22)
  return (
    <div>
      {/* /* <List/>
      <Input/>
      <CarDetails/> */}
      {/* <p> Hello all</p>
      <p>Name is : {studentName} and age is : {age}</p>
      <Student name="Siri" rollno="593"/>
      <Student name="Sumanth" rollno="594"/>
      <Student name="Poojitha" rollno="5A6"/> */}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}
export default App