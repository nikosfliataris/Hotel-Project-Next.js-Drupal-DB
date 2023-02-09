import Results from "../components/Result/Result";
import fetcher from "../functions/fetcher";
import HomeLayOut from "../LayOut/HomeLayOut/HomeLayOut";
const url = require("url");
function Result({ Drupal_Return }) {
  return (
    <>
      <HomeLayOut>
        <Results Drupal_Return={Drupal_Return} />
      </HomeLayOut>
    </>
  );
}

export default Result;
export async function getServerSideProps(ctx) {
  console.log(ctx.query);

  const Drupal_Accomodations = await fetcher(
    `https://dev-fliataris-app.pantheonsite.io/jsonapi/node/accomodations`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    }
  );
  const Drupal_Boards = await fetcher(
    `https://dev-fliataris-app.pantheonsite.io/jsonapi/node/boards`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    }
  );

  return {
    props: {
      Drupal_Return: [Drupal_Accomodations, Drupal_Boards],
    },
  };
}
