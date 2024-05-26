function Search(props){
    return(
        <div className="search">

            <center>
                <h1 style={{color:" #e1b382"}}>SHOPAHOLIC</h1>
               
                <input className="sea"
                        type="text" 
                        placeholder="Shop now..."
                        onChange={props.searchdress}
                />
            </center>
        </div>    
    );
}
export default Search;