export default `
  query storeConfig {
    footerConfig {
          useful_links {
            title
            target
            type
            url
        }
        purchase_info
        {
            title
            target
            type
            url
        }
        get_in_touch
        {
          title
          value
        }
        follow_us{
            section
        }
    }
  }
`;