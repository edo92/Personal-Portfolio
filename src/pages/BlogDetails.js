import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";
import axios from "axios";
import Disqus from "disqus-react";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";

function BlogDetails(props) {
  const [content, setContent] = useState("");
  const blogId = props.match.params.id;
  const blogFile = props.match.params.title;

  useEffect(() => {
    axios
      .get(require(`../blog/${blogFile}.md`))
      .then(result => {
        setContent(result.data);
      })
      .catch(err => console.log(err));
  }, [content]);

  return (
    <Layout>
      <div className="mi-blog-details mi-section mi-padding-bottom pt-3">
        <div className="container">
          <Carousel images={content.images} />
          <div className='pl-3 pt-3'><p>{content.title}</p></div>
          <blockquote>{content.blockquote}</blockquote>
          <p>{content.content}</p>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
