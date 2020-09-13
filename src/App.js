import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer.js'
import AddTodo from './container/AddTodo/AddTodo'
import VisibleTofoList from './container/visibleTodoList/visibleTodoList'

function App() {
  return (
    <div >
      <AddTodo/>
      <VisibleTofoList/>
      <Footer/>
    </div>
  );
}

export default App;