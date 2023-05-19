export interface State<T> {
  isLoading: boolean;
  error: string | null;
  data: T | null;
}

export interface VideoProgress {
  lessonId: string;
  startPoint: number;
}
