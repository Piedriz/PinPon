import { VideoPlayer } from '../VideoPlayer'
import './styles.css'
const VIDEOS = [
  {
    id: 1,
    src: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t39.25447-2/327585875_1375754349929328_340914814776736008_n.mp4?_nc_cat=1&vs=68e66e1f3e15e0a9&_nc_vs=HBksFQAYJEdGT1FoaE53WTFQRlBlTUVBQWg1YjhFM0xMc0VibWRqQUFBRhUAAsgBABUAGCRHUHJqZWhPYkU4b0ZqRFlEQUZSVUxJeGNTbkFoYnJGcUFBQUYVAgLIAQBLB4gScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AHXVzZV9sYW5jem9zX2Zvcl92cW1fdXBzY2FsaW5nABFkaXNhYmxlX3Bvc3RfcHZxcwAVACUAHAAAJoyk6qeHvMoBFQIoAkMzGAt2dHNfcHJldmlldxwXQGABBiTdLxsYIGRhc2hfdjRfNXNlY2dvcF9ocTFfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwqIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfc2QTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQpzZF91bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQHMjcyMDY0MRFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3ZpZGVvX2lkDzYxNDU0MzQ5NDAxNDY0NBJvZW1fdmlkZW9fYXNzZXRfaWQPNDYyOTg1NTIyNzE1MjI4FW9lbV92aWRlb19yZXNvdXJjZV9pZA80NDUyMzQ0NzEwNjE3NjYcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAzNDU5MDE5NjI3NjcwMzI0DnZ0c19yZXF1ZXN0X2lkACUCHAAlvgEbB4gBcwQ2NDI4AmNkCjIwMjMtMDEtMjUDcmNiBzI3MjA2MDADYXBwFkNyZWF0b3IgU3R1ZGlvIGZvciBpT1MCY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zBzEyOC4wMzUCdHMUcHJvZ3Jlc3NpdmVfb3JkZXJpbmcA&ccb=1-7&_nc_sid=a283a4&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9zZCJ9&_nc_ohc=WHB5vDR9X5kAX9nM9AW&_nc_rml=0&_nc_ht=scontent.fbaq1-1.fna&oh=00_AfAI3rHiCAlrrrxcmPM4Ugi9ROKmp1pbS3sqFXhRvkdALg&oe=63D7E4A5&_nc_rid=370075234353023',
    author: 'Foody Fetish',
    description: 'Pargo frito ve',
    likes: 928,
    shares: 891,
    comments: 333,
    songTitle: 'sonido original - Foody Fetish',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ccdfced70802867a94bfc1d31a437716~c5_100x100.jpeg?x-expires=1675004400&x-signature=%2F5H%2Bm14v5YNVUzdfBCs6HmKHl3s%3D',
    albumImage: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/574c01221cf235477a01d485d8e51ce8~c5_100x100.jpeg?x-expires=1675026000&x-signature=QaYDeKyCLlAjXA9DdoI%2BVdGT0Wg%3D'
  },
  {
    id: 2,
    src: 'https://scontent.feoh3-1.fna.fbcdn.net/v/t42.1790-2/318626331_5820295804676417_6607144213753891587_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=ib2gZX3MdAkAX_gtSQs&_nc_oc=AQmSGG6m_5NzZ9YdcNeNiX6UKwEL0mQbUB4Hf2xwBnu5S5wfcRFOUlP4UZnH3QZLllp_ICDMuJ6ak-r39yFJyDSj&_nc_rml=0&_nc_ht=scontent.feoh3-1.fna&oh=00_AfAmiWc7uZ0fJWBaADN2ywQ2XjMvuEDIDXHrw5J3202Krw&oe=63D5A5E5',
    author: 'Amigrifo Morado',
    description: 'Me est4f4ron con este gravity de $10,000 😭',
    likes: 821,
    shares: 12,
    comments: 1231,
    songTitle: 'sonido original - Foody Fetish',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ccdfced70802867a94bfc1d31a437716~c5_100x100.jpeg?x-expires=1675004400&x-signature=%2F5H%2Bm14v5YNVUzdfBCs6HmKHl3s%3D',
    albumImage: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7c30136717593c2bd3d295c8385aedcd~c5_100x100.jpeg?x-expires=1675033200&x-signature=t5rG4t1gN1i%2BAvHEmy4soq7zvjg%3D'

  },
  {
    id: 3,
    src: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t42.1790-2/10000000_125327590312642_1025375548508155110_n.mp4?_nc_cat=106&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjU0MywicmxhIjozNjA1LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=zw2Nat_blZ0AX_BOHvQ&_nc_rml=0&_nc_ht=scontent.fbaq1-1.fna&oh=00_AfDHMweNgvwN5FjtdPPRcEM2VHCGKqki0g5PGcWsb8eOoA&oe=63D5EACE',
    author: 'Algo Bien',
    description: 'Una almeja chocolata tan fresca como esta so',
    likes: 928,
    shares: 891,
    comments: 333,
    songTitle: 'sonido original - Foody Fetish',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ccdfced70802867a94bfc1d31a437716~c5_100x100.jpeg?x-expires=1675004400&x-signature=%2F5H%2Bm14v5YNVUzdfBCs6HmKHl3s%3D',
    albumImage: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/574c01221cf235477a01d485d8e51ce8~c5_100x100.jpeg?x-expires=1675026000&x-signature=QaYDeKyCLlAjXA9DdoI%2BVdGT0Wg%3D'

  }
]
export const FeedVideos = () => {
  return (
    <section className='feed'>
      {
        VIDEOS.map(video => (
          <div key={video.id} className='item'>
            <VideoPlayer {...video} />
          </div>
        )
        )
      }
    </section>
  )
}
