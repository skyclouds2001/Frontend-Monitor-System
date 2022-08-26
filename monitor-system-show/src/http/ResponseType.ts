export default interface RequestResult <T> {
  success: boolean,
  message: string,
  data: T,
}
