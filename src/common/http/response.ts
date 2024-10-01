export default interface Response<T> {
  result: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}
