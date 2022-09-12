import Home, { getServerSideProps } from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = (args: object, { loaded: { name } }: any) => (
  <Home {...args} name={name} />
);

HomePage.args = { name: "Jane Doe" };

HomePage.loaders = [
  async () => {
    let data = await getServerSideProps();
    return data.props;
  },
];
