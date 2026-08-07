import { Helmet } from "react-helmet";
export function SEO({ title, description, keyword }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:url" content="https://example.com" />
      
    </Helmet>
  );
}
