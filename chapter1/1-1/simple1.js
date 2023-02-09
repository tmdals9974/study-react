function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    "button", //tag
    { onClick: () => setLiked(!liked) }, //props
    text //child
  );
}

const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(LikeButton), domContainer); //component render

/**
 * 아래의 방법으로도 각각의 상태를 가진 다수의 컴포넌트를 등록 가능.
 */

/*
ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    React.createElement(LikeButton)
  ),
  domContainer
); 
*/

/**
 * ? React.createElement(tag, props, ...childs)
 *
 * React.createElement(
 *    "div",  // * tag
 *    null,  // * props
 *    React.createElement("p", null, "hello"), // * child
 *    React.createElement("p", null, "world") // * child
 * );
 *
 * 결과물 : 
 * <div>
 *  <p>hello</p>
 *  <p>world</p>
 * </div>
 */

