import QrAvatar from '/images/image-qr.png'

export const Card = () => {
  return (
    <div className="p-5 flex flex-col justify-center items-center w-[20em] text-center bg-white rounded-xl gap-5">
            <img src={QrAvatar} alt="Imagen QR" className='rounded-xl' />
        <p className='font-bold text-lg w-60 '>Improve your front-end skills by building projects</p>
        <p className='text-neutral-500'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

