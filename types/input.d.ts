interface InputImage {
  defaultImage : string,
  onChange : (file:File) => void,
  imageRatio ?: string,
  className ?: string
}
