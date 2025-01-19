export interface AlbumType {
  albumName: string;
  thumbnail: string;
}

export interface AlbumProps {
  albumName: string;
  thumbnail: string;
}

export interface FormGroupProps {
  label: string;
  inputValue: string;
  onInputChange: (value: string) => void;
  buttonText: string;
  onButtonClick: () => void;
  isLoading?: boolean;
  placeholder?: string;
}
