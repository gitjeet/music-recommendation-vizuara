import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import React, { useState } from 'react';
import { useGetTopChartsQuery } from '../redux/services/shazamCore'; 
import { links } from '../assets/constants'
import { NavLink } from "react-router-dom"
import Searchbar from '../components/Searchbar';
import { HiCube,HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
export const linksModel = [
    
    { name: 'Spotify Model', to: '/top-charts', icon: HiCube },
  ];
  
const Discover = () => {
   
    const { activeSong, isPlaying } = useSelector((state) => state.player)

    const { data, isFetching, error } = useGetTopChartsQuery();
    const [selectedItem, setSelectedItem] = useState(links[1]); // Initialize with the first item
    const [selectedItemModel, setSelectedItemModel] = useState(linksModel[0]); // Initialize with the first item
    const handleItemClickSel = (item) => {
        console.log(item)
      setSelectedItemModel(item);
      if (handleClick) handleClick(item);
    };
    const handleItemClick = (item) => {
        console.log(item)
      setSelectedItem(item);
      if (handleClick) handleClick(item);
    };
    if (isFetching) return <Loader title="Loading songs..." />;

    if (error) return <Error />;
  

    const genreTitle = "Pop";
    return(
        <div className={styles.container}>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            <div className={styles.wrapper}>
                <h2 className='font-bold text-3xl text-white text-left'>
                Spotify Recommendation System
                </h2>
             
            </div>
            <div className="mt-10">
            <h4 className='font-bold text-3xl text-white text-left'>
                Feature
                </h4>
      {links.map((item) => (
        <div
          key={item.name}
          to={item.to}
          className={`flex flex-row justify-start items-center my-8 text-sm font-medium ${
            selectedItem === item ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'
          }`}
          onClick={() => handleItemClick(item)}
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </div>
        
      ))}
      </div>
      <div className="mt-10 ml-10">
      <h4 className='font-bold text-3xl text-white text-left'>
                Model
                </h4>
                {linksModel.map((item) => (
        <div
          key={item.name}
          to={item.to}
          className={`flex flex-row justify-start items-center my-8 text-sm font-medium text-cyan-400 `}
          onClick={() => handleItemClickSel(item)}
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </div>  ))}
                </div>
                
    </div>
    <h4 className='font-bold text-3xl text-white text-left mb-4'>
                Select Genre
                </h4>
    <select
                  onChange={() => {}}
                  value=""
                  className={styles.selectStyles}
                >
                    {genres.map((genre) => 
                        <option
                          key={genre.value}
                          value={genre.value}
                        >
                          {genre.title}
                        </option>
                    )}
                </select>
                <h4 className='font-bold text-3xl text-white text-left mb-4 mt-4'>
                Enter The Song
                </h4>
  <Searchbar/>
  <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
  {data?.slice(3, 6).map((song, i) => (
    <SongCard
      key={song.key}
      song={song}
      isPlaying={isPlaying}
      activeSong={activeSong}
      data={data}
      i={i}
    />
  ))}
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