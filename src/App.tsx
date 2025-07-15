import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SinglePost from "./pages/SingleBlogPosts";
import Error from "./pages/ErrorPage";
import Blog from "./pages/featuredBlog";
import Header from "./components/Header";
import FeaturedHeader from "./components/featuredHeader";
import AboutMePage from "./pages/aboutMe";
import PersonalSpace from "./pages/mariTabs";
import CategoryPage from "./pages/categoryPage";
import TopBlogPostIntroduction from "./pages/Blog";



function AppContent() {
  const location = useLocation()
  let header;
  if (location.pathname === "/featuredPage") {
    header = <FeaturedHeader/>
  }else if (location.pathname === "/mariTabs") {
    header = null
  } else if(location.pathname === "/aboutMe") {
    header = null
  }else if(location.pathname === "/blog") {
    header = null
  } else if(location.pathname === "/") {
    header = null
  }else if (location.pathname === "/featuredBlog") {
    header = null
  }else if(location.pathname === "/categoryPage"){
    header = null
  }else if(location.pathname.startsWith("/category/")) {
    header = null
  } else {
    header = <Header/>
  }
    return (
      <div className="min-h-screen w-full overflow-hidden">
          {header}
          <Routes>
            <Route path="/" element={<HomePage/>}/> 
            <Route path="/blog/:slug" element={<SinglePost/>} />    
            <Route path="/featuredBlog" element={<Blog/>}/>
            <Route path="/mariTabs" element={<PersonalSpace/>}/>
            <Route path="/aboutMe" element={<AboutMePage/>}/>
            <Route path="/category/:categoryId" element={<CategoryPage/>}/>
            <Route path="/blog" element={<TopBlogPostIntroduction/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
      </div>
      
        )
} 

export default function App() {
  return (<BrowserRouter>
    <AppContent/>
  </BrowserRouter>)
  
}
 