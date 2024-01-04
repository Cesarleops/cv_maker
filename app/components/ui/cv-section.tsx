
interface Props {
    size: 'small' | 'medium' | 'big'
    title: string
    subtitle: string
}
export const CvSection = ({size, title, subtitle}: Props) => {
    const dimensions = (size:string) => {
        if(size === 'small') return 1
        if(size === 'medium') return 2
        return 3
    }
    
    
    return (
        <section className={`bg-[#f5f5f5] row-span-${dimensions(size)} w-[278px]  p-5 rounded-[10px]`}>
            <p className='text-lg'>{title}</p>
            <p className='text-[#7e7e7e] text-sm'>{subtitle}</p> 
          </section>
        )
}