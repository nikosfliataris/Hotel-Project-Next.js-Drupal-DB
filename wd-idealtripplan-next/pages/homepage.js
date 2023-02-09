import Directory from "../components/Directory/Directory";
function HomePage() {
  return (
    <div>
      <Directory />
      <style jsx>{`
      :root {
        --main-color: #8b3eea;
        --white-color: #ffffff;
        --black-color: #2b2540;
        --black-color-opacity: #2b2540c4;
        --paragraph-color: #818090;
        --bg-color: #f3f6fd;
        --transition: 0.4s all ease-in-out;
    }
        .directory {
          display: flex;
          width: 100%;
        `}</style>
    </div>
  );
}

export default HomePage;
