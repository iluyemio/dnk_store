const ButtonSecondary = ({btnSecondaryText}) => {
  return (
    <button className='flex lg:block uppercase text-[.9rem] border-[1px] border-white px-8 py-3 text-white font-semibold hover:bg-white hover:text-black transition-all ease-in-out duration-500'>{btnSecondaryText}</button>
  )
}

export default ButtonSecondary