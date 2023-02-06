import { supabase } from './supabase.js'
const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL

export const uploadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID()
  const { data, error } = await supabase.storage
    .from('videos')
    .upload(`uploads/${filename}.mp4`, videoFile)
  const file = data?.path ? `${prefix}${data.path}` : ''
  return [error, file]
}

export const publishVideo = async ({ videoSrc, videoDescription }) => {
  const { data, error } = await supabase
    .from('videos')
    .insert([
      {
        src: videoSrc,
        user_id: '269d7977-70f5-4ed4-ac24-f1180090f69a',
        description: videoDescription,
        song: 'sonido original - Musica chida 😀!!',
        albumImage: 'https://images6.fanpop.com/image/photos/37200000/Dilip-Mehta-photoshoot-1991-michael-jackson-37218788-300-275.jpg',
        shares: 0,
        comments: 0,
        likes: 0
      }
    ])

  return [error, data]
}
export const getVideos = async () => {
  const { data: videos, error } = await supabase
    .from('videos')
    .select(`
    *,
    user:users(
      userImage,
      username
    )
  `)
  return [error, videos]
}
