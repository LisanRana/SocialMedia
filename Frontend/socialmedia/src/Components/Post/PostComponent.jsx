import React from 'react'
import CardComponent from '../CardComponent/CardComponent'
 
 const PostComponent = () => {
  const PostData = [
    {
      name: "Shyam post",
      title: "Any one can help me to solve this problem?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis consequuntur minima quibusdam deleniti? Laboriosam totam sapiente accusantium! At officiis dolorem consequuntur ad odio eaque quidem illo nostrum veniam ratione.",
      date: "2024-10-15",
      imageLink:
        "https://resources.biginterview.com/wp-content/uploads/2022/12/Questions-About-Problem-Solving.jpg",
    },
    {
      name: "Ram post",
      title: "Hey do you want to communicate with me?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis consequuntur minima quibusdam deleniti? Laboriosam totam sapiente accusantium! At officiis dolorem consequuntur ad odio eaque quidem illo nostrum veniam ratione.",
      date: "2024-10-15",
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrT9CLr2OCeP5FRnpphGBDj4Ihv-sIh1zu-g&s",
    },
    {
      name: "Hari post",
      title: "Hey do you want to communicate with me?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis consequuntur minima quibusdam deleniti? Laboriosam totam sapiente accusantium! At officiis dolorem consequuntur ad odio eaque quidem illo nostrum veniam ratione.",
      date: "2024-10-15",
      imageLink:
        "https://resources.biginterview.com/wp-content/uploads/2022/12/Questions-About-Problem-Solving.jpg",
    },
  ]
   return (
     <>
     <CardComponent props={PostData} />
     </>
   )
 }
 
 export default PostComponent;