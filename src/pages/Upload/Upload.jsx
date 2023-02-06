import React, { useState } from 'react'
import './styles.css'
import { useDropzone } from 'react-dropzone'
import { BsFillCloudUploadFill } from 'react-icons/bs'
import { publishVideo, uploadVideo } from '../../services'
import { PacmanLoader } from 'react-spinners'
import { styles } from './dropZoneStyles'
import toast from 'react-simple-toasts'

export const Upload = () => {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(null)
  const [onError, setOnError] = useState(null)

  const onDrop = async (files) => {
    const [file] = files
    if (file) {
      const [file] = files
      setUploading(true)
      const [error, fileURL] = await uploadVideo({ videoFile: file })
      if (error) {
        setOnError(error.message)
        return
      }
      if (fileURL) {
        return (
          setUploading(false),
          setUploaded(fileURL)
        )
      }
    } else {
      return (
        setOnError({ code: 'invalid file type', message: 'the file must be a .mp4 video' })
      )
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!uploaded) {
      window.alert('sube un video primero 😤')
      return
    }
    const description = (e.target.description.value)
    await publishVideo({ videoSrc: uploaded, videoDescription: description })
    toast('Video publicado 😀')
    // if (error) {
    //   setOnError(error.message)
    //   return
    // }
    // if (data) {
    //   window.alert('video publicado con exito 😀')
    // }
  }
  // function typeValidator (file) {
  //   if (file.type !== 'video/mp4') {
  //     return {
  //       code: 'invalid file type',
  //       message: 'the file must be a .mp4 video'
  //     }
  //   }

  //   return null
  // }
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    disabled: uploading || uploaded,
    accept: {
      'video/mp4': []
    },
    maxFiles: 1,
    onDrop
  })
  const style = React.useMemo(() => ({
    ...styles.baseStyle,
    ...(isFocused ? styles.focusedStyle : {}),
    ...(isDragAccept ? styles.acceptStyle : {}),
    ...(isDragReject ? styles.rejectStyle : {}),
    ...(uploaded ? styles.uploadedStyle : {})
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

    if (onError) { return (<><h4>{onError?.code}</h4><h4>{onError?.message}</h4></>) }
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
      <p>Este video se publicará en el perfil de @Uriel Castillo</p>

      <form onSubmit={handleSubmit}>
        <section>
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />

            {renderContent()}
          </div>
        </section>

        <label>
          Leyenda
          <input required name='description' placeholder='' />
        </label>

        <button>
          Publicar
        </button>
      </form>
    </div>
  )
}
