import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SinglePost from "./pages/SingleBlogPosts";
import Error from "./pages/ErrorPage";
import Blog from "./pages/Blog";
import Header from "./components/Header";

import FeaturedHeader from "./components/featuredHeader";


import AboutMePage from "./pages/aboutMePage";
import FeaturedPage from "./pages/featuredPage";
import PersonalSpace from "./pages/personalSpace";
import PersonalSpaceHeader from "./components/personalSpaceHeader";
import TopBlogPostIntroduction from "./pages/topBlogPosts";
// import AboutMeHeader from "./components/aboutMeHeader";

function AppContent() {
  const location = useLocation()
  let header;
  if (location.pathname === "/featuredPage") {
    header = <FeaturedHeader/>
  }else if (location.pathname === "/personalSpace") {
    header = <PersonalSpaceHeader/>
  } else if(location.pathname === "/aboutMePage") {
    header = null
  }else if(location.pathname === "/topBlogPosts") {

  } else if(location.pathname === "/") {
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
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/featuredPage" element={<FeaturedPage/>}/>
            <Route path="/personalSpace" element={<PersonalSpace/>}/>
            <Route path="/aboutMePage" element={<AboutMePage/>}/>
            <Route path="/topBlogPosts" element={<TopBlogPostIntroduction/>}/>
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
 