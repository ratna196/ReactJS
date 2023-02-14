function QueryParams() {
    const queryParams = new URLSearchParams(window.location.search)
    const term = queryParams.get("term")
    const location = queryParams.get("location")
  
    return (
      <div className="App">
        <p>Value of term: {term}</p>
        <p>Value of location: {location}</p>
      </div>
    )
  }
  
  export default QueryParams;