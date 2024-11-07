import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'; // Import connect if using Redux
import { fetchData } from '../action';
const Home = ({ data, loading, error, fetchData }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetching data from the API using Axios
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTodos(response.data);  // Set the fetched todos in the state
      })
      .catch(error => {
        console.error("There was an error fetching the todos!", error);
      });
  }, []);  // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <h1>Todo List</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => ( // Use 'todos' state instead of 'data'
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "✔️ Completed" : "❌ Not Completed"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Correctly define mapStateToProps function
const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error
});

// Export the connected component
export default connect(mapStateToProps,{fetchData})(Home);
