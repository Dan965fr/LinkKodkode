import HomePage from "./pages/HomePage"
import Layout from "./components/application-layout/Layout"
import {Routes,Route} from 'react-router';
import PostPage from "./pages/PostPage";
import AddPost from "./pages/AddPost";




export default function App() {
  return (
    <Routes>
      <Layout>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/post/:id" element={<PostPage/>}/>
        <Route path="/add-post" element={<AddPost/>}/>

      </Layout>
    </Routes>
    
    
      
      
        
      
    
  )
}

