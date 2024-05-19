import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Dashboard.css';
import useFetch from '../../customHooks/useFetch';
// useFetch
const envBaseUrl = 'https://frontend-assessment-server.onrender.com/api';
const Dashboard = () => {
  const [products, setProducts] = useState([]);
//   const { data: products, loading, error, sendRequest, refetch } = useFetch(`${envBaseUrl}/dashboard`);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://frontend-assessment-server.onrender.com/api/dashboard');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedProducts = useCallback(() => {
    let sortableProducts = [...products];
    if (sortConfig !== null) {
      sortableProducts.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        if (sortConfig.key === 'id') {
          aValue = parseInt(aValue, 10);
          bValue = parseInt(bValue, 10);
        }

        if (aValue < bValue) {

          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableProducts;
  }, [products, sortConfig]);

  const handleRemove = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const filteredProducts = sortedProducts().filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toString().includes(searchTerm)
    );
  });

  return (
    <div className="dashboard">
      <input
        type="text"
        placeholder="Search by name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              Product Id
              {sortConfig.key==='id' ? <>{sortConfig.direction==="ascending" ? <>⬇️</>:<>⬆️</>}</> :<></> }
            </th>
            <th onClick={() => handleSort('name')}>
              Product Name {sortConfig.key==='name' ? <>{sortConfig.direction==="ascending" ? <>⬇️</>:<>⬆️</>}</> :<></> }
            </th>
            <th onClick={() => handleSort('selling_price')}>
              Selling Price {sortConfig.key==='selling_price' ? <>{sortConfig.direction==="ascending" ? <>⬇️</>:<>⬆️</>}</> :<></> }
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.selling_price}</td>
              <td>
                <button onClick={() => handleRemove(product.id)}>Check</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
