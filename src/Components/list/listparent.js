

export const ListParentOrdered = () =>{
    return(
        <ol>
            <ListItems></ListItems>
        </ol>
    )
};

export const ListParentUnordered = () =>{
    return(
        <ul>
            <ListItems></ListItems>
        </ul>
    )
};

// const ListItems = () =>{
//     return(
//         <div>
//             <li>Apple</li>
//             <li>Banana</li>
//             <li>Orange</li>
//             <li>Grapes</li>
//         </div>
        
//     )
// };

const ListItems = () => {
    const iplTeams = [
        {
            teamName: "CSK",
            teamPlayers: ["Dhoni", "Jadeja", "raina"],
            won: 5,
            wonYears: [2015, 2012, 2016, 2017],
            teamsLogo: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          },
          {
            teamName: "SRH",
            teamPlayers: ["Cummins", "Jadeja", "raina"],
            won: 5,
            wonYears: [2015, 2012, 2016, 2017],
            teamsLogo:
              "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          },
          {
            teamName: "RCB",
            teamPlayers: ["Cummins", "Jadeja", "raina"],
            won: 8,
            wonYears: [],
            teamsLogo: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          },
    ];

    function filterData(iplTeams){
        const newTeams = iplTeams.filter((eachTeam) => eachTeam.won >=5);
        return newTeams;
    }

    return (
        <div>
            {filterData(iplTeams).map((eachTeam) =>{
                return (
                    <div>
                        <h2>{eachTeam.teamName}</h2>
                        <img src={eachTeam.teamsLogo} width={100} height={100} alt=""/>
                        {eachTeam.teamPlayers.map((eachplayer) => {
                            return(
                                <>
                                <h6>{eachplayer}</h6>
                                </>
                            );
                        })}
                    </div>
                )
            }
        )}
        </div>
    )
}