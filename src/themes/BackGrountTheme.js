
const BackGrountTheme = ({ color, setBackGroundColor }) => (
  <div
    onClick={setBackGroundColor}
    className="background__color"
    style={{
      "--color-white": color,
      "--color-light": "gray",
      "--color-black": "--color-white",
    }}
  ></div>
);

export default BackGrountTheme