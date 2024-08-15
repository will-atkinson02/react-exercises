
function MeetTheTeam() {
    
    let teamMembers = [ "Sally", "Squidrick", "Defalgous", "Grosnivoa", "Fermented-Spider-Eye"]
    

    teamMembers = [
        {
            "name" : "Bill",
            "job" : "admin",
            "image" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBill_Nye&psig=AOvVaw2M0UP6K-jM9avsbCAM63ST&ust=1719326840378000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDEwOC99IYDFQAAAAAdAAAAABAJ"
        },

    ]

    
    return (
    
        <ul>
            {teamMembers.map(person => (<div><h2 key={person}>{person}</h2>
                <p></p></div>))}
        </ul>
        
        
    )
}

export default MeetTheTeam