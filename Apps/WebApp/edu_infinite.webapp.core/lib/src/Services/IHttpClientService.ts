export interface IHttpClientService {
  getAsync<TResult>(query: { [title: string]: any }): TResult;
  postAsync<TResponse>(body: { [title: string]: any }):TResponse;
//   putAsync();
//   deleteAsync();
}
