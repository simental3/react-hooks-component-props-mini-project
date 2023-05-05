import React from "react";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"
import blogData from "../data/blog";

// console.log('Blog data: ', blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList
        key={blogData.posts.id}
        title={blogData.posts.title}
        date={blogData.posts.date}
        posts={blogData.posts}
        preview={blogData.posts.preview}
      />
    </div>
  );
}

export default App;
