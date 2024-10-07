import './App.css';
import MainPage from "./components/main-page";
import DataStorageProvider from "./context/data-storage-context";

function App() {
    return (
        <DataStorageProvider>
            <MainPage/>
        </DataStorageProvider>
    );
}

export default App;
