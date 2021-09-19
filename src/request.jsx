const API_KEY= process.env.REACT_APP_NEWS_API_KEY;

const baseURL = `https://gnews.io/api/v4/`

const requests = {

   headlines: baseURL+  `top-headlines?lang=en&token=${API_KEY}`,
   techNews:baseURL+  `top-headlines?lang=en&topic=technology&token=${API_KEY}`
}

export default requests;
