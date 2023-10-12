
const BackGrountTheme = ({ color, setBackGroundColor }) => (
  <div
    onClick={setBackGroundColor}
    className="background__color"
    style={{
      "--color-white": color,
      // "--color-light": "#2C3333",
      // "--color-black": "#ffffff",
    }}
  ></div>
);

export default BackGrountTheme