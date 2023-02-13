import React from 'react'

export const AboutApp = () => {

    const styleSkills = {
        color: "#BB2649",
        fontSize: "18px",
        paddingTop: "20px",
      };
      const styleAboutSkills = {
        fontSize: "16px",
        marginBottom: "0px",
       
      }
  return (
    <div>
        <h1 style={styleSkills}>
        I used some hard skills for development of this application:
      </h1>
      <p style={styleAboutSkills}>1. I used functional components with React Hooks;</p>
      <p style={styleAboutSkills}>2. I was createing all icons for the header in CorelDraw (vector format);</p>
      <p style={styleAboutSkills}>3. I used one component to exchange data with the database;</p>
      <p style={styleAboutSkills}>4. React Context Hook is used to transfer data in the application;</p>
      <p style={styleAboutSkills}>5. I used for data storage IndexedDB is an indexed key-object database;</p>

    </div>
  )
}
