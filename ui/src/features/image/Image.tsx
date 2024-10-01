interface ImageProps {
  src: string[]
}

export const Image = ({ src }: ImageProps) => {
  return (
    <div>
      {src.map((image, index) => (
        <img
          className="m-1"
          key={image}
          src={image}
          alt="patientimage"
          style={{ width: "100px" }}
        />
      ))}
    </div>
  )
}
