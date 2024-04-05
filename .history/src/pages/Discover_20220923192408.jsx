import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants'

const Discover = () => {

    const genreTitle = "Pop";

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className='font-bold text-3xl text-white text-left'>
                    Discover {genreTitle}
                </h2>
                <select
                  onChange={() => {}}
                  value=""
                  className={styles.selectStyles}
                >

                </select>
            </div>
        </div>
    )
}

export default Discover;

const styles ={
    container:`flex flex-col`,
    wrapper:`w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10`,
    selectStyles:`bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5`
}