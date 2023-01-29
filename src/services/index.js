import { supabase } from './supabase.js'

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
