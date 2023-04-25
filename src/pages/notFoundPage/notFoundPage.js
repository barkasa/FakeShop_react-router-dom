import s from "./notFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.notFoundPage_section}>
      <img
        width={1000}
        src="https://cameralabs.org/media/lab16/post/03-16/25/zaglushki-dlya-stranitsy-Oshibka-404_6.jpg"
        alt="not_faund_page"
      />
    </div>
  );
};
export default NotFoundPage;
