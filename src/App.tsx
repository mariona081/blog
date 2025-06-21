import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SinglePost from "./pages/SingleBlogPosts";
import Error from "./pages/ErrorPage";
import Blog from "./pages/Blog";
import Header from "./components/Header";
import FeaturedPage from "./pages/featuresPage";
import FeaturedHeader from "./components/featuredHeader";
import MariTabs from "./pages/mariTabs";
import MariTabsHeader from "./components/mariTabsHeader";
import AboutMePage from "./pages/aboutMePage";
// import AboutMeHeader from "./components/aboutMeHeader";

function AppContent() {
  const location = useLocation()
  let header;
  if (location.pathname === "/featuresPage") {
    header = <FeaturedHeader/>
  }else if (location.pathname === "/mariTabs") {
    header = <MariTabsHeader/>
  } else if(location.pathname === "/aboutMePage") {
    header = 0
  } else {
    header = <Header/>
  }
    return (
      <>
          {header}
          <Routes>
            <Route path="/" element={<HomePage/>}/> 
            <Route path="/blog/:slug" element={<SinglePost/>} />    
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/featuresPage" element={<FeaturedPage/>}/>
            <Route path="/mariTabs" element={<MariTabs/>}/>
            <Route path="/aboutMePage" element={<AboutMePage/>}/>
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
 