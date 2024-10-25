import React from "react";

const CardComponent = (
  // {props}
  data
) => {
  const postData = data.props;
  // console.log(postData);

  return (
    <div className=" my-6 mx-4 rounded-xl h-auto  flex gap-2">
      {postData.map((post) => {
        return (
          <>
            <div className="md:flex border">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={post.imageLink}
                  alt="Post cover"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {post.name}
                </div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  {post.title}
                </div>
                <p className="mt-2 text-gray-500">{post.description}</p>
                <div className="mt-4 flex items-center">
                  <div className="text-gray-500 text-xs">{post.date}</div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CardComponent;