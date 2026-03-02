import InteractivePaths from './components/InteractivePaths';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <Navbar />
      <main>
        <InteractivePaths />
      </main>
    </div>
  );
}

export default App;
