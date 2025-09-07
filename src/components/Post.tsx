type Posts = {
    img_url:string,
    description:string;
    likes:number,
    user_name:string,
    date:string
}

export default function Post({img_url,description,likes,user_name,date}:Posts) {

  return (
    <div className="post">
        <img src={img_url} alt={user_name} className="img_post" />
        <div className="post-content">
            <p className="post-description">{description}</p>
            <p className="post-likes">{likes}</p>
            <p className="post-user">{user_name}</p>
            <p className="post-time">{date}</p> 
        </div>
    </div>
  )
}
