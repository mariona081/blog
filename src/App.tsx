import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SinglePost from "./pages/SingleBlogPosts";
import Error from "./pages/ErrorPage";
import Blog from "./pages/Blog";
import Header from "./components/Header";
import FeaturedPage from "./pages/featuresPage";
import FeaturedHeader from "./components/featuredHeader";

function AppContent() {
  const location = useLocation()
  const isFeaturedPage = location.pathname === "/featuresPage"
    return (
      <>
          {isFeaturedPage ? <FeaturedHeader/>: <Header/>}
          <Routes>
            <Route path="/" element={<HomePage/>}/> 
            <Route path="/blog/:slug" element={<SinglePost/>} />    
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/featuresPage" element={<FeaturedPage/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
      </>
      
        )
} 

export default function App() {
  return (<BrowserRouter>
    <AppContent/>
  </BrowserRouter>)
  
}
 