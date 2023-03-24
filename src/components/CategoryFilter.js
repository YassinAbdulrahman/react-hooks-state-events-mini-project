function CategoryFilter({ categories, btnclick, selectedButton }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}

      {categories.map((category, index) => (
        <button
          className={btnclick === category ? 'selected' : null}
          key={index}
          onClick={() => { selectedButton(category) }}>{category}
        </button>
      ))}


    </div>
  );
}

export default CategoryFilter;
