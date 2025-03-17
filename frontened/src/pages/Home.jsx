import MovieCard from "../MovieCard";

function Home(){
    const movie =[ 
        {id:1,title:"John wick",release_date :"2020"},
        {id:2,title:"tarminetor",release_date :"1999"},
        {id:3,title:"The Matrix",release_date :"1998"},
        // {id:4,title:"John wick",release_date :"2020"},
        // {id:5,title:"John wick",release_date :"2020"},
    ];
    return <div className="home" >
        <div className="movies-grid">
            {movie.map(movie =>(<MovieCard movie={movie}key={movie.id}/>
        ))}
        </div>
    </div>

}
export default Home