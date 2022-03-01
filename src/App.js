import NewBookForm from './components/BookForm';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar></NavBar>
        <BookList></BookList>
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
