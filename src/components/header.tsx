import headerIcon from '../assets/header-icon.svg'

export function Header() {
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={headerIcon} />
      <div className='flex items-center gap-5'>
        <a href='' className='font-medium text-sm text-zinc-300'>Eventos</a>
        <a href='' className='font-medium text-sm'>Participantes</a>
      </div>
    </div>
  )
}