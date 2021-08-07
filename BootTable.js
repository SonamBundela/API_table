import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";

const BootTable = () => {
    const [posts, setPosts] = useState({ blogs: [] });

    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts({ blogs: data });
        console.log(data);
      };
      fetchPostList();
    }, [setPosts]);
    return (
        <div>
           <ReactBootStrap.Table  striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                <td className="text-primary">{item.id}</td>
                <td className="text-success">{item.title}</td>
                <td className="text-dark">{item.body}</td>
              
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
        </div>
    )
}

export default BootTable
