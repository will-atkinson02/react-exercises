import { useState } from "react"
import Article from "./components/Article"
import Button from "./components/Button"
import Footer from "./components/Footer"
import FirstHomePage from "./components/FirstHomePage"
import MegaCounter from "./components/MegaCounter"
import NLSButton from "./components/NLSButton"
import Nav from "./components/Nav"
import NewsLetterSignup from "./components/NewsLetterSignup"
import Status from "./components/Status"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"

function App() {

  // Using props

  const scoobyInfo = 'Scooby-Doo is an American media franchise owned by Warner Bros. Entertainment and created in 1969 by writers Joe Ruby and Ken Spears through their animated series, Scooby-Doo, Where Are You!, for Hanna-Barbera (which was absorbed into Warner Bros. Animation in 2001). The series features four teenagers: Fred Jones, Daphne Blake, Velma Dinkley, and Shaggy Rogers, and their talking Great Dane named Scooby-Doo, who solve mysteries involving supposedly supernatural creatures through a series of antics and missteps, while traveling using a brightly colored van called the "Mystery Machine".[1] The franchise has several live-action films and shows.'
  const shrek = "Shrek is a 2001 American animated fantasy comedy film loosely based on the 1990 children's picture book of the same name by William Steig. Directed by Andrew Adamson and Vicky Jenson (in their feature directorial debuts) and written by Ted Elliott, Terry Rossio, Joe Stillman, and Roger S. H. Schulman, it is the first installment in the Shrek film series. The film stars Mike Myers, Eddie Murphy, Cameron Diaz, and John Lithgow. In the film, an embittered ogre named Shrek (Myers) finds his home in the swamp overrun by fairy tale creatures banished by the obsessive ruler Lord Farquaad (Lithgow). With the help of Donkey (Murphy), Shrek makes a pact with Farquaad to rescue Princess Fiona (Diaz) in exchange for regaining control of his swamp."


  // Events

  function clicked() {
    console.log('Clicked!')
  }


  // State and conditional rendering 

  const [visible, setVisible] = useState('hidden')

  function toggleSignup() {
    if (visible === 'hidden') {
      setVisible('block')
    } else {
      setVisible('hidden')
    }
  }

  const [buttonText, setButtonText] = useState('Show Signup')

  function textUpdate() {
    if (buttonText === 'Show Signup') {
      setButtonText('Hide Signup')
    } else {
      setButtonText('Show Signup')
    }
    
  }

  function buttonToggle() {
    toggleSignup()
    textUpdate()
  }

  return (
    <>
      
      {/* Creating simple components - A ----------------------------------*/}

      <Nav />

      <FirstHomePage />



      {/* Using props ---------------------------------------------------- */}

      <Article title="Shrek" info={shrek} bgColor="bg-blue-200"/>

      <Article title="Scooby Doo" info={scoobyInfo} bgColor="bg-yellow-100" />


      
      {/* Events --------------------------------------------------------- */}

      <Button clicked={clicked} />



      {/* States and events ---------------------------------------------- */}

      <MegaCounter />


      
      {/* More states and events ----------------------------------------- */}

      <Status />



      {/*State and conditional rendering --------------------------------- */}
      
      <div className="min-h-96 flex flex-col justify-center content-evenly items-center border-4 border-b-0 p-5">
        
        <NLSButton buttonToggle={buttonToggle} buttonText={buttonText} /> 

        <NewsLetterSignup visible={visible} />

      </div>
      


      {/* More State and conditional rendering --------------------------- */}

      <div>
        <HomePage />
        <AboutPage />
        <ContactPage />
      </div>



      {/* Creating simple components - B */}

      <Footer />  

    </>

  )
}

export default App
