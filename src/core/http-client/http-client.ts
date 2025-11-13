abstract class HttpClient<T> implements HttpClientInterface<T> {
  protected baseURL: string;

  constructor(baseURL: string = 'http://127.0.0.1:3000') {
    this.baseURL = baseURL;
  }

  async get<T>(path: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`GET request failed: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  async post<T>(url: string, body: any, config?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers
      },
      body: JSON.stringify(body),
      ...config
    });

    if (!response.ok) {
      throw new Error(`POST request failed: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  async put<T>(path: string, data: any, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      body: JSON.stringify(data),
      ...options
    });

    if (!response.ok) {
      throw new Error(`PUT request failed: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  delete(path: string, pathParam: string, options?: RequestInit): void {
    fetch(`${this.baseURL}${path}/${pathParam}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      ...options
    }).catch(error => {
      console.error(`DELETE request failed: ${error.message}`);
    });
  }

  async patch<T>(path: string, data: any, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      body: JSON.stringify(data),
      ...options
    });

    if (!response.ok) {
      throw new Error(`PATCH request failed: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}