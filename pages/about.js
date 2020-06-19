import Layout from '@components/Layout';

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className='title'>Welcome to my random musings</h1>

        <p className='description'>{description}</p>

        <p>
          I do stuff sometimes and sometimes I write about the stuff I do, but
          not usually.
        </p>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
