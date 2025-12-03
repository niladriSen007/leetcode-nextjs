export interface OnBoardUserResponse<T> {
  data: T | null;
  success: boolean;
  message: string;
  statusCode: number;
  error: string | null;
}