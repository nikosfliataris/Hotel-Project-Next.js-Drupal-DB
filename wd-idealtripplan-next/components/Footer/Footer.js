import style from "./Footer.module.scss";
function Footer() {
  const time = new Date();
  return (
    <footer className={style.footer}>
      <div className={style.wrap}>
        <div className={style.desc}>
          <h4 className={style.title}>
            Developed by WebDimension {time.getFullYear()}
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
