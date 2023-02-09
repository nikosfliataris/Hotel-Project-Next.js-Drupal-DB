function test() {
  return <div>test</div>;
}

export default test;
export async function getServerSideProps(ctx) {
  console.log("hello");
  return {
    props: {
      data: null,
    },
  };
}
