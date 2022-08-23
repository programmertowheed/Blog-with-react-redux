import { Provider } from "react-redux";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Search from "./components/Search";
import store from "./redux/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <Nav />
                <Search />
                <BlogList />
                <Footer />
            </Provider>
        </>
    );
}

export default App;
