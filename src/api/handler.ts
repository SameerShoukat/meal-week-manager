type httpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface fetchConfig{
  method : httpMethod;
  headers : Record<string, string>;
  body?:any;
}
 const api:string = 'https://dummyjson.com';

const apiHandler = async (path:string, method:httpMethod = 'GET', data:any = null, token:string = '', url:boolean=false) => {
    const headers : any = {};
    // Add Authorization header only if token is provided
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  
    const config : fetchConfig = {
      method,
      headers,
    };
  
    // Check if data is FormData (used for file uploads)
  if (data instanceof FormData) {
    config.body = data; // Let the browser set the correct Content-Type
  } else if (method === 'POST' && data) {
    headers['Content-Type'] = 'application/json';
    config.body = JSON.stringify(data); // Stringify data if not FormData
  }

  const updatedPath:string = url  ? path : `${api + path}`;

    try {
      const response = await fetch(updatedPath, config);
      const result = await response.json();
      return result;
    } catch (error:any) {
      console.error('API Error:', error.message);
      throw error;
    }
  };
  
export default apiHandler;
  