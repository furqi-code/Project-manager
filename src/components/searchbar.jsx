export function Searchbar({SearchText, setSearchText}) {
  return (
    <>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={SearchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        {/* <button type="button" className="btn btn-outline-success">
          Search
        </button> */}
      </form>
    </>
  );
}
