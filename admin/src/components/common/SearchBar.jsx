import PropTypes from "prop-types";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div id="tablefilter">
      <div id="DataTables_Table_0_filter" className="dataTables_filter">
        <label>
          <input
            type="search"
            className="form-control form-control-sm"
            placeholder="Search"
            aria-controls="DataTables_Table_0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
