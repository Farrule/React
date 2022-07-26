import './App.css';
import Blog from './components/Blog';
import NumberList from './components/List&Key/NumberList';

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

  return (
    <div className="App">
      <h1>Hello World</h1>
      <NumberList numbers={numbers} />
      <Blog posts={posts} />
    </div>
  );
}

export default App;