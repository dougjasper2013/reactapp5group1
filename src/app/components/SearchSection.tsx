'use client';

interface SearchSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchSection({ searchTerm, onSearchChange }: SearchSectionProps) {
  return (
    <section className="search-section">
      <h2 className="search-title">Search for a Recipe</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by recipe name or ingredient..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button className="search-button">Search</button>
      </div>
    </section>
  );
}