import React, { useState } from 'react';

export default function ProductCollection() {
  const [filters, setFilters] = useState({
    inStock: false,
    preOrder: false,
    outOfStock: false,
  });

  // Event handler to toggle filter selection
  const handleFilterToggle = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
  };

  // Filter logic to apply to the product list
  const filteredProducts = products.filter((product) => {
    if (filters.inStock && product.stock < 5) return false;
    if (filters.preOrder && product.stock < 3) return false;
    if (filters.outOfStock && product.stock > 10) return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Filter component */}
      <div>
        <label>
          <input type="checkbox" checked={filters.inStock} onChange={() => handleFilterToggle('inStock')} />
          In Stock (5+)
        </label>
        <label>
          <input type="checkbox" checked={filters.preOrder} onChange={() => handleFilterToggle('preOrder')} />
          Pre Order (3+)
        </label>
        <label>
          <input type="checkbox" checked={filters.outOfStock} onChange={() => handleFilterToggle('outOfStock')} />
          Out of Stock (10+)
        </label>
      </div>

      {/* Product list */}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <li key={product.id}>
          </li>
        ))}
      </ul>
    </div>
  );
}


