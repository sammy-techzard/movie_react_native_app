import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <Link href={`/movies/${movie.id}`} asChild>
            <TouchableOpacity className='w-[30%]'>
                <Image source={{
                    uri: movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : `https://placehold.co/600x400/1a1a1a/ffffff.png`
                }}
                    className='w-full h-52 rounded-lg '
                    resizeMode='cover'
                />
                <Text className='text-white text-sm font-bold mt-2' numberOfLines={1}>
                    {movie.title}
                </Text>
                <View className='flex-row items-start justify-start gap-x-1'>
                    <Image source={icons.star} className='size-4' />
                    <Text className='text-white text-xs font-bold uppercase'>{Math.round(movie.vote_average / 2)}</Text>
                </View>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-light-300 mt-1 text-xs font-medium'>
                        {movie.release_date?.split('-')[0]}
                    </Text>
                    {/* <Text className='text-light-300 mt-1 text-xs font-medium uppercase'>
                        Movie
                    </Text> */}

                </View>
            </TouchableOpacity>

        </Link >
    )
}

export default MovieCard