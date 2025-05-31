import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SinglePost from "./pages/SingleBlogPosts";
import Error from "./pages/ErrorPage";
import Blog from "./pages/Blog";
import Header from "./components/Header";
import FeaturedPage from "./pages/featuresPage";

export default function App() {
    return (
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/> 
            <Route path="/blog/:slug" element={<SinglePost/>} />    
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog" element={<FeaturedPage/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </BrowserRouter>
        )
} 
 