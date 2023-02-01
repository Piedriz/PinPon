import React, { useState } from 'react'
import './styles.css'
import { useDropzone } from 'react-dropzone'
import { BsFillCloudUploadFill } from 'react-icons/bs'
import { publishVideo, uploadVideo } from '../../services'
import { PacmanLoader } from 'react-spinners'

export const Upload = () => {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(null)
  const [onError, setOnError] = useState(null)

  const onDrop = async (files) => {
    const [file] = files
    setUploading(true)
    const [error, fileURL] = await uploadVideo({ videoFile: file })
    if (error) setOnError(error)
    if (fileURL) {
      return (
        setUploading(false),
        setUploaded(fileURL)
      )
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(uploaded)
    if (!uploaded) return
    const description = (e.target.description.value)
    const [data, error] = await publishVideo({ videoSrc: uploaded, videoDescription: description })
    if (error) setOnError(error.message)
    if (data) {
      console.log('video subido con exito')
    }
  }
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    disabled: uploading || uploaded,
    accept: {
      'video/mp4': ['.mp4']
    },
    maxFiles: 1,
    onDrop
  })

  const baseStyle = {
    flex: 1,
    width: '260px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
    height: '430px',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#5e5a5a92',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  }

  const focusedStyle = {
    borderColor: '#2196f3'
  }

  const acceptStyle = {
    borderColor: '#00e676'
  }

  const uploadedStyle = {
    backgroundColor: '#70f582c1'
  }

  const rejectStyle = {
    borderColor: '#ff1744'
  }
  const style = React.useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {}),
    ...(uploaded ? uploadedStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject,
    uploaded
  ])
  const renderContent = () => {
    if (isDragReject) { return (<h4>Archivo no válido</h4>) }
    if (isDragAccept) { return (<h4>¡Suelta para subir!</h4>) }

    if (uploading) { return (<PacmanLoader color='#36d7b7' />) }
    if (uploaded) { return (<h4>¡Video cargado con exito!</h4>) }

    if (onError) { return (<h4>{onError}</h4>) }
    return (
      <>
        <div className='icon'>
          <BsFillCloudUploadFill color='#96969e9f' size={40} />
        </div>
        <div className='title'>
          <span>Selecciona el video para cargar</span>
        </div>

        <div className='subtitle'>
          <span>O arrastra y suelta un archivo</span>
        </div>

        <div className='info'>
          <span>MP4 o WebM</span>
          <span>resolución de al menos 720x1280</span>
          <span>hasta 30 minutos</span>
          <span>menos de 2 GB</span>
        </div>

        <div className='button'>
          <button>Seleccione un archi...</button>
        </div>

      </>
    )
  }
  return (
    <div className='upload'>

      <h1>Cargar video</h1>
      <p>Este video se publicará en el perfil de @piedriz</p>

      <form onSubmit={handleSubmit}>
        <section>
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />

            {renderContent()}
          </div>
        </section>

        <label>
          Leyenda
          <input name='description' placeholder='' />
        </label>

        <button>
          Publicar
        </button>
      </form>
    </div>
  )
}
