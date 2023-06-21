// function Message(){
//     const name = "sreeni";
//        return <h1>Hey I am {name}</h1>
// }
// export default Message;

function Message(){
   const name = "sreeni";
   if(name){
    return <h1>I am {name}</h1>;
   }
   return <h1>Hello World</h1>;
}

export default Message;