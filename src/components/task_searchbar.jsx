export function TaskSearchbar({ searchTextTask, setSearchTextTask }) {
  return (
    <>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTextTask}
          onChange={(event) => {
            setSearchTextTask(event.target.value);
          }}
        />
        {/* <button type="button" className="btn btn-outline-success">
          Search
        </button> */}
      </form>
    </>
  );
}
