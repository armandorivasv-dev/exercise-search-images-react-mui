import './App.css';
import { LayoutContainer } from './container/LayoutContainer';
import ImageContextProvider from './context/ImageContext';

function App() {
  return (
    <ImageContextProvider>
      <LayoutContainer/>
    </ImageContextProvider>
  );
}

export default App;
