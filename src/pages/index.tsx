import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { Redirect } from '@docusaurus/router';

function HomePageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Redirect to="/docs/accueil" />
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Bienvenue sur la base de connaissance HwHost">
      <HomePageHeader />
    </Layout>
  );
}
