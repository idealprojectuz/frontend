import React from "react";
import "./footer.css";
import { Context } from "../../Context/contextprovider";
export const Footer = () => {
  const [sms, setSms] = React.useState({
    image: "",
    text: "",
  });
  const { message, setMessage } = React.useContext(Context);
  const formsubmiting = (e) => {
    e.preventDefault();
    setMessage((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1].id + 1 || 1,
        text: sms.text,
        from: "me",
        image: sms.image || undefined,
      },
    ]);
    setSms({
      image: "",
      text: "",
    });
    console.log(message);
  };
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <form onSubmit={formsubmiting} autoComplete="off">
          <label className="messageicon icon1">
            <svg
              height="24px"
              width="24px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 280.067 280.067">
              <g>
                <path
                  fill="#707471"
                  d="M149.823,257.142c-31.398,30.698-81.882,30.576-113.105-0.429
		c-31.214-30.987-31.337-81.129-0.42-112.308l-0.026-0.018L149.841,31.615l14.203-14.098c23.522-23.356,61.65-23.356,85.172,0
		s23.522,61.221,0,84.586l-125.19,123.02l-0.044-0.035c-15.428,14.771-40.018,14.666-55.262-0.394
		c-15.244-15.069-15.34-39.361-0.394-54.588l-0.044-0.053l13.94-13.756l69.701-68.843l13.931,13.774l-83.632,82.599
		c-7.701,7.596-7.701,19.926,0,27.53s20.188,7.604,27.88,0L235.02,87.987l-0.035-0.026l0.473-0.403
		c15.682-15.568,15.682-40.823,0-56.39s-41.094-15.568-56.776,0l-0.42,0.473l-0.026-0.018l-14.194,14.089L50.466,158.485
		c-23.522,23.356-23.522,61.221,0,84.577s61.659,23.356,85.163,0l99.375-98.675l14.194-14.089l14.194,14.089l-14.194,14.098
		l-99.357,98.675C149.841,257.159,149.823,257.142,149.823,257.142z"
                />
              </g>
            </svg>
            <input
              type="file"
              defaultValue={sms.image}
              onChange={(e) => setSms({ ...sms, image: e.target.files[0] })}
              accept="image/jpg, image/png, image/jpeg"
              name="image"
            />
          </label>

          <input
            type="text"
            name="message"
            value={sms.text}
            onChange={(e) => setSms({ ...sms, text: e.target.value })}
            className="tginput"
            placeholder="Xabar"
          />

          <label className="messageicon icon2">
            <button
              type="submit"
              disabled={sms.text.length > 0 ? false : true}
              className="circle-area">
              <svg
                width={"24"}
                height={"24"}
                data-name="1-Arrow Up"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32">
                <path
                  fill="white"
                  d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"
                />
              </svg>
            </button>
          </label>
        </form>
      </div>
    </footer>
  );
};
