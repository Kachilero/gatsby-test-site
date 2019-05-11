import React from "react";
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head pageTitle="About" />
      <h1>About Page Title</h1>
      <p>Resist virtually like an intelligent parasite. Be fraternal for whoever contacts, because each has been witnessed with acceptance.</p>
      <p>Hire Me! <Link to="/contact">Contact Page</Link></p>
    </Layout>
  )
}

export default AboutPage;
