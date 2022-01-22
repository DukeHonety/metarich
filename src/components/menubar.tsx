import React from "react";
import routes from "../routes";

const MenuBar = () =>{
  const style:string = "inline-block text-white p-20p text-20p";
  const linkUrls = [
      {
          name: "",
          url: "https://www.instagram.com/metarichnft/",
          content: "",
          class: "relative top-5p inline-block bg-no-repeat bg-linkBackPos bg-20pauto rounded-full w-30p h-30p mr-5p ml-5p bg-instagram",
          img: ""
      },
      {
          name: "",
          url: "http://www.twitter.com/metarichnft",
          content: "",
          class: "relative top-5p inline-block bg-no-repeat bg-linkBackPos bg-20pauto rounded-full w-30p h-30p mr-5p ml-5p bg-twitter",
      },
      {
          name: "",
          url: "https://discord.gg/cJJd8wNvCk",
          content: "",
          class: "relative top-5p inline-block bg-no-repeat bg-linkBackPos bg-20pauto rounded-full w-30p h-30p mr-5p ml-5p bg-discord",
      }
  ];
  return (
    <>
      <div className="relative float-right">
        <ul className="inline-block">
          {
            routes.map((route,key)=>{
                return <li className={style} key={key}><a href={route.path}>{route.name}</a></li>;
            })
          }
        </ul>
        <div className={style} key="work">
          {
              linkUrls.map( (link,key) => {
                  return <a href={link.url} target="_blank" key={key} className={link.class}>{link.content}</a>;
              })
          }
        </div>
      </div>
    </>
  );
}

export default MenuBar;