export default function SearchBar() {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search by recipe name or ingredient..." 
      />
      <button>Search</button>
    </div>
  );
}
