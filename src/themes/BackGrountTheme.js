
const BackGrountTheme = ({ color, setBackGroundColor }) => (
  <div
    onClick={setBackGroundColor}
    className="background__color"
    style={{
      "--color-white": color,
      "--color-light": "#B9BBB6",
      "--color-black": "#ffffff",
    }}
  ></div>
);

export default BackGrountTheme