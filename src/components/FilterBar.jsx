function FilterBar({ category, setCategory }) {
  return (
    <div className="filter-bar">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Jobs</option>
        <option value="Government">Government</option>
        <option value="Private">Private</option>
        <option value="Apprentice">Apprentice</option>
        <option value="ITI">ITI</option>
        <option value="Diploma">Diploma</option>
      </select>

    </div>
  )
}

export default FilterBar
