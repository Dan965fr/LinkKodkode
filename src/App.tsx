import HomePage from "./pages/HomePage"
import Layout from "./components/application-layout/Layout"
import {Routes,Route} from 'react-router';
import PostPage from "./pages/PostPage";
import AddPost from "./pages/AddPost";




export default function App() {
  return (
    <Layout>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/post/:id" element={<PostPage/>}/>
        <Route path="/add-post" element={<AddPost/>}/>
    </Routes>
    </Layout>
    
      
      
        
      
    
  )
}

