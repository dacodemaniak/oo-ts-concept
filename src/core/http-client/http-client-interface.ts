interface HttpClientInterface<T> {
  get<T>(path: string, options?: RequestInit): Promise<T>;
  post<T>(path: string, data: any, options?: RequestInit): Promise<T>;
  put<T>(path: string, data: any, options?: RequestInit): Promise<T>;
  delete(path: string, pathParam: string, options?: RequestInit): void;
  patch<T>(path: string, data: any, options?: RequestInit): Promise<T>;
}