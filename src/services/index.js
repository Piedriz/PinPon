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
        song: 'sonido original - Amigrifo estafadisimo 😡!!',
        albumImage: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7c30136717593c2bd3d295c8385aedcd~c5_100x100.jpeg?x-expires=1675033200&x-signature=t5rG4t1gN1i%2BAvHEmy4soq7zvjg%3D',
        shares: 0,
        comments: 0,
        likes: 0
      }
    ])

  return [data, error]
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
