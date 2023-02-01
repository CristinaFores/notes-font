export interface Note {
  id?: string;
  owner?: {
    username: string;
    id?: string;
  };
  title: string;
  description: string;
  date?: string;
  buckpicture?: string[];
  category?: string;
}

export interface UiState {
  modal: {
    text: string;
    showModal: boolean;
    isError: boolean;
  };
  isLoading: boolean;
}
