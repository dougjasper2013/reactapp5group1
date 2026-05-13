'use client';

export default function HeroSection() {
  const scrollToRecipes = () => {
    document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover Recipes in a Dash</h1>
        <p className="hero-subtitle">
          Search, filter, and save delicious recipes all in one simple app.
        </p>
        <button className="cta" onClick={scrollToRecipes}>Start Exploring</button>
      </div>
    </section>
  );
}
