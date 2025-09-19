export function ProjectSearchbar({searchTextProject, setSearchTextProject}) {
  return (
    <>
      <form className="d-flex" role="search" style={{width: "55%"}}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTextProject}
          onChange={(event) => {
            setSearchTextProject(event.target.value);
          }}
        />
        {/* <button type="button" className="btn btn-outline-success">
          Search
        </button> */}
      </form>
    </>
  );
}
