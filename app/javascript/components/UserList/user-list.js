import React, { useEffect, useState } from "react";

function UserList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const requestPosts = async () => {
      const response = await fetch("/api/users");
      const { data } = await response.json();
      setPosts(data);
    };
    requestPosts();
  }, []);
  console.log(posts)
  return posts.map(post => <div>{post.attributes['user-name']}</div>);
}

export default UserList